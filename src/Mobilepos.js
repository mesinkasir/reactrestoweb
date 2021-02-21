import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Mobile = () => {
  return (
    <div>
      <Helmet>
        <title>
          Mobile Waiters POS Aplikasi restoran cafe rumah makan online murah
        </title>
        <meta
          content="Mobile Waiters POS Aplikasi restoran cafe rumah makan online murah"
          name="twitter:title"
        />
        <meta
          content="Mobile Waiters POS Aplikasi restoran cafe rumah makan online murah"
          name="facebook:title"
        />
        <meta
          content="Mobile Waiters POS Aplikasi restoran cafe rumah makan online murah"
          property="og:title"
        />
        <meta
          content="Mobile Waiters POS Aplikasi restoran cafe rumah makan online murah"
          property="og:site_name"
        />
        <meta
          content="Mesin kasir restoran online ini mudah digunakan dengan android smartphone iphone dan desktop laptop pc mu."
          property="og:description"
        />
        <meta
          name="description"
          content="Mesin kasir restoran online ini mudah digunakan dengan android smartphone iphone dan desktop laptop pc mu."
        />
        <meta
          content="Mesin kasir restoran online ini mudah digunakan dengan android smartphone iphone dan desktop laptop pc mu."
          property="facebook:description"
        />
        <meta
          content="Mesin kasir restoran online ini mudah digunakan dengan android smartphone iphone dan desktop laptop pc mu."
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

      <h1>Mobile Waiters Resto POS Video</h1>
      <div className="rounded shadow embed-responsive embed-responsive-4by3">
        <iframe
          className="rounded shadow"
          src="https://www.youtube.com/embed/qUVW4dqYZBU"
          title="Demo mesin kasir restoran online via phone"
          allowFullScreen
        />
      </div>
      <p>
        Penggunaan dengan menggunakan mobile waiters pos apps dalam mencetat
        pesanan pelanggan.
      </p>
      <p>
        Kembali ke demo desktop <Link to="/demo">click sini </Link>
      </p>
    </div>
  );
};
export default Mobile;
