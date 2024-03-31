import { genereatAcsesToken, hashPassword } from "@/utils/auth";
import connectToDB from "../../../../../config/db";
import UserModel from "../../../../../models/User";
import { headers } from "next/dist/client/components/headers";

export async function POST(req) {
  connectToDB();

  const body = await req.json();
  const { name, phone, email, password } = body;

  //validation

  const isValidUser = await UserModel.findOne({
    $or: [{ name }, { phone }, { email }, { password }],
  });

  if (isValidUser) {
    return Response.json(
      { massege: "name or phone or email exsis " },
      { status: 422 }
    );
  }

  const hashedPassword = hashPassword(password);
  const token = genereatAcsesToken({ name });

  const users = UserModel.find({});
  console.log(users);

  await UserModel.create({
    name,
    phone,
    email,
    password: hashPassword,
    role: users.length > 0 ? "USER" : "ADMIN",
  });

  return Response.json(
    { message: "Success Response :))" },
    {
      status: 201,
      headers: { "Set-Coockie": `token=${token};path=/;httpOnly=true` },
    }
  );
}
