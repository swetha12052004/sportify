
// Import the models
import { generateTokens } from "../lib/util.js";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken"

// Import the required packages
import bcrypt from "bcryptjs" // for password hashing
export const register = async (req, res) => {
    const { fullName, email, password, phone } = req.body;

    try {
        // // Checking whether all required fields are provided
        // if (!fullName || !email || !password || !phone) {
        //     return res.status(400).json({ message: "All fields are required" });
        // }

        // // Checking password length
        // if (password.length < 6) {
        //     return res.status(400).json({ message: "Password must be a minimum length of 6" });
        // }

        // Checking if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists",success:false });
        }

        // Checking if the phone number is already registered
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({ message: "Phone number already exists",success:false });
        }

        // // Validating phone number format
        // if (!/^\d{10}$/.test(phone)) {
        //     return res.status(400).json({ message: "Invalid phone number. It must be 10 digits." });
        // }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            fullName: fullName,
            email,
            password: hashedPassword,
            phone
        });

        // Save the new user in the database
        await newUser.save();

        // Generate JWT Token
        generateTokens(newUser._id, res);

        return res.status(201).json({
            _id: newUser._id,
            userName: newUser.userName,
            email: newUser.email,
            phone: newUser.phone,
            success:false,
            message:"login successfully"
        });

    } catch (error) {
        console.error("Error in signup controller: ", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password", success: false });
        }

        // Generate JWT Token
        generateTokens(user._id, res);

        return res.status(200).json({
            success: true,
            message: "Login successful"
        });
    } catch (error) {
        console.error("Error in login controller: ", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// export const register = async (req, res) => {
//     const { fullName, email, password, phone } = req.body;
  
//     try {
//       // Validate all fields
//       if (!fullName || !email || !password || !phone) {
//         return res.status(400).json({ message: "All fields are required", success: false });
//       }
  
//       // Check password length
//       if (password.length < 6) {
//         return res.status(400).json({ message: "Password must be at least 6 characters", success: false });
//       }
  
//       // Validate email format
//       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//       if (!emailRegex.test(email)) {
//         return res.status(400).json({ message: "Invalid email format", success: false });
//       }
  
//       // Validate phone format
//       if (!/^\d{10}$/.test(phone)) {
//         return res.status(400).json({ message: "Phone number must be 10 digits", success: false });
//       }
  
//       // Check for existing email
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: "Email already exists", success: false });
//       }
  
//       // Check for existing phone
//       const existingPhone = await User.findOne({ phone });
//       if (existingPhone) {
//         return res.status(400).json({ message: "Phone number already exists", success: false });
//       }
  
//       // Hash the password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
  
//       // Create and save user
//       const newUser = new User({
//         fullName,
//         email,
//         password: hashedPassword,
//         phone
//       });
  
//       await newUser.save();
  
//       // Generate JWT tokens
//       generateTokens(newUser._id, res);
  
//       return res.status(201).json({
//         success: true,
//         message: "Registration successful",
//         user: {
//           _id: newUser._id,
//           fullName: newUser.fullName,
//           email: newUser.email,
//           phone: newUser.phone
//         }
//       });
  
//     } catch (error) {
//       console.error("Error in register controller:", error.message);
//       return res.status(500).json({ message: "Internal server error", success: false });
//     }
//   };
