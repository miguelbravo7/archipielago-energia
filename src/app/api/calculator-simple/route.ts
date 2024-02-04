import { NextResponse, NextRequest } from "next/server";
import * as z from "zod";

const schema = z.object({
  panels: z.coerce.number().positive({
    message: "Minimum of at least 1 panel.",
  }),
  battery: z.boolean().default(true),
});

export async function POST(request: NextRequest) {
  const data = schema.parse(await request.json());
  console.log(data);

  let materialCost = 0;
  // panels
  materialCost += data.panels * 150;

  // inverter
  if (data.panels < 7) {
    materialCost += 1200;
  } else if (data.panels < 13) {
    materialCost += 1800;
  } else {
    materialCost += 3000;
  }

  // battery
  if (data.battery) {
    materialCost += ((data.panels * 450) / 3500) * 1000;
  }

  // cables
  materialCost += 2 * data.panels * 2.5;

  // mount
  materialCost += (data.panels / 2) * 100;

  // labor
  let laborCost = materialCost / 2;

  return NextResponse.json({
    price: Math.round(materialCost + laborCost + 150),
  });
}
