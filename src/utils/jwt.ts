import jsonwebtoken from "jsonwebtoken";

interface User {
  name: string;
  cpf: string;
  birthdate: Date;
  mobile: string;
  photo: string;
  state: string;
  city: string;
  email: string;
  password: string;
}


export const generateToken = (user: User): string => {
  return jsonwebtoken.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: "168h",
  });
}

export const verifyToken = (token: string) => {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET as string)
}
