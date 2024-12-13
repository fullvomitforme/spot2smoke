import { Search } from "@/components/search"
import { SpotTable } from "@/components/spot-table"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <header className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-emerald-700">Spot2Smoke</h1>
            <p className="text-muted-foreground">
              Outdoor spots around the world handpicked by the internet that are perfect for a smoke break.
            </p>
          </div>
          <Button>Submit a spot</Button>
        </div>
        <Search />
      </header>
      <SpotTable />
    </main>
  )
}

