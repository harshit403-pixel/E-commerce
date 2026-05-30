import jwt from "jsonwebtoken";

const token = jwt.sign(
  {
    id: "12345",
    email: "test@gmail.com",
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "7d",
  }
);

console.log(token);