function Header() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center gap-4 px-4">
      <h1
        style={{ fontFamily: "Bitcount Prop Single, sans-serif" }}
        className="text-3xl sm:text-4xl md:text-6xl tracking-wide text-white"
      >
        Where talent meets opportunity
      </h1>

      <p
        style={{ fontFamily: "Archivo Black, sans-serif" }}
        className="text-base sm:text-lg md:text-3xl text-gray-300"
      >
        Search and apply for roles that fit you best ! ! !
      </p>
    </div>
  );
}

export default Header;
