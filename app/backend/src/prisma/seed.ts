import md5 from "md5";
import prisma from "./client";

const main = async () => {
  const passwordHash = md5('12345')
  const admin = await prisma.admin.create({
    data: {
      password: passwordHash,
    }
  })

  console.log(admin);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });