export default function CreativeInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-0 shadow-lg font-sans rounded-xl relative overflow-hidden">
      {/* Smaller purple curved shape in top left */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-700 rounded-br-full z-0"></div>

      {/* Triangle shape moved 55px to the left */}
      <div
        className="absolute top-0 left-[-55px] w-0 h-0 z-0"
        style={{
          borderTop: "240px solid rgba(59, 130, 246, 0.7)", // Blue with transparency
          borderRight: "240px solid transparent",
          transform: "rotate(-15deg)",
          transformOrigin: "top left",
        }}
      ></div>

      {/* Three-color wave-style curves at bottom right - expanded even more */}
      <div className="absolute bottom-0 right-0 w-full h-full z-0 overflow-hidden">
        {/* First wave - purple */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-96 h-80">
            <path
              fill="#9333ea"
              d="M43.2,-68.1C54.6,-61.9,61.5,-47.1,68.2,-32.2C74.9,-17.3,81.3,-2.3,79.9,12C78.5,26.3,69.2,39.9,57.4,49.2C45.6,58.5,31.3,63.5,16.6,68.1C1.9,72.7,-13.2,76.9,-27.4,73.6C-41.6,70.3,-54.9,59.5,-63.5,46.1C-72.1,32.7,-76,16.3,-75.2,0.5C-74.4,-15.4,-68.9,-30.8,-59.5,-42.1C-50.1,-53.4,-36.8,-60.6,-23.7,-65.5C-10.6,-70.4,2.3,-73,14.9,-71.3C27.5,-69.6,39.8,-63.6,43.2,-68.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Second wave - pink - expanded 30px more to bottom and left */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 w-[32rem] h-[28rem] opacity-70"
            style={{ transform: "translate(30px, 10px)" }}
          >
            <path
              fill="#ec4899"
              d="M39.2,-65.8C52.9,-56.7,67.7,-49.6,74.2,-37.5C80.7,-25.5,78.9,-8.5,74.4,6.5C69.9,21.5,62.8,34.5,53.1,45.8C43.4,57.1,31.2,66.7,17.1,71.9C3,77.1,-13,77.9,-27.4,73.2C-41.8,68.5,-54.6,58.3,-63.5,45.3C-72.4,32.3,-77.4,16.2,-78.3,-0.5C-79.2,-17.2,-76,-34.4,-66.5,-46.5C-57,-58.6,-41.2,-65.6,-26.6,-74.1C-12,-82.6,1.5,-92.6,13.5,-89.3C25.5,-86,39,-74.9,39.2,-65.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Third wave - blue - expanded even more */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 w-120 h-96 opacity-60"
            style={{ transform: "translate(100px, 80px)" }}
          >
            <path
              fill="#3b82f6"
              d="M47.7,-79.9C62.2,-72.2,74.5,-60.1,81.7,-45.3C88.9,-30.5,91,-13,88.1,3.3C85.2,19.6,77.3,34.7,67.1,47.7C56.9,60.7,44.3,71.6,29.7,77.7C15.1,83.8,-1.5,85.1,-17.7,81.9C-33.9,78.7,-49.7,71,-62.1,59.1C-74.5,47.2,-83.5,31.1,-87.4,13.4C-91.3,-4.3,-90.1,-23.6,-82.2,-39.2C-74.3,-54.8,-59.7,-66.7,-44.1,-74.1C-28.5,-81.5,-11.9,-84.4,2.9,-89.2C17.7,-94,35.3,-100.7,47.7,-79.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Content container with padding and z-index to appear above the shapes */}
      <div className="relative z-10 p-8">
        {/* Header - Centered title and company name */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold text-purple-700 mb-2">INVOICE</h1>
          <p className="text-xl font-medium text-purple-700">CINYARD INTERNATIONAL CO.</p>
        </div>

        {/* Client and Invoice Info - Adjusted grid to move Billed To section right */}
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* Empty column for spacing */}
          <div className="col-span-1"></div>

          {/* Billed To section moved right */}
          <div className="col-span-2">
            <h2 className="text-sm font-bold text-purple-700 uppercase mb-2">Billed To:</h2>
            <div className="space-y-1">
              <p className="font-medium">Martin Sanchez</p>
              <p className="text-gray-600">8904 La Mesa Blvd</p>
              <p className="text-gray-600">San Diego, CA 91988</p>
            </div>
          </div>

          {/* Invoice details */}
          <div className="col-span-2 text-right">
            <div className="space-y-1">
              <div className="flex justify-end">
                <p className="text-sm text-gray-600 mr-4">Invoice No:</p>
                <p className="font-medium">INV-12345</p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-gray-600 mr-4">Date:</p>
                <p className="font-medium">2023-09-12</p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-gray-600 mr-4">Project:</p>
                <p className="font-medium">Kids Room Remodeling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Line Items - Full Width Table */}
        <div className="mb-8 -mx-8">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-700 text-white">
                <th className="px-8 py-3 text-left text-sm font-semibold">Description</th>
                <th className="px-8 py-3 text-center text-sm font-semibold">Unit</th>
                <th className="px-8 py-3 text-right text-sm font-semibold">Price</th>
                <th className="px-8 py-3 text-right text-sm font-semibold">Amount Due</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-purple-100">
                <td className="px-8 py-4 text-sm font-medium">Faucet Replacement</td>
                <td className="px-8 py-4 text-sm text-center">5 pcs</td>
                <td className="px-8 py-4 text-sm text-right">$150</td>
                <td className="px-8 py-4 text-sm text-right font-medium">$750</td>
              </tr>
              <tr className="bg-white">
                <td className="px-8 py-4 text-sm font-medium">Subway Tile Backsplash</td>
                <td className="px-8 py-4 text-sm text-center">8 hrs</td>
                <td className="px-8 py-4 text-sm text-right">$120</td>
                <td className="px-8 py-4 text-sm text-right font-medium">$960</td>
              </tr>
              <tr className="bg-purple-100">
                <td className="px-8 py-4 text-sm font-medium">Black Sackcloth</td>
                <td className="px-8 py-4 text-sm text-center">8 hrs</td>
                <td className="px-8 py-4 text-sm text-right">$120</td>
                <td className="px-8 py-4 text-sm text-right font-medium">$960</td>
              </tr>
              <tr className="bg-white">
                <td className="px-8 py-4 text-sm font-medium">Stainless Steel Sink</td>
                <td className="px-8 py-4 text-sm text-center">3 hour</td>
                <td className="px-8 py-4 text-sm text-right">$180</td>
                <td className="px-8 py-4 text-sm text-right font-medium">$540</td>
              </tr>
              <tr className="bg-purple-100">
                <td className="px-8 py-4 text-sm font-medium">Luxury Vinyl Flooring</td>
                <td className="px-8 py-4 text-sm text-center">2 rooms</td>
                <td className="px-8 py-4 text-sm text-right">$300</td>
                <td className="px-8 py-4 text-sm text-right font-medium">$540</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals and Payment */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-bold text-purple-700 uppercase mb-4">Please make payments to:</h3>
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
          </div>
          <div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-medium">$2,250.90</span>
              </div>
              <div className="flex justify-between py-2 bg-purple-50 rounded px-2">
                <span className="text-gray-600">Tax (8.75%)</span>
                <span className="font-medium">$129.36</span>
              </div>
              <div className="flex justify-between py-2 border-t border-gray-200 mt-2 bg-purple-700 rounded px-2">
                <span className="font-bold text-white">TOTAL</span>
                <span className="font-bold text-xl text-white">$3,400.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-purple-700 uppercase mb-4">Contact us</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-700 mr-2"
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
              <span>jane.smith@example.com</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-700 mr-2"
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
              <span>+1 (987) 654-3210</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-700 mr-2"
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
              <span>https://www.taglinecompany.com</span>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-8">
          <p className="text-lg font-medium text-purple-700">Thank you for your business!</p>
        </div>
      </div>
    </div>
  )
}
