import { PrismaClient } from "@prisma/client";
import prisma from "../prisma/client";

export default class WaitingLineService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create({ name }: { name: string }) {
    const addCustomer = await this.prisma.waiting_line.create({
      data: {
        customer: name
      }
    })

    return addCustomer;
  }
}