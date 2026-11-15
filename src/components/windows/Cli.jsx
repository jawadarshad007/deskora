import React from 'react'
import MacWindow from './MacWindow'
import ReactTerminal from 'react-console-emulator'
import './Cli.scss'

const Terminal = ReactTerminal.default || ReactTerminal



const commands = {
  about: {
    description: 'Learn about Jawad and his development journey.',
    usage: 'about',
    fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.'
  },

  projects: {
    description: 'Explore featured projects and personal work.',
    usage: 'projects',
    fn: () => 'Featured projects:\n- Deskora: A macOS-inspired portfolio\n- TaskFlow: A task management application\n- Invesmal: A student-investor platform'
  },

  skills: {
    description: 'View technical skills and technologies.',
    usage: 'skills',
    fn: () => `Frontend: React, JavaScript, HTML, CSS, Sass
Backend: Node.js, Express
Databases: MongoDB, MySQL
Tools: Git, GitHub, Vite`
  },

  contact: {
    description: 'Get contact details and connect with Jawad.',
    usage: 'contact',
    fn: () => `Email: jawadarshad.dev@gmail.com
Location: Lahore, Pakistan`
  },

  resume: {
    description: 'Learn how to view the professional resume.',
    usage: 'resume',
    fn: () => 'Open the Resume window from the dock to view the resume.'
  },

  echo: {
    description: 'Print any custom text in the terminal.',
    usage: 'echo <message>',
    fn: (...args) => args.join(' ')
  },

  

}




const Cli = () => {
  return (
    <MacWindow>
      <div className="cli-window">
       
<Terminal
    commands={commands}
    
welcomeMessage={`
╭──────────────────────────────────────────────╮
│                                              │
│       Welcome to Jawad's Terminal!           │
│                                              │
│       Full-Stack Web Developer               │
│       React.js | Node.js | MongoDB           │
│                                              │
│       Type 'help' to explore commands.       │
│                                              │
╰──────────────────────────────────────────────╯

  SYSTEM: Deskora Portfolio Terminal
  STATUS: Ready
  USER: jawadarshad

  Available Commands:
  ${Object.keys(commands).join(' | ')}

  Tip: Try 'about' to know more about me.
`}

    promptLabel="jawadarshad:~$"

    style={{
        backgroundColor: "transparent",
        color: "#d4d4d4",
        height: "100%"
    }}

    contentStyle={{
        backgroundColor: "transparent",
        padding: "15px"
    }}

    promptLabelStyle={{
        color: "#22c55e",
        fontWeight: "bold"
    }}

    inputTextStyle={{
        color: "#ffffff",
        caretColor: "#22c55e"
    }}

    messageStyle={{
        color: "#d4d4d4",
        fontSize: "14px"
    }}
/>

      </div>
    </MacWindow>
  )
}

export default Cli