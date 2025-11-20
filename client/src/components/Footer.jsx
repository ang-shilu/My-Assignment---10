const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center mt-8">
    <p>© {new Date().getFullYear()} TravelEase. All Rights Reserved.</p>
    <div className="mt-2">
      <a href="https://facebook.com" className="mx-2">Facebook</a>
      <a href="https://x.com" className="mx-2">X</a>
      <a href="https://instagram.com" className="mx-2">Instagram</a>
    </div>
  </footer>
);
export default Footer;