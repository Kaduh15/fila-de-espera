import { PrismaClient } from "@prisma/client";
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
    const admin = await this.prisma.admin.findFirst({
      where: {
        password,
      },
    });

    if (!admin) {
      throw new ApiError("Invalid password", 400);
    }

    const adminWithoutPassword = exclude(admin, ["password"]);

    return JWT.tokenGenerator(adminWithoutPassword);
  }
}