// app/store/product/[id]/page.js

import { getProduct } from "@/app/api/getproducts/getproducts";
import ProductDetail from "./productDetail"; // 클라이언트 컴포넌트 분리

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id); // 서버에서 비동기 처리

  // 클라이언트 컴포넌트로 데이터를 전달
  return <ProductDetail product={product} />;
}
