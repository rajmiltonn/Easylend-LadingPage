import handshakeIllustration from "@/assets/handshake-illustration.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-2 max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Get Personal Loan Up to{" "}
          <span className="text-primary">₹50 Lakhs</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Interest Rates Starting at{" "}
          <span className="font-semibold text-foreground">10.99%</span>
        </p>
      </div>

      <div className="mb-3 w-full max-w-xs">
        <img
          src={handshakeIllustration}
          alt="Financial Partnership Illustration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;