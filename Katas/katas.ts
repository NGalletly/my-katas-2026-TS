interface vegetable {
  name: string;
  type: string;
  quantity: number;
}

export default function countVeg(inputArray: vegetable[], targetType: string) {
  let total: number = 0;
  inputArray.forEach((element) => {
    if (element.type === targetType) total += element.quantity;
  });
  return total;
}
