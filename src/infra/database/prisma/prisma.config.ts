import { PrismaClient } from "@prisma/client";

const connectPrismaDatabase = async (): Promise<void> => {
  try {
    const prisma = new PrismaClient();
    await prisma.$connect();
    console.log("🚀 ~ Database connected");
  } catch (error) {
    console.error("🚀 ~ Database connection error:", error);
  }
};

export default connectPrismaDatabase;