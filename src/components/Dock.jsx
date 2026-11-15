import { resume } from 'react-dom/server'
import './dock.scss'

const Dock = ({windowState, setWindowState  }) => {
  return (
    <footer className='dock'>
        <div 
        onClick={()=> {
          // React provides the previous state as an argument to this function.
          setWindowState( state => ({...state, github:true}))
        }}
         className="icon github"><img src="/doc-icons/github.svg" alt="github-icon" /></div>

        <div 
        onClick={()=>{
          setWindowState(state => ({...state, note:true}))
        }}
        className="icon note"><img src="/doc-icons/note.svg" alt="note-icon" /></div>

        <div
        onClick={()=>{
          setWindowState(state => ({...state, resume:true}))
        }}
         className="icon pdf"><img src="/doc-icons/pdf.svg" alt="pdf-icon" /></div>

        <div
          onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?tab=mc&pli=1", "_blank")}}
         className="icon calendar"><img src="/doc-icons/calender.svg" alt="" /></div>

        <div
        onClick={()=>{
          setWindowState(state => ({...state, spotify:true}))
        }}
         className="icon spotify"><img src="/doc-icons/spotify.svg" alt="spotify-icon" /></div>

        <div
        onClick={()=> {window.open("mailto:jawadarshad.dev@gmail.com", "_blank")}}
         className="icon mail"><img src="/doc-icons/mail.svg" alt="mail-icon" /></div>
        
        <div
          onClick={()=> {window.open("https://www.linkedin.com/in/jawadarshaddev/", "_blank")}}
         className="icon link"><img src="/doc-icons/link.svg" alt="link-icon" /></div>

        <div
        onClick={()=>{
          setWindowState(state => ({...state, cli:true}))
        }}
         className="icon cli"><img src="/doc-icons/cli.svg" alt="cli-icon" /></div>
    </footer>
  )
}

export default Dock
     