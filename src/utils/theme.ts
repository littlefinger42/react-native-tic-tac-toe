const colors = {
  background: "#000",
  text: "#fff",
  square: {
    border: "#fff",
    active: "#899",
    inactive: "#000",
  },
};

const baseSize = 8;
const sizeByFactor = (factor: number) => factor * baseSize;
const sizes = {
  sizeByFactor,
  lvl0: sizeByFactor(0.5), // 0.5 * 8px = 4px;
  lvl1: sizeByFactor(1), // 1 * 8px = 8px;
  lvl2: sizeByFactor(2), // 2 * 8px = 16px;
  lvl3: sizeByFactor(3), // 24px;
  lvl4: sizeByFactor(4), // 32px;
  lvl5: sizeByFactor(5), // 40px;
  lvl6: sizeByFactor(6), // 48px;
  lvl7: sizeByFactor(7), // 56px;
  lvl8: sizeByFactor(8), // 64px;
  lvl9: sizeByFactor(9), // 72px;
  lvl10: sizeByFactor(10), // 80px;
};

export { colors, sizes };
