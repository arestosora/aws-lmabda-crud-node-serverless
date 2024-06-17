const AWS = require("aws-sdk")

const deleteTask = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient()
    const { id } = event.pathParameters

    await dynamo.delete({
        TableName: 'TaskTable',
        Key: { id }
    }).promise()

    return {
        statusCode: 204,
        body: 'Task has been succesfully deleted.'
    }
}

module.exports = { deleteTask }