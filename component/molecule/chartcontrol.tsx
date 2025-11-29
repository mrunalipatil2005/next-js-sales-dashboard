"use client";

import Button from "../atom/button";

type Props = {
  refresh: () => void;
};

export default function ChartControls({ refresh }: Props) {
  return (
    <div className="flex gap-3 mb-4">
      <Button label="Refresh Data" onClick={refresh} />
    </div>
  );
}