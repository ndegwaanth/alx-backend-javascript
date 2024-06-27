export default function returnHowManyArguments(...args) {
  let count = 0;

  for (count; count < args.length;) {
    count += 1;
  }
  return count;
}
