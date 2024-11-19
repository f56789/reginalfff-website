"use client"

import React, { useState } from 'react'
import { ShoppingCart, BookOpen, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const publishers = [
  "All Publishers",
  "Akiola Publications",
  "Best Brain Publications",
  "Master Man Publications",
  "Kwadwoan Publication",
  "Golden Publication",
  "A+ Series"
]

const books = [
  {
    id: 1,
    title: "Mathematics Textbook - Class 1",
    publisher: "Akiola Publications",
    price: 24.99,
    cover: "https://images.unsplash.com/photo-1576504677634-06b2130bd1f3?w=500&q=80",
    description: "Comprehensive mathematics textbook for Class 1 students",
    class: 1,
    subject: "Mathematics"
  },
  {
    id: 2,
    title: "English Language - Class 2",
    publisher: "Best Brain Publications",
    price: 22.99,
    cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=80",
    description: "English language learning book for Class 2",
    class: 2,
    subject: "English"
  },
  {
    id: 3,
    title: "Science Workbook - Class 3",
    publisher: "Master Man Publications",
    price: 19.99,
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
    description: "Interactive science workbook for Class 3",
    class: 3,
    subject: "Science"
  },
  {
    id: 4,
    title: "Social Studies - Class 4",
    publisher: "Kwadwoan Publication",
    price: 21.99,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
    description: "Comprehensive social studies textbook",
    class: 4,
    subject: "Social Studies"
  },
  {
    id: 5,
    title: "Mathematics Practice - Class 5",
    publisher: "Golden Publication",
    price: 23.99,
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&q=80",
    description: "Mathematics practice book with solved examples",
    class: 5,
    subject: "Mathematics"
  },
  {
    id: 6,
    title: "English Workbook - Class 6",
    publisher: "A+ Series",
    price: 25.99,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80",
    description: "English language workbook with exercises",
    class: 6,
    subject: "English"
  },
  // Add more books for different classes and publishers
]

export default function Bookshop({ onAddToCart }) {
  const [selectedPublisher, setSelectedPublisher] = useState("All Publishers")
  const [selectedClass, setSelectedClass] = useState("All Classes")

  const filteredBooks = books.filter(book => {
    if (selectedPublisher !== "All Publishers" && book.publisher !== selectedPublisher) {
      return false
    }
    if (selectedClass !== "All Classes" && book.class !== parseInt(selectedClass)) {
      return false
    }
    return true
  })

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <BookOpen className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Educational Bookshop</h1>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Publisher</label>
            <Select value={selectedPublisher} onValueChange={setSelectedPublisher}>
              <SelectTrigger>
                <SelectValue placeholder="Select Publisher" />
              </SelectTrigger>
              <SelectContent>
                {publishers.map(publisher => (
                  <SelectItem key={publisher} value={publisher}>
                    {publisher}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Classes">All Classes</SelectItem>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(classNum => (
                  <SelectItem key={classNum} value={classNum.toString()}>
                    Class {classNum}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="flex flex-col">
            <CardHeader>
              <div className="aspect-[3/4] relative mb-4">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                  Class {book.class}
                </div>
              </div>
              <CardTitle className="line-clamp-2">{book.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-col gap-1">
                  <span className="text-primary">{book.publisher}</span>
                  <span>{book.subject}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 line-clamp-2">{book.description}</p>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between items-center">
              <span className="font-bold text-lg">${book.price}</span>
              <Button onClick={() => onAddToCart(book)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No books found matching your filters.</p>
        </div>
      )}
    </div>
  )
}