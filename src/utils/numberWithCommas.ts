export function numberWithCommas(x: number) {
  return Number(x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
}
