"use client"

import { useState } from "react"
import MinimalistInvoice from "./minimalist-invoice"
import ModernInvoice from "./modern-invoice"
import ProfessionalInvoice from "./professional-invoice"
import CreativeInvoice from "./creative-invoice"
import ClassicInvoice from "./classic-invoice"
import BrandedInvoice from "./branded-invoice"

export default function InvoiceViewer() {
  const [selectedTemplate, setSelectedTemplate] = useState("minimalist")

  const renderInvoice = () => {
    switch (selectedTemplate) {
      case "minimalist":
        return <MinimalistInvoice />
      case "modern":
        return <ModernInvoice />
      case "professional":
        return <ProfessionalInvoice />
      case "creative":
        return <CreativeInvoice />
      case "classic":
        return <ClassicInvoice />
      case "branded":
        return <BrandedInvoice />
      default:
        return <MinimalistInvoice />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Modern Invoice Templates</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Select a template style to preview</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedTemplate("minimalist")}
            className={`px-4 py-2 rounded-md ${
              selectedTemplate === "minimalist"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            Minimalist
          </button>
          <button
            onClick={() => setSelectedTemplate("modern")}
            className={`px-4 py-2 rounded-md ${
              selectedTemplate === "modern" ? "bg-gray-800 text-white" : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            Modern
          </button>
          <button
            onClick={() => setSelectedTemplate("professional")}
            className={`px-4 py-2 rounded-md ${
              selectedTemplate === "professional"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setSelectedTemplate("creative")}
            className={`px-4 py-2 rounded-md ${
              selectedTemplate === "creative"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            Creative
          </button>
          <button
            onClick={() => setSelectedTemplate("classic")}
            className={`px-4 py-2 rounded-md ${
              selectedTemplate === "classic"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            Classic
          </button>
          <button
            onClick={() => setSelectedTemplate("branded")}
            className={`px-4 py-2 rounded-md ${
              selectedTemplate === "branded"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 border border-gray-300"
            }`}
          >
            Branded
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">{renderInvoice()}</div>
      </div>
    </div>
  )
}
