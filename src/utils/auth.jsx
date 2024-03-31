import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password) => {
  const hashed = await hash(password);
  return hashed;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const genereatAcsesToken = (data) => {
  const token = sign({ ...data }, process.env.Secreat_Key, {
    expiresIn: "60s",
  });
  return token;
};

const genereatRefreshToken = (data) => {
  const token = sign({ ...data }, process.env.SecreatRefresh_Key, {
    expiresIn: "15d",
  });
  return token;
};

const verifyAcsesToken = (token) => {
  try {
    const isvalid = verify(token, process.env.Secreat_Key);
    return isvalid;
  } catch (err) {
    console.log("verify token err", err);
    return false;
  }
};

const valiadteEmail = (email) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};

const valiadtePhone = (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(phone);
};

const valiadtePassword = (password) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};

export {
  hashPassword,
  verifyPassword,
  genereatAcsesToken,
  verifyAcsesToken,
  genereatRefreshToken,
  valiadtePhone,
  valiadteEmail,
  valiadtePassword,
  
};
