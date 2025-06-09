"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { donatePageData } from "@/data/donate"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, CreditCard, Phone, Building } from "lucide-react"

export default function DonationForm() {
  const { donationForm } = donatePageData
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedAmount, setSelectedAmount] = useState(donationForm.amounts[1].value)
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountSelect = (value: number | string) => {
    setSelectedAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  return (
    <section id="donation-form" ref={ref} className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#DC241f] to-[#b01c19] p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">{donationForm.title}</h2>
            <p>{donationForm.intro}</p>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Select Amount</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {donationForm.amounts.map((amount, index) => (
                  <div
                    key={index}
                    className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 ${
                      selectedAmount === amount.value
                        ? "border-[#DC241f] bg-[#DC241f]/5 shadow-md"
                        : "border-gray-200 hover:border-[#DC241f]/50"
                    }`}
                    onClick={() => handleAmountSelect(amount.value)}
                  >
                    <div className="font-bold text-lg mb-1">{amount.label}</div>
                    <div className="text-sm text-gray-600">{amount.description}</div>
                  </div>
                ))}
              </div>

              {selectedAmount === "custom" && (
                <div className="mt-4">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter Custom Amount (KSh)
                  </label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="max-w-xs"
                  />
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Payment Method</h3>
              <Tabs defaultValue={donationForm.methods[0].name.toLowerCase()}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="m-pesa">M-Pesa</TabsTrigger>
                  <TabsTrigger value="bank transfer">Bank Transfer</TabsTrigger>
                </TabsList>
                {donationForm.methods.map((method, index) => (
                  <TabsContent key={index} value={method.name.toLowerCase()} className="mt-4">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      {method.instructions ? (
                        <div>
                          <h4 className="font-bold mb-2">Instructions:</h4>
                          <p className="whitespace-pre-line">{method.instructions}</p>
                        </div>
                      ) : null}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <Shield className="h-5 w-5 mr-2 text-[#006600]" />
                <p className="text-sm">{donationForm.trustMessage}</p>
              </div>
              <Button className="bg-[#DC241f] hover:bg-[#b01c19] text-white rounded-full">
                {donationForm.ctaLabel}
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <CreditCard className="h-6 w-6 text-[#DC241f] mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Secure Payments</h3>
              <p className="text-sm text-gray-600">All transactions are encrypted and secure.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <Phone className="h-6 w-6 text-[#DC241f] mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Need Help?</h3>
              <p className="text-sm text-gray-600">Call us at +254 123 456 789 for assistance.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <Building className="h-6 w-6 text-[#DC241f] mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-bold mb-1">Tax Deductible</h3>
              <p className="text-sm text-gray-600">All donations are eligible for tax deductions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
