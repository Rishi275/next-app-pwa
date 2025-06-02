export default function UserDashboard() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Welcome Back!</h3>
            <p className="text-gray-600">Here's your dashboard overview.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
            <p className="text-gray-600">View your latest activity and metrics.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Recent Activity</h3>
            <p className="text-gray-600">See what's been happening lately.</p>
          </div>
        </div>
      </div>
    );
  }