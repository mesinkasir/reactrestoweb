import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ArticleContent from "./ArticleContent";
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find(article => article.name === name);
  return (
    <div>
      <Helmet>
        <title>{article.desc}</title>
        <meta
          content="Aplikasi restoran kasir rumah makan cafe penjuan kasir sip resto web app"
          name="twitter:title"
        />
        <meta
          content="Aplikasi restoran kasir rumah makan cafe penjuan kasir sip resto web app"
          name="facebook:title"
        />
        <meta
          content="Aplikasi restoran kasir rumah makan cafe penjuan kasir sip resto web app"
          property="og:title"
        />
        <meta
          content="Aplikasi restoran kasir rumah makan cafe penjuan kasir sip resto web app"
          property="og:site_name"
        />
        <meta
          content="Mesin kasir restoran cafe rumah makan online fitur dan spesifikasi penggunaan detail."
          property="og:description"
        />
        <meta
          name="description"
          content="Mesin kasir restoran cafe rumah makan online fitur dan spesifikasi penggunaan detail."
        />
        <meta
          content="Mesin kasir restoran cafe rumah makan online fitur dan spesifikasi penggunaan detail."
          property="facebook:description"
        />
        <meta
          content="Mesin kasir restoran cafe rumah makan online fitur dan spesifikasi penggunaan detail."
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
            {article.title}
          </a>
        </strong>
      </h1>
      <img className="img-fluid shadow rounded" src={article.img} />
      <h3>{article.desc}</h3>
      {article.content.map((paragraph, key) => (
        <p className="lead" key={key}>
          {paragraph}
        </p>
      ))}
      <div className="text-center">
        <Link to="/resto" className="btn btn-info rounded">
          Kembali ke fitur
        </Link>
      </div>
    </div>
  );
};
export default SinglePage;
