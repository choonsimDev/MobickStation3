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
        name: "햄스터",
      },
    },
    // select: {
    //   id: true,
    //   name: true,
    //   description: true,
    //   price: true,
    //   mileage: true,
    //   stock: true,
    //   imageUrl: true,
    //   category: true,
    //   store: true,
    // },
    // include: {
    //   category: true,
    //   store: true,
    // },
  });
  console.log(products);
  return products;
};

export const catProducts = async (req) => {
  console.log("GET request received");
  const products = await prisma.product.findMany({
    where: {
      category: {
        name: "고양이",
      },
    },
  });
  console.log(products);
  return products;
};

export const dogProducts = async (req) => {
  console.log("GET request received");
  const products = await prisma.product.findMany({
    where: {
      category: {
        name: "강아지",
      },
    },
  });
  console.log(products);
  return products;
};

// 개별 상품 불러오기

export async function getProduct(id) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id, 10), // req.params.id 대신 함수 인자 id 사용
    },
    include: {
      category: true,
      store: true,
    },
  });

  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
    description: product.description,
    stock: product.stock,
    categoryName: product.category.name,
    storeName: product.store.name,
  };
}
