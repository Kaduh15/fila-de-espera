import { PrismaClient } from "@prisma/client";
import md5 from "md5";
import prisma from "../prisma/client";
import ApiError from "../utils/ApiError";
import exclude from "../utils/exclude";
import JWT from "../utils/token";

export default class LoginService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  public async login(password: string) {
    const passwordHash = md5(password)
    const admin = await this.prisma.admin.findFirst({
      where: {
        password: passwordHash,
      },
    });

    if (!admin) {
      throw new ApiError("Invalid password", 400);
    }

    return JWT.tokenGenerator(exclude(admin, ["password"]));
  }
}