import './App.css';
import * as React from 'react';
import Terminal from 'terminal-in-react';

function contact () {
  window.open('mailto:sam@pringle.sh')
  return 'Your email client will open in a separate window.'
}

function getResume() {
  window.open('https://storage.googleapis.com/sampringle/resume.pdf')
  return 'Resume should open in another tab.'
}

let about: string = `
  My name is Sam Pringle. I am a senior studying Computer Science at the
  University of California, Berkeley. Previously, I have worked as a
  Software Engineering Intern at Bloomberg, Mesosphere, and Skillshare.
  Currently, I am seeking full-time employment as a Software Engineer.

  Most of my professional experience revolves around Software Infrastructure
  and Distributed Systems, as I love working on those kinds of problems. In my
  free time I play piano and chess, and I also work on a number of personal
  programming projects (see the "projects" command for details). I also volunteer
  for a Archer International Corporation, a non-profit building technology for
  human security (see https://archerimpact.com).

  If you are interested in working with me, please get in touch! Run the "contact"
  command to send me an email.
`;

let projects: string = `
1. Snake Royale (type "snakes")
2. SC2 Barcode Scanner (type "starcraft")
3. DC/OS Tensorflow (type "tensorflow")
`;

let projects_snakes: string = `
My brother and I built a real-time, online, multi-player version
of the classic "snake" game. Built with Scala / Akka Streams on
the backend and React / TypeScript on the frontend, a tiny server
can easily manage hundreds of concurrent players. We use Kubernetes
for the infrastructure, and code changes are automatically built / deployed
by TravisCI.

This project is open-source, and the game is live. Please check out the links
below to see the code / play the game.

Relevant Links:
- https://github.com/tfreshindustries/snake-royale
- http://snakes.gg
`

let projects_starcraft: string = `
In a videogame called Starcraft II, professional players often
create "barcode" accounts where their names are replaced with
strings of l's (llllllllll). My brother and I created a tool
which analyzes replay data of matches against these barcode
accounts. It compares hotkey patterns to a database of professional
games to confidently determine which professional player is
hiding behind that barcode.

Relevant Links:
- https://github.com/joechip504/sc2-barcode-scanner
`

let projects_tensorflow: string = `
While working at Mesosphere, I had the opportunity to develop
a DC/OS Package for one-click deployments of distributed
TensorFlow jobs. Although the package is closed-source, there are
several open-source tools and examples that I also worked on.

Relevant Links:
- https://mesosphere.github.io/dcos-tensorflow/
- https://mesosphere.com/blog/tensorflow-gpu-support-deep-learning/
- https://github.com/dcos-labs/dcos-tensorflow-tools
`

class App extends React.Component {
  public render() {
    return (
      <div
        style={{
          alignItems: "center",
          height: "100vh",
          justifyContent: "center"
        }}
      >
        <Terminal
          allowTabs={false}
          backgroundColor='black'
          barColor='black'
          color='white'
          commands={{
            'about': () => about,
            'contact': () => contact(),
            'projects': () => projects,
            'resume': () => getResume(),
            'snakes': () => projects_snakes,
            'starcraft': () => projects_starcraft,
            'tensorflow': () => projects_tensorflow,
          }}
          descriptions={{
            'show': false,
            'clear': false,
            'help': false,
            'about': 'READ about me.',
            'contact': 'SEND me an email.',
            'projects': 'VIEW some of my work.',
            'resume': 'LOAD my resume.',
            'snakes': false,
            'starcraft': false,
            'tensorflow': false,
          }}
          hideTopBar={false}
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1.0em" }}
          msg='Welcome! My name is Sam Pringle. Try typing "help" to see what commands are available.'
          prompt='green'
          promptSymbol='$'
        />
      </div>
    );
  }
}

export default App;
