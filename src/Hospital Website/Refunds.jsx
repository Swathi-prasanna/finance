import { FiAlertTriangle, FiCheckCircle, FiClock, FiFileText } from "react-icons/fi";

const refundStats = [
  {
    label: "Pending Approval",
    count: "1",
    total: "₹500 total",
    type: "pending",
    icon: <FiClock />,
  },
  {
    label: "Approved",
    count: "1",
    total: "₹1,200 total",
    type: "approved",
    icon: <FiCheckCircle />,
  },
  {
    label: "Rejected",
    count: "1",
    total: "₹300 total",
    type: "rejected",
    icon: <FiAlertTriangle />,
  },
];

const refundRequests = [
  {
    refundId: "REF001",
    billId: "BILL001",
    patient: "John Anderson",
    amount: "₹500",
    reason: "Service not provided",
    requestedBy: "Maria Rodriguez",
    date: "2026-01-03",
    status: "pending",
  },
  {
    refundId: "REF002",
    billId: "BILL005",
    patient: "Sarah Williams",
    amount: "₹1,200",
    reason: "Duplicate payment",
    requestedBy: "Front Desk",
    date: "2026-01-02",
    status: "approved",
  },
  {
    refundId: "REF003",
    billId: "BILL008",
    patient: "Michael Chen",
    amount: "₹300",
    reason: "Discount adjustment",
    requestedBy: "Reception",
    date: "2026-01-01",
    status: "rejected",
  },
];

const Refunds = () => {
  return (
    <div className="refunds-page">
      <div className="refunds-header">
        <div>
          <h1>Refunds & Adjustments</h1>
          <p>Manage refund requests and approvals</p>
        </div>
        <button className="new-refund-btn" type="button">
          <FiFileText />
          New Refund Request
        </button>
      </div>

      <div className="refund-stats-grid">
        {refundStats.map((item) => (
          <div className="refund-stat-card" key={item.label}>
            <div className={`refund-stat-title ${item.type}`}>
              {item.icon}
              <span>{item.label}</span>
            </div>
            <strong>{item.count}</strong>
            <p className={item.type}>{item.total}</p>
          </div>
        ))}
      </div>

      <section className="refund-requests-card">
        <h2>Refund Requests</h2>
        <div className="refund-table-wrap">
          <table className="refund-table">
            <thead>
              <tr>
                <th>Refund ID</th>
                <th>Bill ID</th>
                <th>Patient</th>
                <th>Amount</th>
                <th>Reason</th>
                <th>Requested By</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {refundRequests.map((request) => (
                <tr key={request.refundId}>
                  <td>
                    <span className="refund-id-badge">{request.refundId}</span>
                  </td>
                  <td>
                    <span className="refund-bill-badge">{request.billId}</span>
                  </td>
                  <td>{request.patient}</td>
                  <td className="refund-amount">{request.amount}</td>
                  <td>{request.reason}</td>
                  <td>{request.requestedBy}</td>
                  <td>{request.date}</td>
                  <td>
                    <span className={`refund-status ${request.status}`}>
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === "pending" ? (
                      <div className="refund-action-group">
                        <button className="approve-refund-btn" type="button">
                          Approve
                        </button>
                        <button className="reject-refund-btn" type="button">
                          Reject
                        </button>
                      </div>
                    ) : (
                      <button className="refund-details-btn" type="button">
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="refund-workflow-card">
        <div className="workflow-title">
          <FiAlertTriangle />
          <h2>Refund Approval Workflow</h2>
        </div>
        <ul>
          <li>All refunds require Finance Manager approval</li>
          <li>Refunds above ₹5,000 require Admin sign-off</li>
          <li>Approved refunds are processed within 3-5 business days</li>
          <li>All refund actions are logged in the audit trail</li>
        </ul>
      </section>
    </div>
  );
};

export default Refunds;
