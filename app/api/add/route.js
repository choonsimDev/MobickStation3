import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const {
      name,
      description,
      price,
      mileage,
      stock,
      imageUrl,
      categoryName,
      storeName,
    } = await req.json();

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        mileage,
        stock,
        imageUrl,
        category: {
          connect: {
            name: categoryName, // Category 테이블에서 name으로 연결
          },
        },
        store: {
          connect: {
            name: storeName, // Store 테이블에서 name으로 연결
          },
        },
      },
    });

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.error("Failed to add product:", error);
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
    });
  }
}
