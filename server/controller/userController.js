import users from "../model/UserModel.js";
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
    const {name, mail, pass, cPass, prof} = req.body
    try {
        if (!name || !mail || !pass || !cPass || !prof) {
            return res.status(401).json({err: "All fields are required"})
        }
        const hashedPass = await bcrypt.hash(pass, 12);
        let hashCpass = await bcrypt.hash(cPass, 12);
        const hashedAllData = {...req.body, pass: hashedPass, cPass: hashCpass};
        const newUser = new users(hashedAllData);
        const existUser = await users.findOne({mail});
        if (existUser) {
            res.status(401).json({err: "You are already Registered"})
        } else if (cPass !== pass) {
            return res.status(401).json({err: "Password and confirm password should match"})
        } else {
            await newUser.save();
            res.status(201).json({msg: "Registered Successfully"});
        }

    } catch (err) {
        console.error(err)
        res.status(401).json({err: "Not Registered"});
    }
}


const loginUser = async (req, res) => {
    try {
        const checkUser = await users.findOne({mail: req.body.mail});
        if (!checkUser) {
            return res.status(401).json({err: "Log in failed user is not Registered"})
        }
        const matchPass = await bcrypt.compare(req.body.pass, checkUser.pass);

        if (matchPass) {
            const {name, mail, prof} = checkUser;
            const userDetails = {name, mail, prof};
            res.status(201).json({msg: "Log In successfully", userDetails});
        } else {
            res.status(401).json({err: "Log in failed! Unauthorized Credential"});
        }
    } catch (err) {
        console.log(err);
    }
}


export {createUser, loginUser};