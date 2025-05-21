export default function ModernInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-0 shadow-lg font-sans relative">
      {/* Diagonal green header - with no content */}
      <div className="relative h-16 w-full overflow-hidden mt-5">
        <div
          className="absolute top-0 left-0 w-full h-full bg-emerald-500"
          style={{ clipPath: "polygon(0 0, 66.7% 0, 53.3% 100%, 0 100%)" }}
        ></div>
      </div>

      {/* Company logo and Invoice title - moved below the green band with wider margins */}
      <div className="py-4" style={{ paddingLeft: "4.5rem", paddingRight: "4.5rem" }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-emerald-500 rounded-full p-1 mr-2">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <div className="bg-emerald-500 rounded-full w-2 h-2"></div>
              </div>
            </div>
            <div>
              <p className="font-bold uppercase text-sm text-gray-800">Ingoude</p>
              <p className="text-xs uppercase text-gray-600">Company</p>
            </div>
          </div>
          <div className="text-right">
            <h1 className="text-5xl font-bold text-gray-800">INVOICE</h1>
          </div>
        </div>
      </div>

      {/* Main content with wider margins */}
      <div className="py-6" style={{ paddingLeft: "4.5rem", paddingRight: "4.5rem" }}>
        {/* Client and Invoice Info */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-sm font-bold text-gray-500 mb-2">BILLING TO</h2>
            <p className="font-medium">Adeline Palmerston</p>
            <p className="text-sm text-gray-600">123 Anywhere St., Any City, ST 12345</p>
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div className="flex justify-end">
                <p className="text-sm text-gray-500 mr-4">Invoice No.</p>
                <p className="font-medium">#1234</p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-gray-500 mr-4">Invoice Date</p>
                <p className="font-medium">25 June, 2022</p>
              </div>
              <div className="flex justify-end">
                <p className="text-sm text-gray-500 mr-4">Due date</p>
                <p className="font-medium">30 June, 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Line Items - adjusted for wider margins */}
        <div className="mb-8 -mx-0">
          <table className="w-full">
            <thead>
              <tr className="bg-emerald-500 text-white">
                <th className="px-4 py-2 text-left text-sm font-medium">ITEM NAME</th>
                <th className="px-4 py-2 text-right text-sm font-medium">PRICE</th>
                <th className="px-4 py-2 text-right text-sm font-medium">QTY</th>
                <th className="px-4 py-2 text-right text-sm font-medium">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="px-4 py-3 text-sm">Logo design</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right">0</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm">Brand identity</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right">0</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-3 text-sm">Website design</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right">0</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm">Banner design</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right">0</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-3 text-sm">Stationary design</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right">0</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 text-sm">SUBTOTAL</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right">0</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-2">
              <span className="text-sm font-medium">SUB TOTAL</span>
              <span className="text-sm font-medium">$100</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-medium">TOTAL</span>
              <span className="text-sm font-medium">0.00 %</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-bold">TOTAL</span>
              <span className="text-sm font-bold">$100</span>
            </div>
          </div>
        </div>

        {/* Terms and Signature */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-bold mb-2">TERMS & CONDITIONS</h3>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et hendrerit nisi, efficitur at
              vestibulum erat. Sed non ex at tellus efficitur fringilla. Aliquam erat volutpat. Sed ut eleifend massa.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <div className="border-t border-gray-300 w-48 text-center pt-1">
              <p className="text-xs text-gray-500">SIGNATURE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - with black left band, light green right band, and white gap */}
      <div className="relative h-26 w-full overflow-hidden bg-white" style={{ marginBottom: "10px" }}>
        {/* First part - black */}
        <div
          className="absolute bottom-0 left-0 w-2/3 h-full bg-black"
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0 100%)" }}
        ></div>
        {/* Second part - light green */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full bg-emerald-300"
          style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 10% 100%)" }}
        ></div>
        <div className="relative z-10 flex justify-between items-center" style={{ padding: "1rem 4.5rem" }}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center mr-1">
                <div className="bg-emerald-500 rounded-full w-4 h-4 flex items-center justify-center"></div>
              </div>
              <span className="text-xs text-white">info@example.com</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white rounded-full p-1 w-6 h-6 flex items-center justify-center mr-1">
                <div className="bg-emerald-500 rounded-full w-4 h-4 flex items-center justify-center"></div>
              </div>
              <span className="text-xs text-white">+123 456 7890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
