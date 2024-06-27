export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // This task variable is confined to the if block
    const task2 = false; // This task2 variable is confined to the if block
  }

  return [task, task2];
}