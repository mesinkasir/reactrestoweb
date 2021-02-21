import React from "react";
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div className="rounded shadow embed-responsive embed-responsive-16by9">
        <iframe
          src="https://www.youtube.com/embed/3vM0U8wLu3Y"
          title="Sip resto web apps mesin kasir online restoran cafe rumah makan"
          allowfullscreen
        />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 p-3">
          <p>Hubungi Kami untuk informasi dan order</p>
          <p>
            WhatsApp : +6285646104747
            <br />
            Call Us : +6285331361404
            <br />
            Email : axcora@gmail.com
          </p>
        </div>
        <div className="col-12 col-md-6 p-3">
          <p>
            Showroom <br />
            Ruko Pasar Wisata Juanda <br />
            Blok Q.05-07 <br /> Sidoarjo - East Java
            <br />
            Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
