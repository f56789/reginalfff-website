"use client"

import React, { useState } from 'react'
import { Menu, X, ShoppingCart, User, Search, ChevronDown, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Store from './Store'
import Bookshop from './Bookshop'

export default function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [cartItems, setCartItems] = useState([])

  const renderContent = () => {
    switch (activeTab) {
      case 'store':
        return <Store onAddToCart={(item) => setCartItems([...cartItems, item])} />
      case 'bookshop':
        return <Bookshop onAddToCart={(item) => setCartItems([...cartItems, item])} />
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 mb-12 rounded-lg">
              <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
                <p className="text-xl mb-8">Discover amazing products and books at great prices</p>
                <div className="flex justify-center gap-4">
                  <Button size="lg" onClick={() => setActiveTab('store')}>Shop Now</Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('bookshop')}>Visit Bookshop</Button>
                </div>
              </div>
            </section>

            {/* Featured Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow"
                     onClick={() => setActiveTab('store')}>
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">General Store</h3>
                  <p>Browse our collection of everyday items</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow"
                     onClick={() => setActiveTab('bookshop')}>
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Bookshop</h3>
                  <p>Explore our vast collection of books</p>
                </div>
                {/* Add more category cards as needed */}
              </div>
            </section>

            {/* Featured Products */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-200 mb-4 rounded-md"></div>
                    <h3 className="font-semibold mb-2">Product Name</h3>
                    <p className="text-sm text-gray-600 mb-2">Short description</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$XX.XX</span>
                      <Button size="sm">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-12">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-6">Stay updated with our latest products and offers</p>
                <div className="flex gap-4 max-w-md mx-auto">
                  <Input type="email" placeholder="Enter your email" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">BEN GABCOM</h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => setActiveTab('home')}>Home</Button>
              <Button variant="ghost" onClick={() => setActiveTab('store')}>Store</Button>
              <Button variant="ghost" onClick={() => setActiveTab('bookshop')}>Bookshop</Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">
                    <User className="mr-2 h-4 w-4" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart ({cartItems.length})
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}>Home</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setActiveTab('store'); setMobileMenuOpen(false); }}>Store</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setActiveTab('bookshop'); setMobileMenuOpen(false); }}>Bookshop</Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button className="w-full justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart ({cartItems.length})
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Search Bar */}
      <div className="bg-gray-100 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Search products..."
              className="flex-grow"
            />
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>Your trusted source for quality products and books. We strive to provide the best shopping experience.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-gray-300 p-0">Home</Button></li>
                <li><Button variant="link" className="text-gray-300 p-0">Store</Button></li>
                <li><Button variant="link" className="text-gray-300 p-0">Bookshop</Button></li>
                <li><Button variant="link" className="text-gray-300 p-0">Contact</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-gray-300 p-0">Shipping Policy</Button></li>
                <li><Button variant="link" className="text-gray-300 p-0">Returns & Refunds</Button></li>
                <li><Button variant="link" className="text-gray-300 p-0">FAQs</Button></li>
                <li><Button variant="link" className="text-gray-300 p-0">Terms of Service</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: contact@bengabcom.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Store Street</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 BEN GABCOM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}