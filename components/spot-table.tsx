import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// This is sample data - replace with your actual data source
const spots = [
  {
    id: "01",
    name: "Central Park Overlook",
    city: "New York",
    country: "USA",
    feature: "Scenic",
    coordinates: "40.7829,-73.9654"
  },
  {
    id: "02",
    name: "Vondelpark Corner",
    city: "Amsterdam",
    country: "Netherlands",
    feature: "Nature",
    coordinates: "52.3579,4.8686"
  },
  {
    id: "03",
    name: "Parc des Buttes-Chaumont",
    city: "Paris",
    country: "France",
    feature: "Scenic",
    coordinates: "48.8789,2.3824"
  },
]

export function SpotTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Spot</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Notable Feature</TableHead>
            <TableHead className="text-right">Map</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spots.map((spot) => (
            <TableRow key={spot.id}>
              <TableCell className="font-medium">{spot.id}</TableCell>
              <TableCell>{spot.name}</TableCell>
              <TableCell>{spot.city}</TableCell>
              <TableCell>{spot.country}</TableCell>
              <TableCell>{spot.feature}</TableCell>
              <TableCell className="text-right font-mono text-sm">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${spot.coordinates}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {spot.coordinates}
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

