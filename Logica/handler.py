import boto3
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

    # Envíamos imagen al astronauta
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

def escribeEnDynamoDB(emocion):
    pass
    