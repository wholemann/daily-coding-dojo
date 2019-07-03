class HashMap {
  constructor() {
      this.map = [];
  }

  put(key, value) {
      this.map[key] === undefined ? this.map[key] = 1 : this.map[key]++;
  }

  remove(key) {
      this.map[key]--;
  }

  get(key) {
      return this.map[key];
  }

  getAll() {
      return this.map;
  }
}

function solution(participant, completion) {
  const hm = new HashMap();
  let answer;
  participant.forEach((v, i) => hm.put(v, i));
  completion.forEach(v => hm.remove(v));    
  answer = participant.filter(v => hm.get(v) === 1)[0];

  return answer;
}