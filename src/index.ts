import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  email: string,
  { firstName, lastName }: UpdateParams
) {
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
}

// insertUser("rahim2@karim.com", "Rahim", "Karim", "myPass");
updateUser("rahim2@karim.com", {
  firstName: "Rahim-updated-2",
  lastName: "Karim",
});
