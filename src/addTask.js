const { v4 } = require("uuid")
const AWS = require("aws-sdk");

const addTask = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const { title, description } = JSON.parse(event.body);
    const createdAt = new Date()
    const id = v4();

    const newTask = {
        id,
        title,
        description,
        createdAt
    }

    await dynamo.put({
        TableName: 'TaskTable',
        Item: newTask
    }).promise()

    return {
        statusCode: 201,
        body: JSON.stringify(newTask)
    }
}

module.exports = { addTask }