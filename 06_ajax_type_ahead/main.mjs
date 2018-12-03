import debounce from './debounce.mjs';

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];
(async () => {
  try {
    const blob = await fetch(endpoint);
    cities = await blob.json();
  } catch (error) {
    console.error(error);
  }
})();

const searchForm = document.forms['search-form'];
searchForm.elements['search-bar'].addEventListener(
  'input',
  debounce(event => {
    const trimmedUserInput = event.target.value.trim();

    const escapedUserInput = trimmedUserInput.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&'
    );
    const regexp = new RegExp(escapedUserInput, 'gi');

    const highlightSpan = document.createElement('span');
    highlightSpan.className = 'highlight';
    highlightSpan.append(trimmedUserInput);

    const liNodes = cities
      .filter(place => place.city.match(regexp) || place.state.match(regexp))
      .reduce((result, place) => {
        const cityStateNodes = `${place.city}, ${place.state}`
          .split(regexp)
          .reduce((nodes, str, idx) => {
            if (idx > 0) {
              return [...nodes, highlightSpan.cloneNode(true), str];
            }
            return [...nodes, str];
          }, []);

        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.append(...cityStateNodes);

        const populationSpan = document.createElement('span');
        populationSpan.className = 'population';
        populationSpan.append(
          Number.parseInt(place.population, 10).toLocaleString()
        );

        const li = document.createElement('li');
        li.append(nameSpan, populationSpan);

        return [...result, li];
      }, []);

    const suggestions = searchForm.querySelector('.suggestions');
    const newSuggestions = suggestions.cloneNode(false);
    newSuggestions.append(...liNodes);
    suggestions.parentNode.replaceChild(newSuggestions, suggestions);
  })
);
