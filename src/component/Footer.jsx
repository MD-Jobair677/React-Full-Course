

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}  All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Made with ❤️ by Md Shuvo
        </p>
      </div>
    </footer>
  );
}
export default Footer;