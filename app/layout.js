import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight: ["400", "500", "600", "700"]
});


const ovo = Ovo({
  subsets: ["latin"],weight: ["400"]
});


export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
    <head>
      <meta name="keyword" content="vignesh,developer,websitedeveloper,vigneshdeveloper,website,vigneshprofile">
      <meta name="author" content="vignesh"/>
      <meta name="description" content="vignesh – a Frontend Developer specializing in React, Tailwind CSS, and modern web apps." />
      <meta name="robots" content="index, follow" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "vignesh",
        "url": "https://vignesh.codes",
        "sameAs": [
          "https://github.com/Vigneshs9899",
          "https://www.linkedin.com/in/vigneshs9899/"
        ],
        "jobTitle": "Fullstack Developer"
      })
    }}
  />
    </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
