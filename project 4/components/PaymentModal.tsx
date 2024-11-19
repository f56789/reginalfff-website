"use client"

import React from 'react'
import { Phone, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function PaymentModal({ isOpen, onClose, amount, phoneNumber, items }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Send money to complete your transaction
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            {items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="border-t mt-2 pt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${amount}</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Mobile Money Payment</span>
            </div>
            <p className="text-sm mb-2">Send payment to:</p>
            <div className="bg-white p-2 rounded text-center font-mono">
              {phoneNumber}
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>Instructions:</p>
            <ol className="list-decimal ml-4 space-y-1">
              <li>Dial *170# on your phone</li>
              <li>Select "Send Money"</li>
              <li>Enter the number above</li>
              <li>Enter amount: ${amount}</li>
              <li>Enter your PIN to confirm</li>
              <li>Keep your transaction ID for reference</li>
            </ol>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            <X className="mr-2 h-4 w-4" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}