'use client'

import React, { useContext } from 'react'
import data from '@/utils/data'
import Link from 'next/link'
import Image from 'next/image'
import { Store } from '@/utils/Store'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { state, dispatch } = useContext(Store)

  const { slug } = params

  const product = data.products.find((a) => a.slug === slug)

  if (!product) {
    return <div>Product Not Found</div>
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x: typeof product) => x.slug === product.slug
    )
    const quantity = existItem ? existItem.quantity + 1 : 1

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  }

  return (
    <div>
      <h2>{slug}</h2>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
