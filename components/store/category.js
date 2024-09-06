// app/store/category/page.js (서버 컴포넌트)

import {
  hamsterProducts,
  catProducts,
  dogProducts,
} from "@/app/api/getproducts/getproducts";
import CategoryClient from "@/components/store/categoryClient";

export default async function CategoryPage() {
  try {
    // 서버에서 데이터를 비동기적으로 가져옵니다.
    const hamsterData = await hamsterProducts();
    const catData = await catProducts();
    const dogData = await dogProducts();

    // 클라이언트 컴포넌트에 데이터를 전달합니다.
    return (
      <CategoryClient
        hamsterData={hamsterData || []}
        catData={catData || []}
        dogData={dogData || []}
      />
    );
  } catch (error) {
    console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
    return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
  }
}
