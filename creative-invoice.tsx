export default function CreativeInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg font-sans rounded-xl">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 relative">
        <div className="absolute -top-8 left-0 right-0 h-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-t-xl"></div>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          INVOICE
        </h1>
        <p className="text-gray-500">#INV-12345</p>
        <div className="mt-6 flex items-center space-x-2">
          <img
            src="https://img.freepik.com/premium-vector/abstract-colorful-bird-logo-design_650075-1526.jpg"
            alt="Lloyd Remodeling Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">Lloyd Remodeling</span>
        </div>
      </div>

      {/* Company and Client Info */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm transform -rotate-1">
          <h2 className="text-lg font-bold text-purple-600 mb-4">FROM US</h2>
          <div className="space-y-1">
            <p className="font-medium">Lloyd Remodeling</p>
            <p className="text-gray-600">456 Oak Avenue</p>
            <p className="text-gray-600">Townsville, USA</p>
            <p className="text-gray-600">jane.smith@example.com</p>
            <p className="text-gray-600">+1 (987) 654-3210</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm transform rotate-1">
          <h2 className="text-lg font-bold text-pink-600 mb-4">TO YOU</h2>
          <div className="space-y-1">
            <p className="font-medium">Martin Sanchez</p>
            <p className="text-gray-600">8904 La Mesa Blvd</p>
            <p className="text-gray-600">San Diego, CA 91988</p>
            <p className="text-gray-600">martin.Sanchez@gmail.com</p>
            <p className="text-gray-600">858-780-5520</p>
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="bg-white px-6 py-4 rounded-full shadow-sm">
          <span className="text-purple-600 font-medium">Issue Date:</span>
          <span className="ml-2">2023-09-12</span>
        </div>
        <div className="bg-white px-6 py-4 rounded-full shadow-sm">
          <span className="text-pink-600 font-medium">Due Date:</span>
          <span className="ml-2">2023-10-12</span>
        </div>
        <div className="bg-white px-6 py-4 rounded-full shadow-sm">
          <span className="text-indigo-600 font-medium">Project:</span>
          <span className="ml-2">Kids Room Remodeling</span>
        </div>
      </div>

      {/* Line Items */}
      <div className="mb-12 overflow-hidden rounded-xl shadow-sm">
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold">Item</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Description</th>
              <th className="px-6 py-4 text-center text-sm font-semibold">Qty</th>
              <th className="px-6 py-4 text-right text-sm font-semibold">Price</th>
              <th className="px-6 py-4 text-right text-sm font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm font-medium">Faucet Replacement</td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="px-6 py-4 text-sm text-center">5 pcs</td>
              <td className="px-6 py-4 text-sm text-right">$150</td>
              <td className="px-6 py-4 text-sm text-right font-medium">$750</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium">Subway Tile Backsplash</td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="px-6 py-4 text-sm text-center">8 hrs</td>
              <td className="px-6 py-4 text-sm text-right">$120</td>
              <td className="px-6 py-4 text-sm text-right font-medium">$960</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium">Black Sackcloth</td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-xs">
                Upgrade your toilet system to enhance efficiency and conserve water.
              </td>
              <td className="px-6 py-4 text-sm text-center">8 hrs</td>
              <td className="px-6 py-4 text-sm text-right">$120</td>
              <td className="px-6 py-4 text-sm text-right font-medium">$960</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-12">
        <div className="w-72 bg-white p-6 rounded-lg shadow-sm transform rotate-1">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">$2,250.90</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Tax (8.75%)</span>
            <span className="font-medium">$129.36</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Discount</span>
            <span className="font-medium">-$350.50</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium">$25.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Deposit</span>
            <span className="font-medium">-$500.00</span>
          </div>
          <div className="flex justify-between py-3 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 rounded-lg">
            <span className="font-bold">Balance Due</span>
            <span className="font-bold">$3,400.00</span>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm transform -rotate-1">
          <h3 className="font-bold text-purple-600 mb-4">Payment Methods</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Bank Transfer:</span> Bank of America
            </p>
            <p>
              <span className="font-medium">Account Holder:</span> John Smith
            </p>
            <p>
              <span className="font-medium">Account Number:</span> 13494590
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm transform rotate-1">
          <h3 className="font-bold text-pink-600 mb-4">Terms & Conditions</h3>
          <p className="text-sm text-gray-600">
            Payment is due within 7 days of the invoice date. Late payments may incur a 5% late fee.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          Thank you for your business!
        </p>
        <p className="text-gray-500">https://www.taglinecompany.com</p>
      </div>
    </div>
  )
}
