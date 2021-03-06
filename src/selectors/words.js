const getSubWords = (arr, count) => arr.slice(0, count);
export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, count) => {
  return getSubWords(getWords(state), count);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getFirstWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getSubWords(getWords(state).filter(word => {
    return word.includes(searchTerm);
  }), count);
};

// eslint-disable-next-line no-unused-vars
function selectorPerformance(fn) {
  const start = performance.now();
  const results = fn();
  console.log('PERFORMANCE', performance.now() - start);
  return results;
}

// eslint-disable-next-line no-unused-vars
function badSelector(words, searchTerm) {
  const filtered = [];
  for(let j = 0; j < words.length; j++) {
    if(!filtered.some(w => w === words[j]) && words[j].includes(searchTerm)) {
      filtered.push(words[j]);
    }
  }
  return filtered;
}
