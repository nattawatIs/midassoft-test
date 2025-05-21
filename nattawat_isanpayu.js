const portals = [
  { location: 55, destination: 38 },
  { location: 14, destination: 35 },
  { location: 91, destination: 48 },
  { location: 30, destination: 8 },
  { location: 31, destination: 70 },
  { location: 63, destination: 83 },
  { location: 3, destination: 39 },
  { location: 47, destination: 86 },
  { location: 71, destination: 93 },
  { location: 21, destination: 4 },
  { location: 44, destination: 65 },
  { location: 96, destination: 66 },
  { location: 79, destination: 42 },
  { location: 87, destination: 54 },
  { location: 90, destination: 119 },
  { location: 120, destination: 149 },
  { location: 150, destination: 179 },
  { location: 180, destination: 200 },
];

const quickestPath = (portals) => {
  const portalMap = {};
  for (const { location, destination } of portals) {
    portalMap[location] = destination;
  }

  let position = 1;
  let turns = 0;

  while (position < 200) {
    let bestPortal;
    // ลองทุกจำนวนก้าว และหา Portal ที่ดีที่สุด
    for (let step = 1; step <= 11; step++) {
      const next = position + step;

      if (portalMap[next]) {
        const portal = { location: next, destination: portalMap[next] };
        // เงื่อนไขคือระยะทางที่วาร์ปมากที่สุด หรือว่า location น้อยกว่าแต่วาร์ปไกลเท่ากัน
        if (
          !bestPortal ||
          portal.destination - portal.location >
            bestPortal.destination - bestPortal.location ||
          (portal.destination - portal.location ===
            bestPortal.destination - bestPortal.location &&
            portal.location < bestPortal.location)
        ) {
          bestPortal = portal;
        }
      }
    }

    if (bestPortal) {
      position = bestPortal.destination;
    } else {
      position += 11;
    }

    turns++;
  }

  return turns;
};

console.log("turns:", quickestPath(portals));
