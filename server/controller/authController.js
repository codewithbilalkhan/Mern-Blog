const User = require("../model/User");
const bcrypt  = require("bcrypt");
const jwt = require ("jsonwebtoken");

exports.register = async (req, res) => {
    try{
        const {fullname, username, email, password} = req.body;

        const exists = await User.findOne({email});
        if(exists) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user= await User.create({
            fullname,
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json({message: "User registered successfully", user})
    }catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }

};


exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({userId: user._id}, "secretkey", {expiresIn: "7d"});
        res.json ({message: "Login successful", token, user: {
            id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email
        }});

    }catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }

};

