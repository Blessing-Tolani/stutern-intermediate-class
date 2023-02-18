// Question 3
function getSubjectPerClass(classGroup) {
  if (classGroup === 'Science') {
    return 'Physics, Chemistry, Biology, Technical Drawing';
  } else if (classGroup === 'Social Science') {
    return 'Accounting, Commerce, Marketing, Geography';
  } else if (classGroup === 'Arts') {
    return 'Government, Economics, Literature, History';
  } else {
    return 'English, Mathematics';
  }
}

const bolatitoSubjects = getSubjectPerClass('Arts');
console.log(bolatitoSubjects);

// Question 5
const nearestPowerOfTwo = (num) => {
  let base = 0;
  for (let i = num; i >= 1; i--) {
    // If i is a power of 2
    if ((i & (i - 1)) == 0) {
      base = i;
      break;
    }
  }
  return base;
};

const num = 34;
console.log(
  `“The number ${nearestPowerOfTwo(num)} is the power of 2 nearest to ${num}“`
);
