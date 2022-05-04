const mongo = require('mongodb').MongoClient;
const ObjectID=require("mongodb").ObjectID;
const {name, apiKey ,collections} = require('./mongo.config.js');

const { databaseLog } = require('../models/logsColors/DatabaseLogs');

function Mongo(){
    this.bbdd = {};
  /*
   *  @param bbdd =>nombre de la coleccion a la que se quiere acceder.
   *       elemento => elemento que se desea insertar.
   *         callback => funcion de callback
   */
  this.insert = function(bbdd,elemento,callback){
    insertar(this.bbdd[bbdd],elemento,callback);
  }
  /*
   *  @param bbdd =>nombre de la coleccion a la que se quiere acceder.
   *         callback => funcion de callback
   */
  this.selectAll=function(bbdd,callback){
      obtenerTodos(this.bbdd[bbdd],callback);
    }
  /*
   *  @param bbdd =>nombre de la coleccion a la que se quiere acceder.
   *       criterio => es el criterio de busqueda ejemplo {user:_id}.
   *         callback => funcion de callback
   */
  this.select=async function(bbdd,criterio,callback){
      obtener(this.bbdd[bbdd],criterio,callback);
    }
    /*
   *  @param bbdd =>nombre de la coleccion a la que se quiere acceder.
   *       elemento => elemento que se desea modificar.
   *         callback => funcion de callback
   */
  this.update=function(bbdd,elemento,callback){
        modificarColeccion(this.bbdd[bbdd],elemento,callback);
    }

    /*
   *  @param bbdd =>nombre de la coleccion a la que se quiere acceder.
   *       elementoID => elemento que se desea insertar.
   *         callback => funcion de callback
   */
    this.delete=function(bbdd,elementoUID,callback){
       eliminar(this.bbdd[bbdd],this.parseID(elementoUID._id),callback);
    }

    //// funciones genéricas

    function obtenerTodos(coleccion,callback){
        coleccion.find().toArray(function(error,col){
            callback(col);
        });
    };

    function obtener(coleccion,criterio,callback){
        coleccion.find(criterio).toArray(function(error,col){
            if (col.length==0){
                callback(undefined);
            }
            else{
                callback(col[0]);
            }
        });
    };

	function insertar(coleccion,elemento,callback){
        coleccion.insertOne(elemento,function(err,result){
            if(err){
                databaseLog({msg:'No se ha conseguido insertar el elemento',state:'Error'});
            }
            else{
                databaseLog({msg:'Nuevo elemento creado',state:'Succeful'});
                callback(elemento);
            }
        });
    }

    function modificarColeccion(coleccion,usr,callback){
        coleccion.findAndModify({_id:ObjectID(usr._id)},{},usr,{},function(err,result){
            if (err){
                databaseLog({msg:'No se pudo actualizar (método genérico)',state:'Error'});
            }
            else{     
                databaseLog({msg:'Elemento actualizado',state:'Succeful'})
            }
            callback(result);
        });
    }

    function eliminar(coleccion,criterio,callback){
        coleccion.remove(criterio,function(err,result){
            if(!err){
                databaseLog({msg:'Elemento se ha eliminado',state:'Succeful'});
                callback(result);
            }else{
                databaseLog({msg:'No se pudo eliminar el elemento',state:'Error'});
            }
        });
    }

    this.cerrar=function(){
        this.dbase.close();
    }
    this.connect=function(callback){
	    var me=this;		
        mongo.connect(apiKey,
            {useUnifiedTopology: true },
            function(err, database){ 
                if (err){
                    databaseLog({msg:'No pudo conectar a la base de datos',state:'Error'});
                }
                else{
                    databaseLog({msg:'Conectado a Mongo',state:'Succeful'});        
                    for (var pos in collections){
                        database.db(name).collection(collections[pos],function(err,col){
                        if (err){
                            databaseLog({msg:'No se puede obtener la coleccion - ' + collections[pos],state:'Error'});
                        }else{       
                            databaseLog({msg:'Recuperada coleccion - ' + collections[pos],state:'Succeful'});                                 
                            me.bbdd[collections[pos]]=col;                                                  
                        }
                        });
                    }
                    callback(database); //callback del database
                }
            }
        );
    }
}

module.exports = Mongo;