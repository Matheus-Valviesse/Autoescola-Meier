import CoursesSection from "./components/CoursesSection"
import Footer from "./components/Footer"
import GoogleReviews from "./components/GoogleReviews"
import Header from "./components/Header"
import Hero from "./components/Hero"
import WhatsAppBanner from "./components/whatsAppbanner"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {

  return (
    <>
    <Header/>
      <div id="inicio">
        <Hero />
      </div>

      <div id="planos">
        <CoursesSection />
      </div>

      <WhatsAppBanner/>

      <div id="diferenciais"> 
        <WhyChooseUs/>
      </div>

      <div id="depoimentos">
        <GoogleReviews/>
      </div>
 
      <Footer/>
    </>
  )
}

export default App

