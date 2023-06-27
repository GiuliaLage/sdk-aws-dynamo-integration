1 - Criar um usuário IAM com os acessos ao dynamo AmazonDynamoDBFullAccess
    IAM -> Users -> add users 
    https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html


2 - Criar uma Access Key
    clicar sobre o usuário -> Security credentials -> create access key 

3 - instalar pacote aws-sdk
    yarn add aws-sdk --save 