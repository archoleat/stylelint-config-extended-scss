/**
 * The asynchronous function `createLogicalGroup` creates a logical group
 * with specified properties and formatting rules.
 *
 * @param {string} groupName - The `groupName` parameter is a string that
 * represents the name of the logical group being created.
 *
 * @param {string[]} properties - The `properties` parameter in the
 * `createLogicalGroup` function is an array that contains the properties
 * or items that you want to group together under a logical group
 * with the specified `groupName`. These properties can be of any type or
 * structure, depending on your specific use case.
 */
const createLogicalGroup = async (groupName: string, properties: string[]) => ({
  groupName,
  properties,
  emptyLineBefore: 'always',
  noEmptyLineBetween: true,
  order: 'flexible',
});

export { createLogicalGroup };
