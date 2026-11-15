import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        
        <div className="resume-window">
          {/* <iframe> tag kisi doosri website, webpage, PDF ya external content ko apni current webpage ke andar display (embed) karne ke liye use hota hai. */}
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume

