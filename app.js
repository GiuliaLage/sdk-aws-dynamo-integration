const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

const AWS = require('aws-sdk');
const aws_config = require('./src/aws');

const TABLE_NAME = '';

const getSomething = async () => {
    AWS.config.update(aws_config.config);
    const database = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: TABLE_NAME
    };

    try{
        return await database.scan(params).promise();
    }catch(err){
        throw err;
    }
}

app.get('/', async (req, res) => {
    try{
        const response = await getSomething();
        res.status(200).json(response);
    }catch(err){
        throw err;
    }
    
   
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));