import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const ArticleList = ({ articles }) => (
  <div>
    <Helmet>
      <title>Fitur Aplikasi restoran online sip resto web app</title>
      <meta
        content="Fitur Aplikasi restoran online sip resto web app"
        name="twitter:title"
      />
      <meta
        content="Fitur Aplikasi restoran online sip resto web app"
        name="facebook:title"
      />
      <meta
        content="Fitur Aplikasi restoran online sip resto web app"
        property="og:title"
      />
      <meta
        content="Fitur Aplikasi restoran online sip resto web app"
        property="og:site_name"
      />
      <meta
        content="Mesin kasir restoran rumah makan cafe online fitur dan spesifikasi detail informasi."
        property="og:description"
      />
      <meta
        name="description"
        content="Mesin kasir restoran rumah makan cafe online fitur dan spesifikasi detail informasi."
      />
      <meta
        content="Mesin kasir restoran rumah makan cafe online fitur dan spesifikasi detail informasi."
        property="facebook:description"
      />
      <meta
        content="Mesin kasir restoran rumah makan cafe online fitur dan spesifikasi detail informasi."
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

    {articles.map((article, key) => (
      <Link
        className="btn btn-outline-info rounded border border-white p-3 col-6 col-md-4"
        key={key}
        to={`/resto/${article.name}`}
      >
        <img className="img-fluid shadow rounded" src={article.img} />
        <p>
          <strong>{article.title}</strong>
        </p>
      </Link>
    ))}
    <div className="text-center">
      <Link to="/price" className="btn btn-info rounded">
        Order Sekarang
      </Link>
    </div>
  </div>
);

export default ArticleList;
