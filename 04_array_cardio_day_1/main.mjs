/* eslint-disable no-console */
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(({ year }) => year >= 1500 && year < 1600);

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(({ first, last }) => `${first} ${last}`);

console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = [...inventors].sort((a, b) => a.year - b.year);

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce(
  (total, { year, passed }) => total + (passed - year),
  0
);

console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = [...inventors].sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

document.querySelector('iframe').addEventListener('load', event => {
  // Can not access iframe's document object, because CORS
  // DOMException: Blocked a frame with origin "http://127.0.0.1:5500" from accessing a cross-origin frame.
  try {
    const wikiPageDocument = event.target.contentWindow.document;
    const categoryLinks = wikiPageDocument.querySelectorAll('.mw-category a');
    const de = [...categoryLinks]
      .map(link => link.textContent)
      .filter(streetName => streetName.includes('de'));

    console.table(de);
  } catch (error) {
    console.warn(error);
  }
});

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = [...people].sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast > bLast ? 1 : -1;
});

console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'pogostick'
];

const transportation = data.reduce(
  (result, item) => ({
    ...result,
    [item]: (result[item] || 0) + 1
  }),
  {}
);

console.table(transportation);
