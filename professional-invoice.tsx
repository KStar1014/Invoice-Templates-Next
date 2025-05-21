export default function ProfessionalInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md border border-gray-200 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/abstract-colorful-bird-logo-design_650075-1526.jpg"
            alt="Lloyd Remodeling Logo"
            className="h-16 w-auto object-contain"
          />
          <h2 className="text-xl font-semibold mt-2">Lloyd Remodeling</h2>
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
          <p className="text-gray-600 mt-1">#INV-12345</p>
          <div className="h-1 w-20 bg-teal-500 mt-2 ml-auto"></div>
        </div>
      </div>

      {/* Company and Client Info */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <div className="bg-gray-100 p-4 rounded border-l-4 border-teal-500">
            <h3 className="text-sm font-semibold uppercase text-teal-700 mb-2">From</h3>
            <p className="font-medium">Lloyd Remodeling</p>
            <p className="text-sm text-gray-600">456 Oak Avenue</p>
            <p className="text-sm text-gray-600">Townsville, USA</p>
            <p className="text-sm text-gray-600">jane.smith@example.com</p>
            <p className="text-sm text-gray-600">+1 (987) 654-3210</p>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 p-4 rounded border-l-4 border-teal-500">
            <h3 className="text-sm font-semibold uppercase text-teal-700 mb-2">Bill To</h3>
            <p className="font-medium">Martin Sanchez</p>
            <p className="text-sm text-gray-600">8904 La Mesa Blvd</p>
            <p className="text-sm text-gray-600">San Diego, CA 91988</p>
            <p className="text-sm text-gray-600">martin.Sanchez@gmail.com</p>
            <p className="text-sm text-gray-600">858-780-5520</p>
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="border border-gray-200 p-3 rounded">
          <h3 className="text-xs font-semibold uppercase text-teal-700 mb-1">Invoice Date</h3>
          <p className="font-medium">2023-09-12</p>
        </div>
        <div className="border border-gray-200 p-3 rounded">
          <h3 className="text-xs font-semibold uppercase text-teal-700 mb-1">Due Date</h3>
          <p className="font-medium">2023-10-12</p>
        </div>
        <div className="border border-gray-200 p-3 rounded">
          <h3 className="text-xs font-semibold uppercase text-teal-700 mb-1">Project</h3>
          <p className="font-medium">Kids Room Remodeling</p>
        </div>
      </div>

      {/* Line Items */}
      <div className="mb-10">
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-teal-50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-teal-700 border-b border-gray-200">
                Item
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-teal-700 border-b border-gray-200">
                Description
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-teal-700 border-b border-gray-200">
                Qty
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-teal-700 border-b border-gray-200">
                Price
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-teal-700 border-b border-gray-200">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm font-medium">Faucet Replacement</td>
              <td className="px-4 py-3 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="px-4 py-3 text-sm text-center">5 pcs</td>
              <td className="px-4 py-3 text-sm text-right">$150</td>
              <td className="px-4 py-3 text-sm text-right font-medium">$750</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm font-medium">Subway Tile Backsplash</td>
              <td className="px-4 py-3 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="px-4 py-3 text-sm text-center">8 hrs</td>
              <td className="px-4 py-3 text-sm text-right">$120</td>
              <td className="px-4 py-3 text-sm text-right font-medium">$960</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">Black Sackcloth</td>
              <td className="px-4 py-3 text-sm text-gray-600 max-w-xs">
                Upgrade your toilet system to enhance efficiency and conserve water.
              </td>
              <td className="px-4 py-3 text-sm text-center">8 hrs</td>
              <td className="px-4 py-3 text-sm text-right">$120</td>
              <td className="px-4 py-3 text-sm text-right font-medium">$960</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-10">
        <div className="w-64">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm font-medium">$2,250.90</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Tax (8.75%)</span>
            <span className="text-sm font-medium">$129.36</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Discount</span>
            <span className="text-sm font-medium">-$350.50</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Delivery Fee</span>
            <span className="text-sm font-medium">$25.00</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-sm text-gray-600">Deposit</span>
            <span className="text-sm font-medium">-$500.00</span>
          </div>
          <div className="flex justify-between py-3 mt-2 bg-teal-50 px-3 rounded">
            <span className="font-semibold text-teal-700">Balance Due</span>
            <span className="font-semibold text-teal-700">$3,400.00</span>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="border border-gray-200 p-4 rounded border-l-4 border-teal-500">
          <h3 className="text-sm font-semibold uppercase text-teal-700 mb-2">Payment Methods</h3>
          <div className="text-sm space-y-1">
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
        <div className="border border-gray-200 p-4 rounded border-l-4 border-teal-500">
          <h3 className="text-sm font-semibold uppercase text-teal-700 mb-2">Terms & Conditions</h3>
          <p className="text-sm text-gray-600">
            Payment is due within 7 days of the invoice date. Late payments may incur a 5% late fee.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center border-t border-gray-200 pt-6">
        <p className="text-teal-700 font-medium mb-1">Thank you for your business!</p>
        <p className="text-sm text-gray-500">https://www.taglinecompany.com</p>
      </div>
    </div>
  )
}
