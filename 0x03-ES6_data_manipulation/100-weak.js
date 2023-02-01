export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.get(endPoint) === undefined) {
    weakMap.set(endPoint, 0);
  }
  weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  if (weakMap.get(endPoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
