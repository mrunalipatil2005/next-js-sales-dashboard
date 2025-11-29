import { salesData } from "./mockData";

export function getSales() {
  // Return a fresh copy so React sees changes and to simulate refreshed data.
  // Add a small random delta to each value to make the chart update visibly.
  return salesData.map((d) => ({
    month: d.month,
    value: Math.max(0, d.value + Math.round(Math.random() * 20 - 10)),
  }));
}
