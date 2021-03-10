import React from "react";

import "leaflet/dist/leaflet.css";
import { useForm } from "@formcarry/react";

import Typed from "react-typed";

import "assets/css/App.css";

function MyFormcarry() {
  // Call the `useForm` hook in your function component

  const { state, submit } = useForm({
    id: "gNFpbdCdkO",
  });

  // Success message

  if (state.submitted) {
    return (
      <div>
        <section id="contact1">
          <h1 className="section-header">KONTAKT</h1>
          <h3 className="sent-mail">
            Hvala vam! Zaprimili smo vaš upit, <br />
            te ćemo vam se javiti što prije
          </h3>
          <div className="contact-wrapper">
            <form className="form-horizontal" onSubmit={submit}>
              <div className="field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="name@domain"
                />
                <label htmlFor="email">E-Mail</label>
              </div>
              <div className="field">
                <textarea
                  id="msg"
                  rows="4"
                  name="msg"
                  placeholder="Ukratko nam objasnite..."
                ></textarea>
                <label htmlFor="msg">Vaša Poruka</label>
              </div>

              <button className="button" type="submit">
                Send
              </button>
            </form>
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">
                      Vrbnik , Novo Naselje 18
                    </span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:022 555-2368" title="Give me a call">
                        (022) 555-2368
                      </a>
                    </span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a href="mailto:#" title="Send me an email">
                        govrbnik@net.hr
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <div className="copyright">&copy; SVA PRAVA PRIDRŽANA</div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <section id="contact1">
      <h1 className="section-header">KONTAKT</h1>
      <h3 className="contact-mail-text">
        Zatražite &nbsp;
        <Typed
          strings={["ponudu!", "infomraciju o vašoj ideji"]}
          typeSpeed={30}
          backSpeed={60}
          loop
        />
        <br /> Radujemo se potencijalnoj suradnji s Vama.
        <br />
        Pošaljite nam svoj upit.
      </h3>
      <div className="contact-wrapper">
        <form className="form-horizontal" onSubmit={submit}>
          <div className="field">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="name@domain"
            />
            <label htmlFor="email">E-Mail</label>
          </div>
          <div className="field">
            <textarea
              id="msg"
              rows="4"
              name="msg"
              placeholder="Ukratko nam objasnite..."
            ></textarea>
            <label htmlFor="msg">Vaša Poruka</label>
          </div>

          <div className="button">
            <button className="pulse" type="submit">
              Send
            </button>
          </div>
        </form>
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">
                  Vrbnik , Novo Naselje 18
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:022 555-2368" title="Give me a call">
                    (022) 555-2368
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    govrbnik@net.hr
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <div className="copyright">&copy; SVA PRAVA PRIDRŽANA</div>
        </div>
      </div>
    </section>
  );
}

export default MyFormcarry;
