export default function ClassicInvoice() {
  return (
    <div className="max-w-4xl mx-auto bg-[#f9f5e9] p-8 shadow-md font-serif">
      {/* Decorative Border */}
      <div className="border-4 border-[#8b7d5e] p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#5e4b34] mb-2">INVOICE</h1>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-[#8b7d5e]"></div>
          </div>
          <div className="mt-6">
            <img
              src="https://img.freepik.com/premium-vector/abstract-colorful-bird-logo-design_650075-1526.jpg"
              alt="Lloyd Remodeling Logo"
              className="h-16 w-auto object-contain mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2 text-[#5e4b34]">Lloyd Remodeling</h2>
            <p className="text-[#5e4b34]">456 Oak Avenue, Townsville, USA</p>
          </div>
        </div>

        {/* Document Info */}
        <div className="flex justify-between mb-8">
          <div>
            <p className="text-[#5e4b34]">
              <span className="font-semibold">Invoice Number:</span> INV-12345
            </p>
            <p className="text-[#5e4b34]">
              <span className="font-semibold">Project:</span> Kids Room Remodeling
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#5e4b34]">
              <span className="font-semibold">Date:</span> 2023-09-12
            </p>
            <p className="text-[#5e4b34]">
              <span className="font-semibold">Due Date:</span> 2023-10-12
            </p>
          </div>
        </div>

        {/* Company and Client Info */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-[#5e4b34] mb-2 border-b border-[#8b7d5e] pb-1">From</h3>
            <p className="text-[#5e4b34]">Lloyd Remodeling</p>
            <p className="text-[#5e4b34]">456 Oak Avenue</p>
            <p className="text-[#5e4b34]">Townsville, USA</p>
            <p className="text-[#5e4b34]">jane.smith@example.com</p>
            <p className="text-[#5e4b34]">+1 (987) 654-3210</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#5e4b34] mb-2 border-b border-[#8b7d5e] pb-1">Bill To</h3>
            <p className="text-[#5e4b34]">Martin Sanchez</p>
            <p className="text-[#5e4b34]">8904 La Mesa Blvd</p>
            <p className="text-[#5e4b34]">San Diego, CA 91988</p>
            <p className="text-[#5e4b34]">martin.Sanchez@gmail.com</p>
            <p className="text-[#5e4b34]">858-780-5520</p>
          </div>
        </div>

        {/* Line Items */}
        <div className="mb-10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-y-2 border-[#8b7d5e]">
                <th className="py-3 text-left text-[#5e4b34] font-semibold">Item</th>
                <th className="py-3 text-left text-[#5e4b34] font-semibold">Description</th>
                <th className="py-3 text-center text-[#5e4b34] font-semibold">Qty</th>
                <th className="py-3 text-right text-[#5e4b34] font-semibold">Price</th>
                <th className="py-3 text-right text-[#5e4b34] font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#d3c7a7]">
                <td className="py-3 text-[#5e4b34]">Faucet Replacement</td>
                <td className="py-3 text-[#5e4b34] max-w-xs">
                  Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
                </td>
                <td className="py-3 text-[#5e4b34] text-center">5 pcs</td>
                <td className="py-3 text-[#5e4b34] text-right">$150</td>
                <td className="py-3 text-[#5e4b34] text-right font-medium">$750</td>
              </tr>
              <tr className="border-b border-[#d3c7a7]">
                <td className="py-3 text-[#5e4b34]">Subway Tile Backsplash</td>
                <td className="py-3 text-[#5e4b34] max-w-xs">
                  Swift and expert replacement of worn-out kitchen faucet with a high-quality, durable alternative.
                </td>
                <td className="py-3 text-[#5e4b34] text-center">8 hrs</td>
                <td className="py-3 text-[#5e4b34] text-right">$120</td>
                <td className="py-3 text-[#5e4b34] text-right font-medium">$960</td>
              </tr>
              <tr>
                <td className="py-3 text-[#5e4b34]">Black Sackcloth</td>
                <td className="py-3 text-[#5e4b34] max-w-xs">
                  Upgrade your toilet system to enhance efficiency and conserve water.
                </td>
                <td className="py-3 text-[#5e4b34] text-center">8 hrs</td>
                <td className="py-3 text-[#5e4b34] text-right">$120</td>
                <td className="py-3 text-[#5e4b34] text-right font-medium">$960</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-10">
          <div className="w-64">
            <div className="flex justify-between py-2">
              <span className="text-[#5e4b34]">Subtotal</span>
              <span className="text-[#5e4b34] font-medium">$2,250.90</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#5e4b34]">Tax (8.75%)</span>
              <span className="text-[#5e4b34] font-medium">$129.36</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#5e4b34]">Discount</span>
              <span className="text-[#5e4b34] font-medium">-$350.50</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#5e4b34]">Delivery Fee</span>
              <span className="text-[#5e4b34] font-medium">$25.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#5e4b34]">Deposit</span>
              <span className="text-[#5e4b34] font-medium">-$500.00</span>
            </div>
            <div className="flex justify-between py-2 border-t-2 border-[#8b7d5e] mt-2">
              <span className="text-[#5e4b34] font-bold">Balance Due</span>
              <span className="text-[#5e4b34] font-bold">$3,400.00</span>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-[#5e4b34] mb-2 border-b border-[#8b7d5e] pb-1">
              Payment Methods
            </h3>
            <div className="space-y-1">
              <p className="text-[#5e4b34]">
                <span className="font-medium">Bank Transfer:</span> Bank of America
              </p>
              <p className="text-[#5e4b34]">
                <span className="font-medium">Account Holder:</span> John Smith
              </p>
              <p className="text-[#5e4b34]">
                <span className="font-medium">Account Number:</span> 13494590
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#5e4b34] mb-2 border-b border-[#8b7d5e] pb-1">
              Terms & Conditions
            </h3>
            <p className="text-[#5e4b34]">
              Payment is due within 7 days of the invoice date. Late payments may incur a 5% late fee.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="flex justify-center mb-4">
            <div className="w-32 h-1 bg-[#8b7d5e]"></div>
          </div>
          <p className="text-xl font-semibold text-[#5e4b34] italic">Thank you for your business!</p>
          <p className="text-[#5e4b34] mt-2">https://www.taglinecompany.com</p>
        </div>
      </div>
    </div>
  )
}
