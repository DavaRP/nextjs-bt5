import Script from "next/script";

const Footer = () => {
  return (
    <>
      <footer className="text-center py-3 bg-dark text-white">
        <p className="fw-bold mb-0">2021 &copy; Dava Rizqi Pradipta</p>
      </footer>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossOrigin="anonymous"
      ></Script>
      <Script src="/js/bootstrap.min.js"></Script>
    </>
  );
};

export default Footer;
