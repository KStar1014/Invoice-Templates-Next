export default function BrandedInvoice() {
  // Company brand colors
  const primaryColor = "#3b82f6" // Blue
  const secondaryColor = "#1e40af" // Darker blue
  const accentColor = "#dbeafe" // Light blue

  return (
    <div className="max-w-4xl mx-auto bg-white p-0 shadow-lg font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] p-8 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.freepik.com/premium-vector/abstract-colorful-bird-logo-design_650075-1526.jpg"
              alt="Lloyd Remodeling Logo"
              className="h-16 w-auto object-contain bg-white p-1 rounded"
            />
            <div>
              <h2 className="text-2xl font-bold">Lloyd Remodeling</h2>
              <p className="text-sm opacity-90">456 Oak Avenue, Townsville, USA</p>
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-bold">INVOICE</h1>
            <p className="text-sm opacity-90">#INV-12345</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Client and Invoice Info */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-sm font-bold uppercase text-[#3b82f6] mb-2">Bill To</h3>
            <div className="bg-[#dbeafe] p-4 rounded">
              <p className="font-medium">Martin Sanchez</p>
              <p className="text-sm text-gray-700">8904 La Mesa Blvd</p>
              <p className="text-sm text-gray-700">San Diego, CA 91988</p>
              <p className="text-sm text-gray-700">martin.Sanchez@gmail.com</p>
              <p className="text-sm text-gray-700">858-780-5520</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-[#3b82f6] mb-2">Invoice Details</h3>
            <div className="bg-[#dbeafe] p-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Issue Date</p>
                  <p className="font-medium">2023-09-12</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Due Date</p>
                  <p className="font-medium">2023-10-12</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Project</p>
                  <p className="font-medium">Kids Room Remodeling</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-medium text-orange-500">Unpaid</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase text-[#3b82f6] mb-2">Items</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-[#dbeafe]">
                <th className="px-4 py-3 text-left text-xs font-bold uppercase text-[#1e40af]">Item</th>
                <th className="px-4 py-3 text-left text-xs font-bold uppercase text-[#1e40af]">Description</th>
                <th className="px-4 py-3 text-center text-xs font-bold uppercase text-[#1e40af]">Qty</th>
                <th className="px-4 py-3 text-right text-xs font-bold uppercase text-[#1e40af]">Price</th>
                <th className="px-4 py-3 text-right text-xs font-bold uppercase text-[#1e40af]">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 text-sm font-medium">Faucet Replacement</td>
                <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                  Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
                </td>
                <td className="px-4 py-4 text-sm text-center">5 pcs</td>
                <td className="px-4 py-4 text-sm text-right">$150</td>
                <td className="px-4 py-4 text-sm text-right font-medium">$750</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm font-medium">Subway Tile Backsplash</td>
                <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                  Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
                </td>
                <td className="px-4 py-4 text-sm text-center">8 hrs</td>
                <td className="px-4 py-4 text-sm text-right">$120</td>
                <td className="px-4 py-4 text-sm text-right font-medium">$960</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm font-medium">Black Sackcloth</td>
                <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                  Upgrade your toilet system to enhance efficiency and conserve water.
                </td>
                <td className="px-4 py-4 text-sm text-center">8 hrs</td>
                <td className="px-4 py-4 text-sm text-right">$120</td>
                <td className="px-4 py-4 text-sm text-right font-medium">$960</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals and Payment */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-sm font-bold uppercase text-[#3b82f6] mb-2">Payment Methods</h3>
            <div className="bg-[#dbeafe] p-4 rounded">
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Bank Transfer:</span> Bank of America
                </p>
                <p className="text-sm">
                  <span className="font-medium">Account Holder:</span> John Smith
                </p>
                <p className="text-sm">
                  <span className="font-medium">Account Number:</span> 13494590
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <h4 className="text-sm font-bold text-[#1e40af] mb-2">Terms & Conditions</h4>
                <p className="text-sm text-gray-600">
                  Payment is due within 7 days of the invoice date. Late payments may incur a 5% late fee.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-[#3b82f6] mb-2">Summary</h3>
            <div className="bg-[#dbeafe] p-4 rounded">
              <div className="space-y-2">
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
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#1e40af]">Balance Due</span>
                  <span className="font-bold text-xl text-[#1e40af]">$3,400.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase text-[#3b82f6] mb-2">Project Photos</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img
                src="https://media.architecturaldigest.com/photos/56e88e9e6836c03a28818862/1:1/w_1247,h_1247,c_limit/front-door-08.jpg"
                alt="Front of house"
                className="w-full h-40 object-cover"
              />
              <p className="text-xs p-2 bg-[#dbeafe] text-gray-700">Front of house</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img
                src="https://www.bhg.com/thmb/jpBtvqhTqXRjBOB8qnp9wniazXA=/5494x0/filters:no_upscale():strip_icc()/0530_4816_preview-07833ecda1be4292ab9312e0fa56f7c7.jpg"
                alt="Side of the house"
                className="w-full h-40 object-cover"
              />
              <p className="text-xs p-2 bg-[#dbeafe] text-gray-700">Side of the house</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img
                src="https://www.thespruce.com/thmb/cg-QxzJ8QHIMqik2UTPlTAnA6l4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ladylandscapefrontyard-3a7705e4550045b08448b2e3f026528b.jpgc"
                alt="The best front view of the yard"
                className="w-full h-40 object-cover"
              />
              <p className="text-xs p-2 bg-[#dbeafe] text-gray-700">The best front view of the yard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-[#3b82f6] to-[#1e40af] p-6 text-white text-center">
        <p className="font-bold text-lg mb-2">Thank you for your business!</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">jane.smith@example.com</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm">+1 (987) 654-3210</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-sm">https://www.taglinecompany.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
