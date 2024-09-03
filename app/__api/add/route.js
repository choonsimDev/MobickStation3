import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log("Add product request received");
  res.send("Hello World");
  if (req.method === "POST") {
    console.log("POST request received");
  }
  if (req.method === "GET") {
    console.log("GET request received");
  }
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  console.log("Add product request received");
  const {
    name,
    description,
    price,
    mileage,
    stock,
    imageUrl,
    categoryName,
    storeName,
  } = await req.body;
  console.log({ name, description, price, mileage, stock, imageUrl, categoryName, storeName });
  try {
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
