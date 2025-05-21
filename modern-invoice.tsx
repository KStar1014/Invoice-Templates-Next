export default function ModernInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg font-sans">
      {/* Header with gradient accent */}
      <div className="relative mb-12">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500"></div>
        <div className="pt-6 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">INVOICE</h1>
            <p className="text-gray-500 mt-1">#INV-12345</p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/premium-vector/abstract-colorful-bird-logo-design_650075-1526.jpg"
              alt="Lloyd Remodeling Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Company and Client Info */}
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-lg font-bold text-violet-700 mb-4">FROM</h2>
          <div className="space-y-1">
            <p className="font-medium">Lloyd Remodeling</p>
            <p className="text-gray-600">456 Oak Avenue</p>
            <p className="text-gray-600">Townsville, USA</p>
            <p className="text-gray-600">jane.smith@example.com</p>
            <p className="text-gray-600">+1 (987) 654-3210</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-violet-700 mb-4">TO</h2>
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
      <div className="grid grid-cols-3 gap-6 mb-12 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-lg">
        <div>
          <p className="text-sm text-violet-600 font-medium">Issue Date</p>
          <p className="font-medium">2023-09-12</p>
        </div>
        <div>
          <p className="text-sm text-violet-600 font-medium">Due Date</p>
          <p className="font-medium">2023-10-12</p>
        </div>
        <div>
          <p className="text-sm text-violet-600 font-medium">Project</p>
          <p className="font-medium">Kids Room Remodeling</p>
        </div>
      </div>

      {/* Line Items */}
      <div className="mb-12">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-lg">
              <th className="px-4 py-3 text-left text-sm font-semibold text-violet-700 rounded-l-lg">Item</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-violet-700">Description</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-violet-700">Qty</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-violet-700">Price</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-violet-700 rounded-r-lg">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 text-sm font-medium">Faucet Replacement</td>
              <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="px-4 py-4 text-sm text-right">5 pcs</td>
              <td className="px-4 py-4 text-sm text-right">$150</td>
              <td className="px-4 py-4 text-sm text-right font-medium">$750</td>
            </tr>
            <tr>
              <td className="px-4 py-4 text-sm font-medium">Subway Tile Backsplash</td>
              <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="px-4 py-4 text-sm text-right">8 hrs</td>
              <td className="px-4 py-4 text-sm text-right">$120</td>
              <td className="px-4 py-4 text-sm text-right font-medium">$960</td>
            </tr>
            <tr>
              <td className="px-4 py-4 text-sm font-medium">Black Sackcloth</td>
              <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                Upgrade your toilet system to enhance efficiency and conserve water.
              </td>
              <td className="px-4 py-4 text-sm text-right">8 hrs</td>
              <td className="px-4 py-4 text-sm text-right">$120</td>
              <td className="px-4 py-4 text-sm text-right font-medium">$960</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-12">
        <div className="w-72 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-lg">
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
          <div className="flex justify-between py-2 border-t border-gray-300 mt-2">
            <span className="font-bold">Balance Due</span>
            <span className="font-bold text-xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
              $3,400.00
            </span>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-lg">
          <h3 className="font-bold text-violet-700 mb-4">Payment Methods</h3>
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
        <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 p-6 rounded-lg">
          <h3 className="font-bold text-violet-700 mb-4">Terms & Conditions</h3>
          <p className="text-sm text-gray-600">
            Payment is due within 7 days of the invoice date. Late payments may incur a 5% late fee.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
        <div>
          <p className="text-gray-500">https://www.taglinecompany.com</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-medium text-gradient bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">
            Thank you for your business!
          </p>
        </div>
      </div>
    </div>
  )
}
