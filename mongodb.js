//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     first_name: 'Vivek',
    //     age: 35
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops) // prints an array of documents
    // })

    // db.collection('users').insertMany([
    //     {
    //         first_name: 'Jen',
    //         age: 28
    //     }, {
    //         first_name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to add users')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Run 5 miles in the morning',
    //         completed: true
    //     }, {
    //         description: 'Go to farmers market',
    //         completed: true
    //     }, {
    //         description: 'Eat lunch with Jeanie',
    //         completed: false
    //     }, {
    //         description: 'Watch Football Game',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         console.log('Unable to add the tasks!')
    //     }

    //     console.log(result.ops)
    // })

    // For searching users based on a document property
    // db.collection('users').findOne({first_name: 'Roger'}, (error, user) => {
    //     if(error) {
    //         return console.log(error)
    //     }
    //     console.log(user)
    // })

    // For searching users based on an ObjectID
    // db.collection('users').findOne({_id: new ObjectID('64c55faf1161e7a505fed2cd')}, (error, user) => {
    //     if(error) {
    //         return console.log(error)
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 27}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 27}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID('64c55b6a321a6f9a830706c9')}, (error, task) => {
    //     if(error) {
    //         return console.log('Unable to locate task')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if(error) {
    //         console.log('No tasks found')
    //     }

    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('64c556d4afd33c8f05c82ff6')
    // }, {
    //     $set: {
    //         first_name: 'Richard',
    //         age: 57
    //     }
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // })

    db.collection('tasks').deleteOne({
        description: 'Watch Football Game'
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })
})