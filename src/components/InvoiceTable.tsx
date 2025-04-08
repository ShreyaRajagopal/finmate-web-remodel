
const InvoiceTable = () => {
  const invoiceData = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
    { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
    { id: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
    { id: "INV007", status: "Unpaid", method: "Credit Card", amount: "$300.00" }
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-400";
      case "Pending":
        return "text-yellow-400";
      case "Unpaid":
        return "text-red-400";
      default:
        return "";
    }
  };

  const total = "$2,500.00";

  return (
    <div className="overflow-hidden rounded-lg bg-black bg-opacity-30 text-white my-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-4 text-left text-gray-400">Invoice</th>
              <th className="px-6 py-4 text-left text-gray-400">Status</th>
              <th className="px-6 py-4 text-left text-gray-400">Method</th>
              <th className="px-6 py-4 text-right text-gray-400">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoice) => (
              <tr key={invoice.id} className="border-b border-gray-800">
                <td className="px-6 py-4">{invoice.id}</td>
                <td className={`px-6 py-4 ${getStatusClass(invoice.status)}`}>{invoice.status}</td>
                <td className="px-6 py-4">{invoice.method}</td>
                <td className="px-6 py-4 text-right">{invoice.amount}</td>
              </tr>
            ))}
            <tr>
              <td className="px-6 py-4 font-bold">Total</td>
              <td colSpan={2}></td>
              <td className="px-6 py-4 text-right font-bold">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 text-center text-gray-400 text-sm">
        A list of your recent invoices.
      </div>
    </div>
  );
};

export default InvoiceTable;
