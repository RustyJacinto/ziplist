const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const newList = [];
  let max = 0;
  if (list1.length < list2.length) {
    max = list1.length;
  } else {
    max = list2.length;
  }
  for (let i = 0; i < max; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  const newList = _.zip(list1, list2);
  return _.flatten(newList);
}

console.log(zipListTheSimpleWay(testList1, testList2));