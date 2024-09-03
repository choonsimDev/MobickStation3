
export async function POST(req) {
    console.log("POST request received");
    const data = await req.json();
    const {
        name,
        description,
        price,
        mileage,
        stock,
        imageUrl,
        categoryName,
        storeName,
    } = data;
    console.log({ name, description, price, mileage, stock, imageUrl, categoryName, storeName });
    return new Response('Hello, Next.js!', {
        status: 200,
    })
}