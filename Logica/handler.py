import boto3
import time
import uuid
from decimal import Decimal
dynamodb = boto3.resource('dynamodb')

Reckognition=boto3.client("rekognition")

def estudiarImagen(event, context):
    s3Record = event['Records'][0]['s3'] #s3
    bucket= s3Record['bucket']['name']#nombre del bucket
    key = s3Record['object']['key']#key del bucket
    print('El archivo ',key,' se ha insertado en el bucket ',bucket)
    # Detectamos las emociones
    emociones=detectarEmociones(bucket,key)
    print('Análisis: ',emociones)
    # Comprobamos si está triste o enfadado
    emocion,confidence=CompruebaEmocion(emociones)
    # Registramos en DynamoDB la emoción
    escribeEnDynamoDB(emocion,confidence,key)
    # FELCOT -- AQUÍ ES DONDE EL SERVIDOR DEBE COGER LA IMAGEN DE GATITOS DEL S3
    if (emocion == 'ANGRY' and confidence >= 95.5) or (emocion == 'SAD' and confidence >= 95.5):
        print('PENDIENTE DE DESARROLLO')
    

def detectarEmociones(bucket,key):
    respuesta=Reckognition.detect_faces(Image={
        "S3Object": {
            "Bucket": bucket, 
            "Name": key
        }}, Attributes=["ALL"])
    return respuesta

def CompruebaEmocion(response):
    emociones=response['FaceDetails'][0]['Emotions']
    mayor=emociones[0]['Confidence']
    for emocion in emociones:
        if emocion['Confidence']>=mayor:
            mayor=emocion['Confidence']
            emocionBT=emocion['Type']
    return emocionBT,mayor

def escribeEnDynamoDB(emocion,confianza,nombreFoto):
    timestamp =  time.strftime("%c")
    table = dynamodb.Table('Emociones-Astronautas2')
    item = {
        'ID': str(uuid.uuid1()),
        'emocion': emocion,
        'confianza': str(confianza),
        'Nombre': nombreFoto.split("/",1)[1],
        'createdAt': timestamp}
    print(item)
    print("UPLOADING ITEM")
    table.put_item(Item=item)

    