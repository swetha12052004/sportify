
// const users = [
//     { username: "swetha123@gmail.com", password: "swetha" },
//     { username: "user", password: "password" }
// ];

// // Sample API Route
// app.get("/", (req, res) => {
//     res.send("Welcome");
// });

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     const user = users.find(u => u.username === email && u.password === password);

//     if (user) {
//         res.json({ success: true, message: "Login successful!" });
//     } else {
//         res.status(401).json({ success: false, message: "Invalid username or password" });
//     }
// });
// app.post("/register", (req, res) => {
//     const { fullname, email, phone, password } = req.body;

//     // Check if email already exists
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//         return res.status(400).json({ success: false, message: "Email already registered" });
//     }
//     const newUser = { fullname, email, phone, password };
//     users.push(newUser);

//     res.json({ success: true, message: "Registration successful!" });
// });



import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoute from "./src/routes/auth.route.js";
//Db connection
import { connectDB } from "./src/lib/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders:'Content-Type,Authorization',
}));



// Start Server
app.use("/api/auth",authRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
