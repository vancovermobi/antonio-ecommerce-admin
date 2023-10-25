import { prismadbMongo, prismadbPLSC } from "@/lib/prismadb";
import ProductForm from "./components/product-form";

 
const ProductIdPage = async (
    { params }: { params: { storeId: string , productId: string } }) => {

    const product = await prismadbPLSC.product.findUnique({
        where: {
            id: params.productId
        },
        include: {
            images: true,
        }
    })
    const categories = await prismadbPLSC.category.findMany({
        where: {
            storeId: params.storeId
        },
    })
    const colors = await prismadbPLSC.color.findMany({
        where: {
            storeId: params.storeId
        },
    })
    const sizes = await prismadbPLSC.size.findMany({
        where: {
            storeId: params.storeId
        },
    })

    return ( 
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <ProductForm 
                initialData={ product } 
                categories={ categories }
                colors={ colors }
                sizes={ sizes }
            />
        </div>
    </div> 
    );
}
 
export default ProductIdPage;