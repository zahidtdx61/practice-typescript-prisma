import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// interface user {

// }

async function insertUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const resp = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });

  console.log(resp);
}

insertUser("rahim2@karim.com", "Rahim", "Karim", "myPass");
