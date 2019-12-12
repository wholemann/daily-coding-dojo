const solution = (n, stages) => 
  Array.from({ length: n }, (_, i) => i + 1)
    .map(stage => [stage, failureRates(stage, stages)])
    .sort((a, b) => a[1]===b[1] ? a[0] - b[0] :  b[1] - a[1])
    .map(v => v[0]);

const failureRates = (i, stages) => 
  stages.filter(s => s === i).length / (stages.filter(s => s >= i).length || 1);
