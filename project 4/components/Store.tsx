"use client"

import React, { useState } from 'react'
import { ShoppingCart, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ProductCard from './ProductCard'
import PaymentModal from './PaymentModal'

const categories = [
  "All",
  "Beverages",
  "Groceries",
  "Personal Care",
  "Household",
  "Snacks"
]

const products = [
  {
    id: 1,
    name: "Milo",
    category: "Beverages",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1571211905393-6de67ff8fb61?w=500&q=80",
    description: "Rich chocolate malt drink",
    stock: 50
  },
  {
    id: 2,
    name: "Gari",
    category: "Groceries",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1585670140670-7e3d622cd8ee?w=500&q=80",
    description: "Premium cassava granules",
    stock: 100
  },
  {
    id: 3,
    name: "Sugar",
    category: "Groceries",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?w=500&q=80",
    description: "Fine granulated sugar",
    stock: 200
  },
  {
    id: 4,
    name: "Biscuits",
    category: "Snacks",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80",
    description: "Assorted cream biscuits",
    stock: 150
  },
  {
    id: 5,
    name: "Rice",
    category: "Groceries",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
    description: "Premium long grain rice",
    stock: 75
  },
  {
    id: 6,
    name: "Coca Cola",
    category: "Beverages",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&q=80",
    description: "Refreshing cola drink",
    stock: 120
  },
  {
    id: 7,
    name: "Perfume",
    category: "Personal Care",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    description: "Luxury fragrance",
    stock: 30
  },
  {
    id: 8,
    name: "Soap",
    category: "Personal Care",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=500&q=80",
    description: "Antibacterial bath soap",
    stock: 200
  },
  {
    id: 9,
    name: "Omo",
    category: "Household",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=80",
    description: "Premium washing powder",
    stock: 80
  },
  {
    id: 10,
    name: "Bread",
    category: "Groceries",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=80",
    description: "Fresh wheat bread",
    stock: 40
  }
]

export default function Store({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showPayment, setShowPayment] = useState(false)
  const [cart, setCart] = useState([])

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    onAddToCart(product)
  }

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2)
  }

  return (
    <div className="relative">
      {/* Store Header with Logo Background */}
      <div 
        className="h-48 bg-cover bg-center mb-8 rounded-lg flex items-center justify-center"
        style={{
          backgroundImage: 'url("/logo.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <div className="bg-white/80 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-primary">BEN GABCOM Store</h1>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Floating Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <ShoppingCart className="h-6 w-6" />
            <div>
              <p className="font-semibold">Total: ${getTotalAmount()}</p>
              <p className="text-sm">{cart.length} items</p>
            </div>
            <Button onClick={() => setShowPayment(true)}>
              Checkout
            </Button>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        amount={getTotalAmount()}
        phoneNumber="0535011211"
        items={cart}
      />
    </div>
  )
}