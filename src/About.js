import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="text-center">
      <Helmet>
        <title>Aplikasi Restoran online web app</title>
        <meta content="Aplikasi Restoran online web app" name="twitter:title" />
        <meta
          content="Aplikasi Restoran online web app"
          name="facebook:title"
        />
        <meta content="Aplikasi Restoran online web app" property="og:title" />
        <meta
          content="Aplikasi Restoran online web app"
          property="og:site_name"
        />
        <meta
          content="Mesin kasir restoran online , aplikasi kasir penjualan kasir restoran rumah makan cafe pembuatan website resto cafe apps."
          property="og:description"
        />
        <meta
          name="description"
          content="Mesin kasir restoran online , aplikasi kasir penjualan kasir restoran rumah makan cafe pembuatan website resto cafe apps."
        />
        <meta
          content="Mesin kasir restoran online , aplikasi kasir penjualan kasir restoran rumah makan cafe pembuatan website resto cafe apps."
          property="facebook:description"
        />
        <meta
          content="Mesin kasir restoran online , aplikasi kasir penjualan kasir restoran rumah makan cafe pembuatan website resto cafe apps."
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
      <h1>
        <strong>
          <a href="/" className="text-info">
            Resto Web Apps
          </a>
        </strong>
      </h1>
      <img
        className="img-fluid"
        alt="mesin kasir restoran online"
        src="https://1.bp.blogspot.com/-d2pHsYgTilA/YDJUarQRuWI/AAAAAAAANA8/1yAzPG2FpTQ7BSDvjtFOux5c2UUyE6h9QCLcBGAsYHQ/s482/chef.gif"
      />
      <br />
      <img
        width="400"
        className="img-fluid"
        alt="mesin kasir restoran online"
        src="https://1.bp.blogspot.com/-H3xERUXTRyc/YDJUZU1Y5yI/AAAAAAAANAw/X3wxK9ylVJ4mVoGLq3-ohzxUn8nVymcFgCLcBGAsYHQ/s775/SIPER.png"
      />
      <h3>
        Mesin kasir restoran online , aplikasi kasir penjualan kasir restoran
        rumah makan cafe pembuatan website resto cafe apps.
      </h3>
      <p>All in one aplikasi restoran online website resto cafe.</p>

      <div className="text-center">
        <Link to="/resto" className="btn btn-info rounded">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};
export default About;
