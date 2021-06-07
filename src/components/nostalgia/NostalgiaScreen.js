import { ContactUs } from "../ContactUs"
import { Features } from "../Features"
import { Footer } from "../Footer"
import { Gallery } from "../Gallery"
import { Header } from "../Header"
import { Main } from "../Main"
import { Testimonials } from "../Testimonials"

export const NostalgiaScreen = () => {
  return (
    <div className="nostalgia__container">
      <div className="nostalgia__container-content">
        <Header />

        <Main />

        <Gallery />

        <Features />

        <Testimonials />

        <ContactUs />

        <Footer />

      </div>
    </div>
  )
}