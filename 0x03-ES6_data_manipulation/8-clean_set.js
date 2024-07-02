export default function cleanSet(set, startString) {
  const filteredValues = [];

  set.forEach(value => {
    if (value.startsWith(startString)) {
      const suffix = value.substring(startString.length);
      filteredValues.push(suffix);
    }
  });

  return filteredValues.join('-');
}
