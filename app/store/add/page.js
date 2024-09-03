import { PrismaClient } from "@prisma/client";
import AddProduct from "../../../src/components/add/addProduct.jsx";

const prisma = new PrismaClient();

export default async function Page() {
  const categories = await prisma.category.findMany();
  const stores = await prisma.store.findMany();

  return <AddProduct categories={categories} stores={stores} />;
}
