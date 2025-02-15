import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby green juice poke cred direct trade keytar. PBR&B distillery
            neutra, skateboard affogato tumeric salvia lomo mumblecore vegan
            chia. Chambray shoreditch yuccie raw denim solarpunk PBR&B
            gluten-free butcher typewriter pop-up mlkshk occupy XOXO selvage.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  )
}
export default Hero