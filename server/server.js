const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;
const { MongoClient, ServerApiVersion } = require("mongodb");

const mongoUsername = "revsallangula";
const mongoPassword = "Tr3hnymzhOgOlVVj";
const mongoDB = "DProject";

const uri = `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.u2ion8n.mongodb.net/${mongoDB}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Mongoose Model for Profile
const Profile = mongoose.model("Profile", {
    username: String,
    email: String,
    password: String,
});

// Middleware to parse JSON in request bodies
app.use(bodyParser.json());

// Route to add a profile
app.post("/addProfile", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingProfile = await Profile.findOne({
            $or: [{ username }, { email }],
        });

        if (existingProfile) {
            return res.status(400).json({
                message:
                    "Profile with the same username or email already exists. Please try again",
            });
        }
        const newProfile = new Profile({ username, email, password });
        await newProfile.save();

        res.status(201).json({ message: "Profile added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Route to get all profiles
app.get("/getProfiles", async (req, res) => {
    try {
        // Retrieve all profiles from the database
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
