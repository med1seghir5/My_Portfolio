const Navbar: React.FC = () => {
  return (
    <section className="hidden lg:flex flex-row justify-center items-center gap-x-12 p-4 font-semibold">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </section>
  );
};

export default Navbar;
