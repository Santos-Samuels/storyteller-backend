import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  omit: {
    user: {
      password: true,
    },
  },
});

export default prisma;
