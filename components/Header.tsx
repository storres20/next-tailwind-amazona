'use client'

import { Store } from '@/utils/Store'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

export default function Header() {
  const { state } = useContext(Store)
  const { cart } = state
  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce(
        (a: number, c: { quantity: number }) => a + c.quantity,
        0
      )
    )
  }, [cart.cartItems])

  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link
          href="/"
          className="text-lg font-bold"
        >
          Amazona
        </Link>
        <div>
          <Link
            href="/cart"
            className="p-2"
          >
            Cart
            {cartItemsCount > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cartItemsCount}
              </span>
            )}
          </Link>
          <Link
            href="/login"
            className="p-2"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
