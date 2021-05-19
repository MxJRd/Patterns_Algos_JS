function sameFrequency(n1, n2) {
  n1 = `${n1}`;
  n2 = `${n2}`;
  const freqCounter1 = {},
        freqCounter2 = {};
  for(const num of n1) {
    freqCounter1[num] = (freqCounter1[num] || 0) + 1;
  }
  for(const num of n2) {
    freqCounter2[num] = (freqCounter2[num] || 0) + 1;
  }
  for(const key in freqCounter1) {
    if(freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}