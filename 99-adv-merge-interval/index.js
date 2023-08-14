function mergeIntervals(intervals, new_interval) {
  let n = intervals.length;

  if (n === 0) return [new_interval];
  let result = [];

  let new_interval_start = new_interval[0];
  let new_interval_end = new_interval[1];
  for (let i = 0; i < n; i++) {
    let interval_start = intervals[i][0];
    let interval_end = intervals[i][1];

    if (interval_end < new_interval_start) {
      result.push([interval_start, interval_end]);
    } else if (new_interval_end < interval_start) {
      result.push([new_interval_start, new_interval_end]);
      while (i < n) {
        result.push([intervals[i][0], intervals[i][1]]);
        i++;
      }
      return result;
    } else {
      new_interval_start = Math.min(new_interval_start, interval_start);
      new_interval_end = Math.max(new_interval_end, interval_end);
    }
  }

  result.push([new_interval_start, new_interval_end]);

  return result;
}

const res = mergeIntervals(
  [
    [1, 3],
    [6, 9],
  ],
  [2, 5]
);
console.log(res); // Output: 16
