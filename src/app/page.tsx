import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image";
import { db } from "@/db/index";
import { ProductType, HomeImgs, ProductTable } from "@/db/schema"; // Adjust path to your schema
import { eq } from "drizzle-orm";
import Link from "next/link";
interface CategoryWithImages {
  id: number;
  name: string;
  homeImages: Array<{
    id: number;
    name: string;
    img_url: string;
  }>;
}

async function getCategoriesWithImages(): Promise<CategoryWithImages[]> {
  try {
    // First get all product types
    const productTypes = await db.select().from(ProductType);
    
    // Then get home images for each product type
    const categoriesWithImages = await Promise.all(
      productTypes.map(async (category) => {
        const homeImages = await db
          .select()
          .from(HomeImgs)
          .where(eq(HomeImgs.product_type_id, category.id));
        
        return {
          id: category.id,
          name: category.name,
          homeImages: homeImages,
        };
      })
    );
    
    return categoriesWithImages;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

function ProductSkeleton() {
  return (
    <div className="rounded-lg p-4 space-y-3">
      <Skeleton className="w-full h-48 rounded-lg" />

    </div>
  );
}

function CategorySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-48" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  const categories = await getCategoriesWithImages();

  if (!categories || categories.length === 0) {
    return (
      <main className="w-full min-h-screen p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {categories.map((category) => (
          <div key={category.id} className="space-y-4">
            {/* Category Title */}
<Link href={"/category/"+category.name}>            
            
            <h2 className="text-4xl font-medium">
              {category.name}
            </h2>
            </Link>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.homeImages && category.homeImages.length > 0 ? (
                category.homeImages.map((image) => (
                  <div key={image.id} className=" p-4 space-y-3 ">
                    {/* Product Image */}
                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                      <Image 
                        src={image.img_url} 
                        alt={image.name}
                        
                 height={150}
                 width={150}
                 className=""
                      />
                    </div>
                
                  </div>
                ))
              ) : (
                // Show placeholder if no images
                <div className="col-span-full text-center py-8 text-gray-500">
                  No images available for {category.name}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}