const express = require("express");
const path = require("path"); //common js module
require("dotenv").config();
const configViewEngine = require("./config/viewEgine");
const webRouters = require("./routes/web");

const app = express(); // Initialize app here
const port = process.env.PORT || 3333;
const hostname = process.env.HOST_NAME || "localhost";

const { MongoClient, ServerApiVersion } = require("mongodb");
// Config template engine
configViewEngine(app);

const uri =
  "mongodb+srv://vieta1tqk:oui3qHnDco6WoUEa@comback01.gotuq.mongodb.net/?appName=comback01";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Middleware to parse JSON bodies
app.use(express.json());

// Create a route to get data
app.get("/data", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("it63b"); // Replace with your database name
    const collection = database.collection("students"); // Replace with your collection name

    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    // await client.close();
  }
});
//Khai bao route
app.use("/", webRouters);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

startServer();
