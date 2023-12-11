const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");

const mongoUsername = "revsallangula";
const mongoPassword = "Tr3hnymzhOgOlVVj";
const mongoDB = "DProject";

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.u2ion8n.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.u2ion8n.mongodb.net/${mongoDB}?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
