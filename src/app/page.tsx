// app/page.tsx
export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">Total Users</h3>
        <p className="text-2xl">1200</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">Total Sales</h3>
        <p className="text-2xl">$50,000</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">New Orders</h3>
        <p className="text-2xl">300</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">Pending Requests</h3>
        <p className="text-2xl">5</p>
      </div>
    </div>
  );
}
