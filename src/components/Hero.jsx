
const Hero = () => {
    return (
        <>
         <section id="hero" className="noisy">
  <h1 className="title"> MINTED</h1>
  <img
    src="/images/hero-left-leaf.png"
    alt="left-leaf"
    className="left-leaf"
  />
  <img
    src="/images/hero-right-leaf.png"
    alt="right-leaf"
    className="right-leaf"
  />
  <div className="body">
    <div className="content">
      <div className="space-y-5 hidden md:block">
        <p>Refreshing. Natural. Unique.</p>
        <p className="subtitle">
          Taste the <br /> Essence of Nature
        </p>
      </div>

      <div className="view-cocktails">
        <p className="subtitle">
          Discover handcrafted drinks infused with fresh herbs,
          vibrant flavors, and a touch of creativity — made to refresh
          your soul.
        </p>
        <a href="#cocktails">Explore drinks</a>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default Hero