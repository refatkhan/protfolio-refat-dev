import React from "react";
import { Link } from "react-router";
import { Helmet } from "@dr.pogodin/react-helmet";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <Helmet>
        <title>404 - Page Not Found | Ismail Khan Refat</title>
      </Helmet>

      <p className="text-emerald-400 font-mono text-lg font-semibold mb-2">
        404 ERROR
      </p>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-300 transition-colors"
      >
        <FiArrowLeft />
        Back to Portfolio
      </Link>
    </section>
  );
};

export default NotFound;
