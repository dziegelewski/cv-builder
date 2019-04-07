import { R, TS, V, N, PY } from './technologiesTags';

const advanced = [
    `**JavaScript (ES6+)`,
    `${R}*React, Redux* (+ styled components,  redux saga etc.)`,
	`${V}**Vue, Vuex`,
    `HTML5, CSS3 (e.g. Grid API), Sass`,
    `Git`,
    `Twig`,
];

const good = [
    `${TS}**Typescript`,
    `${N}**Node.js`,
    `MobX`,
    `Rx.js`,
    `Webpack`,
    `Gulp`,
    `ESlint`,
    `jQuery`,
];

const basic = [
    `${PY}*Python*`,
    `MongoDB, Mongoose`,
    `Express.js`,
    `WebSockets`,
    `Gatsby.js`,
    `GraphQL`,
    `AWS (fundamentals, Lambda)`,
    `Docker`,
    `Linux`,
];

const skills = {
    advanced,
    good,
    basic
};

export default {
  "homePage": 'https://stendhal.eu',
  "githubPage": 'https://github.com/sirstendhal',
  skills,
}