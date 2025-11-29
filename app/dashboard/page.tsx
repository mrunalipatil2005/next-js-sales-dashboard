import SalesChart from "@/component/organism/salechart";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Sales Dashboard</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <SalesChart />
        </div>
      </div>
    </div>
  );
}
