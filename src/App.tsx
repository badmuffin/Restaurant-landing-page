import Chef from "./components/Chef"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Newsletter from "./components/Newsletter"
import SpecialDishes from "./components/SpecialDishes"
import Testimonials from "./components/Testimonials"
import Welcome from "./components/Welcome"
const App = () => {
  return (
    <div>
      <Hero />
      <SpecialDishes />
      <Welcome />
      <Chef />
      <Testimonials />
      <Newsletter />
      <Footer />
      {/* for debugging, add routings and create sections based on the UI */}
    </div>

  )
}

export default App
