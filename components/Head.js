import NextHead from "next/head";

const Head = ({ title, keywords, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="${description}" />
      <meta name="keywords" content="${keywords}" />
      <link rel="icon" href="../favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
    </NextHead>
  );
};

Head.defaultProps = {
  title: "Test Meta Component",
  keywords: "Test Meta Component",
  description: "Test Meta Component",
};

export default Head;
