import Navbar from './components/navbar/Navbar'
import Mainbody from './components/mainbody/Mainbody'
import ChatBot from './components/chatbot/ChatBot'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import About from './components/about/About'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className='body dark:bg-[#1B262C] '>
      <Navbar />
      <Mainbody />
      <ChatBot />
      <Skills />
      <Project />
      <About />
      <Footer />
    </div>
  )
}

export default App
