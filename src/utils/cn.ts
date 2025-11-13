/**
 * Merges CSS classes.
 * @param classes The classes to merge.
 * @returns A space-separated string of merged classes.
 */
export const cn = (...classes: (string | undefined)[]) => {
  return classes.reduce((prev, curr) => (curr ? `${prev} ${curr}` : prev));
};
