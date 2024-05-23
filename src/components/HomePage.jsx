import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import LogoSVG from "../../public/Assets/mile1-assets/logo.svg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/siparis-olustur");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(http://localhost:5173/public/Assets/mile1-assets/home-banner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          textAlign: "center",
          color: "white",
          paddingTop: "20px",
        }}
      >
        <img src={LogoSVG} alt="Logo" />
        <h1 className="main-title">
          KOD ACIKTIRIR <br /> PİZZA DOYURUR
        </h1>
        <button
          className="anasayfa-buton"
          data-cy="mainpage-button"
          onClick={handleButton}
        >
          ACIKTIM
        </button>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <a href="/">
              <img src="Assets\mile2-aseets\icons\1.svg" alt="Kore" />
              YENİ! Kore
            </a>
          </li>
          <li>
            <a href="/">
              <img src="Assets\mile2-aseets\icons\2.svg" alt="Pizza" />
              Pizza
            </a>
          </li>
          <li>
            <a href="/">
              <img src="Assets\mile2-aseets\icons\3.svg" alt="Burger" />
              Burger
            </a>
          </li>
          <li>
            <a href="/">
              <img src="Assets\mile2-aseets\icons\4.svg" alt="Kızartmalar" />
              Kızartmalar
            </a>
          </li>
          <li>
            <a href="/">
              <img src="Assets\mile2-aseets\icons\5.svg" alt="Fast Food" />
              Fast Food
            </a>
          </li>
          <li>
            <a href="/">
              <img src="Assets\mile2-aseets\icons\6.svg" alt="Gazlı İçecek" />
              Gazlı İçecek
            </a>
          </li>
        </ul>
      </nav>
      <main className="main-page">
        <section className="cards">
          <div className="card-1">
            <img src="Assets/mile2-aseets/cta/kart-1.png" alt="İlk Kart" />
            <div className="overlay-content">
              <h1 className="card-title">
                Özel <br /> Lezzetus
              </h1>
              <p className="card-text">Position Absolute Acı Pizza</p>
              <button onClick={handleButton} className="card-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="card-2">
            <img src="Assets\mile2-aseets\cta\kart-2.png" alt="İkinci Kart" />
            <div className="overlay-content">
              <h1 className="card-title">
                Hackhathlon <br />
                Burger Menu
              </h1>
              <button onClick={handleButton} className="card-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
          <div className="card-2">
            <img src="Assets\mile2-aseets\cta\kart-3.png" alt="İkinci Kart" />
            <div className="overlay-content">
              <h1 className="card-title">Çoooook hızlı npm gibi kurye</h1>
              <button onClick={handleButton} className="card-button">
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </section>
        <section className="vitrin">
          <h3 className="secondary-title">en çok paketlenen menüler</h3>
          <h1 className="main-title">Acıktıran Kodlara Doyuran Lezzetler</h1>
          <div className="secondary-nav">
            <ul>
              <li>
                <a href="/">
                  <img src="Assets\mile2-aseets\icons\1.svg" alt="Kore" />
                  YENİ! Kore
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="Assets\mile2-aseets\icons\2.svg" alt="Pizza" />
                  Pizza
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="Assets\mile2-aseets\icons\3.svg" alt="Burger" />
                  Burger
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="Assets\mile2-aseets\icons\4.svg"
                    alt="Kızartmalar"
                  />
                  Kızartmalar
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="Assets\mile2-aseets\icons\5.svg" alt="Fast Food" />
                  Fast Food
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="Assets\mile2-aseets\icons\6.svg"
                    alt="Gazlı İçecek"
                  />
                  Gazlı İçecek
                </a>
              </li>
            </ul>
          </div>
          <div className="vitrin-cards">
            <div className="vitrin-card-container">
              <img src="Assets\mile2-aseets\pictures\food-1.png" alt="food-1" />
              <h4>Terminal Pizza</h4>
              <p>4.9 </p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
            <div className="vitrin-card-container">
              <img src="Assets\mile2-aseets\pictures\food-2.png" alt="food-1" />
              <h4>Position Absolute Acı Pizza</h4>
              <p>4.9 </p>
              <p>(928)</p>
              <p>85₺</p>
            </div>
            <div className="vitrin-card-container">
              <img src="Assets\mile2-aseets\pictures\food-3.png" alt="food-1" />
              <h4>useEffect Tavuklu Burger</h4>
              <p>4.9 </p>
              <p>(462)</p>
              <p>75₺</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
