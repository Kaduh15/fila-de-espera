import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/client";
import ApiError from "../utils/ApiError";

export default class LoginService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  public async login(password: string) {
    const admin = await this.prisma.admin.findFirst({
      where: {
        password,
      },
    });

    if (!admin) {
      throw new ApiError("Invalid password", 400);
    }

    return admin;
  }
}