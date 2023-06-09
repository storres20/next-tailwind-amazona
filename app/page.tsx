import ProductItem from '@/components/ProductItem'
import data from '../utils/data'

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            key={product.slug}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

/*
Nextjs ECommerce Tutorial For Beginners 2023 [Next.js, MongoDB & Tailwind]
channel: Coding with Basir
https://www.youtube.com/watch?v=_IBlyR5mRzA&list=WL&index=16&t=1694s
*/
