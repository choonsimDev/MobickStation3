import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  console.log("GET request received");
  const products = await prisma.product.findMany({
    include: {
      category: true,
      store: true,
    },
  });
  return new Response(JSON.stringify(products), { status: 200 });
}

export const hamsterProducts = async (req) => {
  console.log("GET request received");
  const products = await prisma.product.findMany({
    where: {
      category: {
        name: "Hamster",
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      price: true,
      mileage: true,
      stock: true,
      imageUrl: true,
      category: true,
      store: true,
    },
    include: {
      category: true,
      store: true,
    },
  });
  return new Response(JSON.stringify(products), { status: 200 });
};
