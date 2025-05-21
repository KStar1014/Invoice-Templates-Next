export default function MinimalistInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm border border-gray-100 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-3xl font-light tracking-tight text-gray-800">INVOICE</h1>
          <div className="mt-6">
            <img
              src="https://img.freepik.com/premium-vector/abstract-colorful-bird-logo-design_650075-1526.jpg"
              alt="Lloyd Remodeling Logo"
              className="h-12 w-auto object-contain"
            />
            <h2 className="text-lg font-medium mt-2">Lloyd Remodeling</h2>
            <p className="text-sm text-gray-600 mt-1">456 Oak Avenue, Townsville, USA</p>
            <p className="text-sm text-gray-600">jane.smith@example.com</p>
            <p className="text-sm text-gray-600">+1 (987) 654-3210</p>
          </div>
        </div>
        <div className="text-right">
          <div className="mb-4">
            <p className="text-sm text-gray-500">Invoice #</p>
            <p className="font-medium">INV-12345</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">2023-09-12</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Due Date</p>
            <p className="font-medium">2023-10-12</p>
          </div>
        </div>
      </div>

      {/* Client Info */}
      <div className="mb-12 grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Bill To</h3>
          <p className="font-medium">Martin Sanchez</p>
          <p className="text-sm text-gray-600">8904 La Mesa Blvd</p>
          <p className="text-sm text-gray-600">San Diego, CA 91988</p>
          <p className="text-sm text-gray-600">martin.Sanchez@gmail.com</p>
          <p className="text-sm text-gray-600">858-780-5520</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ship To</h3>
          <p className="font-medium">Martin Sanchez</p>
          <p className="text-sm text-gray-600">2094 Broadway Rd</p>
          <p className="text-sm text-gray-600">San Diego, CA 90123</p>
        </div>
      </div>

      {/* Project Info */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Project</h3>
        <p className="font-medium">Kids Room Remodeling</p>
      </div>

      {/* Line Items */}
      <div className="mb-12">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 text-left text-xs uppercase tracking-wider text-gray-500">Item</th>
              <th className="py-2 text-left text-xs uppercase tracking-wider text-gray-500">Description</th>
              <th className="py-2 text-right text-xs uppercase tracking-wider text-gray-500">Qty</th>
              <th className="py-2 text-right text-xs uppercase tracking-wider text-gray-500">Price</th>
              <th className="py-2 text-right text-xs uppercase tracking-wider text-gray-500">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="py-4 text-sm">Faucet Replacement</td>
              <td className="py-4 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="py-4 text-sm text-right">5 pcs</td>
              <td className="py-4 text-sm text-right">$150</td>
              <td className="py-4 text-sm text-right font-medium">$750</td>
            </tr>
            <tr>
              <td className="py-4 text-sm">Subway Tile Backsplash</td>
              <td className="py-4 text-sm text-gray-600 max-w-xs">
                Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
              </td>
              <td className="py-4 text-sm text-right">8 hrs</td>
              <td className="py-4 text-sm text-right">$120</td>
              <td className="py-4 text-sm text-right font-medium">$960</td>
            </tr>
            <tr>
              <td className="py-4 text-sm">Black Sackcloth</td>
              <td className="py-4 text-sm text-gray-600 max-w-xs">
                Upgrade your toilet system to enhance efficiency and conserve water.
              </td>
              <td className="py-4 text-sm text-right">8 hrs</td>
              <td className="py-4 text-sm text-right">$120</td>
              <td className="py-4 text-sm text-right font-medium">$960</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-12">
        <div className="w-64">
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm font-medium">$2,250.90</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-600">Tax (8.75%)</span>
            <span className="text-sm font-medium">$129.36</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-600">Discount (Holiday Sales)</span>
            <span className="text-sm font-medium">-$350.50</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-600">Delivery Fee</span>
            <span className="text-sm font-medium">$25.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-600">Deposit</span>
            <span className="text-sm font-medium">-$500.00</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
            <span className="font-medium">Balance Due</span>
            <span className="font-medium">$3,400.00</span>
          </div>
        </div>
      </div>

      {/* Payment Info */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Payment Methods</h3>
          <div className="text-sm">
            <p className="mb-1">
              <span className="font-medium">Bank Transfer:</span> Bank of America
            </p>
            <p className="mb-1">
              <span className="font-medium">Account Holder:</span> John Smith
            </p>
            <p className="mb-1">
              <span className="font-medium">Account Number:</span> 13494590
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Terms & Conditions</h3>
          <p className="text-sm text-gray-600">
            Payment is due within 7 days of the invoice date. Late payments may incur a 5% late fee.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-16">
        <p>Thank you for your business!</p>
        <p className="mt-1">https://www.taglinecompany.com</p>
      </div>
    </div>
  )
}
