"use client"

import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="aspect-square relative mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
          {product.stock < 20 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
              Low Stock
            </div>
          )}
        </div>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-500 mt-2">Stock: {product.stock} units</p>
      </CardContent>
      <CardFooter className="mt-auto flex justify-between items-center">
        <span className="font-bold text-lg">${product.price}</span>
        <Button onClick={() => onAddToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}