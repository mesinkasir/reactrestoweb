import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Demo = () => {
  return (
    <div>
      <Helmet>
        <title>Demo Aplikasi restoran penjuan kasir si resto web app</title>
        <meta
          content="Demo Aplikasi toko penjuan kasir vpos web app"
          name="twitter:title"
        />
        <meta
          content="Demo Aplikasi toko penjuan kasir vpos web app"
          name="facebook:title"
        />
        <meta
          content="Demo Aplikasi toko penjuan kasir vpos web app"
          property="og:title"
        />
        <meta
          content="Demo Aplikasi toko penjuan kasir vpos web app"
          property="og:site_name"
        />
        <meta
          content="Demo Mesin kasir online vpos mudah digunakan dan dilengkapi dengan laporan stok, pendapatan omset,plus website modern terbaru all in one pada vpos web app."
          property="og:description"
        />
        <meta
          name="description"
          content="Demo Mesin kasir online vpos mudah digunakan dan dilengkapi dengan laporan stok, pendapatan omset,plus website modern terbaru all in one pada vpos web app."
        />
        <meta
          content="Demo Mesin kasir online vpos mudah digunakan dan dilengkapi dengan laporan stok, pendapatan omset,plus website modern terbaru all in one pada vpos web app."
          property="facebook:description"
        />
        <meta
          content="Demo Mesin kasir online vpos mudah digunakan dan dilengkapi dengan laporan stok, pendapatan omset,plus website modern terbaru all in one pada vpos web app."
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
          src="https://www.youtube.com/embed/DcmU8HYJ8yE"
          title="Demo mesin kasir restoran online"
          allowFullScreen
        />
      </div>
      <p>
        Demo video penggunaan sip resto web app, aplikasi restoran online plus
        website restoran.
      </p>
      <p>
        Cek demo mobile waiters resto pos{" "}
        <Link to="/mobilepos">masuk sini →</Link>
      </p>
      <div className="text-center">
        <Link to="/website" className="btn btn-info rounded">
          Cek Website
        </Link>
      </div>
    </div>
  );
};
export default Demo;
