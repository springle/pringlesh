import './App.css';
import * as React from 'react';
import Terminal from 'terminal-in-react';

class App extends React.Component {
  public showMsg = () => 'Hello World'

  public render() {
    return (
      <div
        style={{
          alignItems: "center",
          display: "flex",
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
            'about': () => 'TODO: write life story',
            'contact': () => 'email: sam@pringle.sh',
          }}
          descriptions={{
            'show': 'show the startup message',
            'clear': 'clear the screen',
            'help': 'show this help message',
            'about': 'learn about me',
            'contact': 'get in touch with me',
          }}
          hideTopBar={true}
          msg='Welcome! My name is Sam Pringle. Try typing `help` to see what commands are available.'
          prompt='lightgreen'
          promptSymbol='$'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1.5em" }}
        />
      </div>
    );
  }
}

export default App;
