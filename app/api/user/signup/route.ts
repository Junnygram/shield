import { connect } from '@/dbConfig/dbConfig';
import User from '@/src/model/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
// import { sendEmail } from '@/helpers/mailer';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, firstname, lastname, password } = reqBody;

    console.log(reqBody);

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      email,
      firstname,
      lastname,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email

    // await sendEmail({ email, emailType: 'VERIFY', userId: savedUser._id });

    // return NextResponse.json({
    //   message: 'User created successfully',
    //   success: true,
    //   savedUser,
    // });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
