import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Website = () => {
  return (
    <div>
      <Helmet>
        <title>Pembuatan website restoran rumah makan cafe online</title>
        <meta
          content="Pembuatan website restoran rumah makan cafe online"
          name="twitter:title"
        />
        <meta
          content="Pembuatan website restoran rumah makan cafe online"
          name="facebook:title"
        />
        <meta
          content="Pembuatan website restoran rumah makan cafe online"
          property="og:title"
        />
        <meta
          content="Pembuatan website restoran rumah makan cafe online"
          property="og:site_name"
        />
        <meta
          content="Nikmati aplikasi restoran cafe rumah makan include Pembuatan website restoran rumah makan cafe online all in one web app resto cafe."
          property="og:description"
        />
        <meta
          name="description"
          content="Nikmati aplikasi restoran cafe rumah makan include Pembuatan website restoran rumah makan cafe online all in one web app resto cafe."
        />
        <meta
          content="Nikmati aplikasi restoran cafe rumah makan include Pembuatan website restoran rumah makan cafe online all in one web app resto cafe."
          property="facebook:description"
        />
        <meta
          content="Nikmati aplikasi restoran cafe rumah makan include Pembuatan website restoran rumah makan cafe online all in one web app resto cafe."
          name="twitter:description"
        />
        <meta
          content="https://1.bp.blogspot.com/-oolLYoq-j5Q/X93ym6YAD8I/AAAAAAAALus/NZ7SFbMNI543KZaqFx129dX0ST4MBQAQACLcBGAsYHQ/w1200-h630-p-k-no-nu/TOUCHSCREEN3.png"
          property="og:image"
        />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />

        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta
          content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
          name="facebook:image"
        />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta
          content="https://res.cloudinary.com/hockeycorp/image/upload/v1568369085/touchscreen_yonrpa.jpg"
          name="twitter:image"
        />
        <meta content="index, follow" name="robots" />
      </Helmet>
      <h1>Demo Video</h1>
      <div className="rounded shadow embed-responsive embed-responsive-16by9">
        <iframe
          src="https://www.youtube.com/embed/vqbeeSLq-Fo"
          title="pembuatan website restoran cafe rumah makan online"
          allowFullScreen
        />
      </div>
      <p>
        Demo video website restoran cafe rumah makan include dengan aplikasi
        restoran all in one ready untuk online kan usaha kuliner mu.
      </p>
      <p>
        Cek demo mobile waiters resto pos{" "}
        <Link to="/mobilepos">masuk sini →</Link>
      </p>
      <div className="text-center">
        <Link to="/contact" className="btn btn-info rounded">
          Contact Kami
        </Link>
      </div>
    </div>
  );
};
export default Website;
