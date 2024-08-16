// app/(dashboard)/trade/page.tsx
import TradingView from '@/app/components/TradingView'
import OrderBook from '@/app/components/OrderBook'
import TradeForm from '@/app/components/TradeForm'

export default function Trade() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Trade</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <TradingView />
        </div>
        <div>
          <OrderBook />
          <TradeForm />
        </div>
      </div>
    </div>
  )
}