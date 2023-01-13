import { hashSync } from 'bcrypt';
import prisma from './client';

async function main() {
  const admin = await prisma.admin.upsert({
    where: { id: 1 },
    update: {},
    create: {
      password: hashSync('123456', 10),
    },
  });

  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
