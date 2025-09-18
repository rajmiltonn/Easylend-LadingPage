import cakeIcon from "@/assets/cake-icon.png";
import walletIcon from "@/assets/wallet-icon.png";

const EligibilitySection = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Eligibility Criteria
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
            <div className="mb-4">
              <img
                src={cakeIcon}
                alt="Age requirement"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Age</h3>
            <p className="text-muted-foreground mb-4">21 - 55 years</p>
            <div className="w-full h-1 bg-primary rounded-full"></div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border border-border text-center">
            <div className="mb-4">
              <img
                src={walletIcon}
                alt="Income requirement"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Income</h3>
            <p className="text-muted-foreground mb-4">Min ₹20,000/month</p>
            <div className="w-full h-1 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;