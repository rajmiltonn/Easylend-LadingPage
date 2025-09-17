import axisBank from "@/assets/axis-bank.webp";
import dbsBank from "@/assets/dbs-bank.webp";
import hdfcBank from "@/assets/hdfc-bank.webp";
import idfcFirstBank from "@/assets/idfc-first-bank.webp";
import indusindBank from "@/assets/indusind-bank.webp";

const PartnersSection = () => {
  const partners = [
    { name: "Axis Bank", logo: axisBank },
    { name: "DBS", logo: dbsBank },
    { name: "HDFC", logo: hdfcBank },
    { name: "IDFC First", logo: idfcFirstBank },
    { name: "IndusInd", logo: indusindBank },
    { name: "More", text: "+14" },
  ];

  return (
    <section className="py-3 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-lg font-medium text-foreground mb-3">
          Get offers from top banks and NBFCs
        </h3>
        
        <div className="flex justify-center items-center gap-3 mb-4 flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border border-border"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-10 h-6 object-contain"
                />
              ) : (
                <span className="text-primary text-sm font-bold">
                  {partner.text}
                </span>
              )}
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground">
          Trusted by 4 Crore+ Indians
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;