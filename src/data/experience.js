import { R, TS, V, N, PY } from './technologiesTags';

export default [
  {
    timespan: `06.2017 - now`,
    company: {
      name: `Code Monastery`,
      description: `software house`,
      origin: `Cracow`
    },
    position: `Full-stack developer (${R}*React*, ${N}*Node.js*, ${PY}*Python*)`,
    projects: [
      {
        title: "Car Sharing App",
        info: [
          `Working on an enterprise app together with 50+ devs`,
          `Focusing on front-end part of the app - writing ${R}*React* with ${TS}*Typescript*`,
          `Doing small backend tasks with ${PY}*Python* from time to time`
        ]
      },
      {
        title: "Banking Webapp",
        info: [
          `Working with a small, well organized JS developers team - on both frontend and backend side`,
          `Using technologies such as: ${R}*React*, *Redux*, *Scss*`,
          `On backend: ${N}*Node.js*, Nest.js, *Rx.js*, Azure, Docker`,
          `With a help of Scrum, Git, Jira, GitLab`,
          `Writing e2e tests using *Cypress*`,
        ]
      },
      {
        title: "Code Monastery Website",
        info: [
          'Additional project - maintaining company page written in *vanilla JavaScript*'
        ]
      }
    ],
  },
  {
    timespan: `08.2015 - 06.2017`,
    company: {
      name: `Knilbow`,
      description: `bookstore`,
      origin: `Cracow`
    },
    position: `Front-end developer (${V}*Vue*)`,
    info: [
      `Developing the front-end layer of a web portal and mobile application`,
      `Writting code in ${V}*Vue* and sometimes even in ${PY}*Python*`,
      `Working on an independent position in Scrum, using *Git*, *Jira*, *Bitbucket*`,
      `Cooperating with a team of Python back-end develoers, UX designer, tester`,
    ]
  },
]