// app/(dashboard)/dashboard/page.tsx
export default function Dashboard() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard. Here you can view your account summary and recent activities.</p>
        {/* TODO: Add dashboard components like account balance, recent trades, etc. */}
      </div>
    )
  }