import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const PhoneInput = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const handleGetOTP = () => {
    if (phoneNumber.length >= 10) {
      console.log("Requesting OTP for:", phoneNumber);
      navigate("/otp-verification", { state: { phoneNumber } });
    }
  };
  return <div className="w-full max-w-4xl mx-auto px-6">
      <div className="mb-4">
        <label className="block text-sm font-medium text-muted-foreground mb-3">
          Mobile Number
        </label>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2 border-b-2 border-border pb-2 flex-1">
            <span className="text-xl">🇮🇳</span>
            <span className="text-base text-muted-foreground">+91 -</span>
            <Input type="tel" placeholder="XXXXXXXXXX" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))} className="border-0 rounded-none bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:outline-none placeholder:text-muted-foreground flex-1" />
          </div>
          <Button variant="fintech" size="lg" onClick={handleGetOTP} disabled={phoneNumber.length < 10} className="h-14 min-w-[200px] font-medium text-lg px-[116px] mx-[19px] my-[13px] py-0">
            Get OTP
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center leading-relaxed">
        By clicking on 'Get OTP', you hereby authorize Finance Buddha and its affiliates to retrieve your credit information
      </p>
    </div>;
};
export default PhoneInput;