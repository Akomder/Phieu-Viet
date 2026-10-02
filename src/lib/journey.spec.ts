import { describe, expect, it } from "vitest";
import { getStation, money, stations } from "./journey";

describe("journey data", () => {
  it("keeps the three featured stations available", () => {
    expect(stations).toHaveLength(3);
    expect(stations.map((station) => station.id)).toEqual(["phu-binh", "tan-khanh", "to-he"]);
  });

  it("finds a station by its shareable route id", () => {
    expect(getStation("tan-khanh")?.theme).toBe("EARTH");
    expect(getStation("missing-station")).toBeUndefined();
  });

  it("formats prices in Vietnamese currency", () => {
    expect(money(180000)).toContain("180.000");
    expect(money(180000)).toContain("₫");
  });
});
