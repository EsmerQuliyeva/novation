import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-container-detail">
        <h2>Bizimlə əlaqə</h2>
        <span>Mesaj göndər</span>
        <p>
          Novation ilə əlaqə saxlamaq üçün, suallarınızı və ya təkliflərinizi
          <br></br>
          bizə göndərə bilərsiniz, biz hər zaman sizə dəstək olmağa hazırıq.
        </p>
        <div className="contact-detail-input">
          <div className="contact-names">
            <div className="contact-name">
              <label>Ad</label>
              <input type="text" placeholder="Adınızı daxil edin" />
            </div>
            <div className="contact-name">
              <label>Soyad</label>
              <input type="text" placeholder="Soyadınızı daxil edin" />
            </div>
          </div>
          <div className="contact-single">
            <label>E-poçt</label>
            <input type="email" placeholder="E-poçtunuzu daxil edin" />
          </div>
          <div className="contact-single">
            <label>Mesajınız</label>
            <textarea placeholder="Mesajınızı bura daxil edin" />
          </div>
          <button>Daxil et</button>
        </div>
      </div>
      <div className="contact-map-detail">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178013.48473525443!2d49.690149090376366!3d40.39473700796155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YM!5e1!3m2!1sru!2saz!4v1747425121907!5m2!1sru!2saz"
            width="600"
            height="450"
            style={{ border: "0", borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map-frame"
          ></iframe>
        </div>
        <div className="follow-part">
          <h4>Bizi izləyin</h4>
          <p>Bizi izləyin və yeniliklərdən ilk Siz xəbərdar olun</p>
          <div className="contact-social-network-tools">
            <Link>
              <FaTwitter className="contact-social-network-tool" />
            </Link>
            <Link>
              <FaInstagram className="contact-social-network-tool" />
            </Link>
            <Link>
              <FaFacebook className="contact-social-network-tool" />
            </Link>
            <Link>
              <FaLinkedin className="contact-social-network-tool" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
