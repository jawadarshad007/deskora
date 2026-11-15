import React from 'react'
import MacWindow from './MacWindow'
import ReactTerminal from 'react-console-emulator'
import './Cli.scss'

const Terminal = ReactTerminal.default || ReactTerminal


const commands = {
 
  about: {
    description: 'Learn a little about the portfolio owner.',
    usage: 'about',
    fn: () => 'A passionate developer building thoughtful web experiences. (Replace this with your own bio.)'
  },
  projects: {
    description: 'Show a few featured projects.',
    usage: 'projects',
    fn: () => 'Featured projects:\n- Project One: A creative web app\n- Project Two: A useful productivity tool\n(Add your own projects here.)'
  },
  skills: {
    description: 'Display the portfolio owner\'s skills.',
    usage: 'skills',
    fn: () => 'Skills: JavaScript, React, HTML, CSS (Edit this list to match your skills.)'
  },
  contact: {
    description: 'Show contact information.',
    usage: 'contact',
    fn: () => 'Get in touch: hello@example.com (Replace with your email or preferred contact link.)'
  },
  resume: {
    description: 'Show how to view the resume.',
    usage: 'resume',
    fn: () => 'Open the Resume window from the dock to view the resume.'
  },
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  }
}

const Cli = () => {
  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`Welcome to the portfolio terminal!\nAvailable commands: ${Object.keys(commands).join(', ')}\nType "help" for command descriptions.`}
          promptLabel={'jawadarshad:~$'}
          promptLabelStyle = {{color: "#00ff00"}}
        />
      </div>
    </MacWindow>
  )
}

export default Cli