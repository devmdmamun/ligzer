const About = () => {
  return (
    <div className="container">
      <section className="showSection">
        <div className="main-panel">
          <div className="left-panel">
            <h2>Ligzer - where every Otaku belongs! </h2>
            <p>
              <a href="https://www.ligzer.com">Ligzer</a> is an anime website,
              inspired by{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.anichart.net"
              >
                Anichart
              </a>{" "}
              and developed by{" "}
              <a
                target="_blank"
                rel="author noreferrer"
                href="https://www.devmdmamun.com"
              >
                Md Mamun Islam
              </a>
              . This website has been created for educational purposes. If you
              are here for anime information please visit{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.anichart.net"
              >
                Anichart
              </a>
              .
            </p>
            <button>
              <a
                target="_blank"
                rel="author noreferrer"
                href="https://www.devmdmamun.com"
              >
                Contact{" "}
              </a>{" "}
            </button>
          </div>
          <div className="right-panel">
            <div className="img-wrapper">
              <img src="/new.png" alt="ligzer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
