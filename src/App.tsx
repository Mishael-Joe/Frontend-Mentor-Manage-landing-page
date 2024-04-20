import './App.css'
import AboutManage from './components/aboutManage'
import FooterMobile from './components/footerMobile'
import Header from './components/header'
import Navbar from './components/navbar'
import Review from './components/review'
import YourTeam from './components/yourTeam'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <AboutManage />
      <Review />
      <YourTeam />
      <FooterMobile />
    </>
  )
}

export default App
