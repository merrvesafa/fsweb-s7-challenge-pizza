import React from "react";
import { useNavigate } from "react-router-dom";

const Success = ({ orderData }) => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/");
  };

  if (!orderData) {
    return <p>Sipariş verileri eksik veya hatalı.</p>;
  } else {
    console.log("SUCCESS DATA:", orderData);
  }

  const { isimSoyisim, boyut, hamur, malzemeler, siparisNotu, miktar } =
    orderData;

  return (
    <>
      <header className="success-page">
        <img src={LogoSVG} alt="Logo" />
        <section className="siparis-alindi">
          <h3 className="secondary-title">lezzetin yolda</h3>
          <h1 className="main-title">SİPARİŞ ALINDI</h1>
        </section>
      </header>
      <main className="success-page">
        <section className="siparis-alindi-info">
          <h2>Position Absolute Acı Pizza</h2>
          <section className="siparis-form-info">
            <div>
              <p>İsim Soyisim: </p> <p> {isimSoyisim}</p>
            </div>
            <div>
              <p>Boyut: </p> <p> {boyut}</p>
            </div>
            <div>
              <p>Hamur: </p> <p> {hamur}</p>
            </div>
            <div>
              <p>Ek Malzemeler: </p> <p> {malzemeler.join(", ")}</p>
            </div>
            <div>
              <p>Sipariş Notu: </p> <p> {siparisNotu}</p>
            </div>
          </section>
        </section>
        <section className="siparis-odeme-info">
          <h2>Sipariş Toplamı</h2>
          <div>
            <p>Seçimler</p> <p>{malzemeler.length * 5} ₺</p>
          </div>
          <div>
            <p>Toplam</p> <p>{85.5 * miktar + malzemeler.length * miktar} ₺</p>
          </div>
        </section>
        <button id="success-buton" onClick={handleButton}>
          Anasayfaya Dön
        </button>
      </main>
    </>
  );
};

export default Success;
