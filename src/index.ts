import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  countryCode: string,
  phoneNumber: string
) {
  const resp = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password,
      countryCode,
      phoneNumber,
    },
  });

  console.log(resp);
}

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
  try {
    const resp = await prisma.user.update({
      where: {
        email,
      },
      data: {
        firstName,
        lastName,
      },
    });
    console.log(resp);
  } catch (error: any) {
    console.log("Got you bloody error");
    console.log(error.message);
  }
}

insertUser(
  "rahim234@karim.com",
  "Rahim",
  "Karim",
  "myPass",
  "+880",
  "1752387156"
);
// updateUser("rahim2@karim.com", {
//   firstName: "Rahim-updated-2",
//   lastName: "Karim",
// });
