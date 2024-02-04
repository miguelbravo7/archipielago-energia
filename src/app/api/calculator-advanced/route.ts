import { NextResponse, NextRequest } from "next/server";
import * as z from "zod";

const schema = z.object({
  panels: z.coerce.number().positive({
    message: "Minimum of at least 1 panel.",
  }),
  gridType: z.enum(["mono-phase", "three-phase"], {
    required_error: "You need to select a grid type.",
  }),
  inverterType: z.enum(["isolate", "hybrid", "power-connected"], {
    required_error: "You need to select an inverter type.",
  }),
  battery: z.enum(["lead", "lithium", "agm", "gel"]),
  mount: z.enum(["ground", "roof"], {
    required_error: "You need to select a mount type.",
  }),
});

export async function POST(request: NextRequest) {
  const data = schema.parse(await request.json());

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
  switch (data.battery) {
    case "lead":
      materialCost += ((350 * data.panels) / 3500) * 1000;
      break;
    case "lithium":
      materialCost += ((1000 * data.panels) / 3500) * 1000;
      break;
    case "agm":
      materialCost += ((350 * data.panels) / 3500) * 1000;
      break;
    case "gel":
      materialCost += ((350 * data.panels) / 3500) * 1000;
      break;
  }

  // cables
  switch (data.gridType) {
    case "mono-phase":
      materialCost += 2 * data.panels * 2.5;
      break;
    case "three-phase":
      materialCost += 3 * data.panels * 2.5;
      break;
  }

  // mount
  switch (data.mount) {
    case "ground":
      materialCost += (data.panels / 2) * 100;
      break;
    case "roof":
      materialCost += (data.panels / 2) * 120;
      break;
  }

  // labor
  let laborCost = materialCost / 2;

  // protection
  let protectorCost = 150;
  if (data.gridType == "three-phase") {
    protectorCost = 300;
  }

  return NextResponse.json({
    price: Math.round(materialCost + laborCost + protectorCost),
  });
}
