import md5 from "md5"
import prisma from "../../src/prisma/client"

export const restoreDB = async () => {
  const deleteWaitingLine = prisma.waiting_line.deleteMany()
  const deleteAdmin = prisma.admin.deleteMany()
  const createAdmin = prisma.admin.create({
    data: {
      password: md5("123")
    }
  })

  await prisma.$transaction([
    deleteWaitingLine,
    deleteAdmin,
    createAdmin
  ])

  await prisma.$disconnect()
}

export const resetAdmin = () => {
  prisma.admin.deleteMany()
  prisma.admin.create({
    data: {
      password: md5("123")
    }
  })
}