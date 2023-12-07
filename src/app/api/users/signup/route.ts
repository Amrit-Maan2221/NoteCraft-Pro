import {connectToMongoDb} from "@/dbConfig/dbConfig";
import User from "@/models/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToMongoDb();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        console.log(error);
    
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            const validationErrors : { [key: string]: string } = {};
    
            // Extract and format validation errors
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;
            }
    
            return NextResponse.json({
                error: 'Validation error',
                validationErrors,
                success: false,
            }, { status: 422 });  // 422 Unprocessable Entity status code for validation errors
        } else {
            // Other types of errors
            return NextResponse.json({
                error: error.message,
                success: false,
            }, { status: 500 });  // Internal Server Error for other errors
        }
    }
}