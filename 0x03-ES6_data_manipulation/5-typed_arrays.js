export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView for the ArrayBuffer
  const view = new DataView(buffer);
  
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  
  // Set the Int8 value at the specified position
  view.setInt8(position, value);
  
  // Return the DataView
  return view;
}