import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowRight, Edit } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "9677420701";
  
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleSubmit = () => {
    if (otp.length === 6) {
      console.log("Submitting OTP:", otp);
      // Add your OTP verification logic here
    }
  };

  const handleResendOTP = () => {
    console.log("Resending OTP to:", phoneNumber);
    setOtp("");
    setTimeLeft(30);
    setCanResend(false);
  };

  const handleEditPhone = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground">Enter OTP</h1>
        </div>

        {/* Phone number display with edit option */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <p className="text-muted-foreground">
              You will get OTP via SMS on +91 {phoneNumber}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEditPhone}
              className="text-primary hover:text-primary-hover p-1 h-auto"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </div>

        {/* OTP Input */}
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value.replace(/\D/g, '').slice(0, 6))}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
          >
            <InputOTPGroup className="gap-3">
              <InputOTPSlot 
                index={0} 
                className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" 
              />
              <InputOTPSlot 
                index={1} 
                className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" 
              />
              <InputOTPSlot 
                index={2} 
                className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" 
              />
              <InputOTPSlot 
                index={3} 
                className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" 
              />
              <InputOTPSlot 
                index={4} 
                className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" 
              />
              <InputOTPSlot 
                index={5} 
                className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" 
              />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Resend OTP */}
        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm">
            Resend OTP in {timeLeft} seconds.
          </p>
          {canResend && (
            <Button
              variant="ghost"
              onClick={handleResendOTP}
              className="text-primary hover:text-primary-hover p-0 h-auto text-sm underline"
            >
              Resend OTP in {timeLeft} seconds.
            </Button>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-8">
          <Button
            onClick={handleSubmit}
            disabled={otp.length !== 6}
            className="w-full h-14 bg-gradient-primary hover:opacity-90 text-primary-foreground font-medium text-lg rounded-lg shadow-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit OTP
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Terms and Conditions */}
        <div className="text-center text-xs text-muted-foreground leading-relaxed px-4">
          By clicking/pressing all Easylend.co, you voluntarily agree to provide your personal details and you authorize 
          Finbud Financial Services Limited and its affiliates to obtain your credit profile/score from CRIF Highmark. You also 
          agree to the following{" "}
          <button className="text-primary underline hover:text-primary-hover">
            Terms & Conditions
          </button>
          . This check does not affect your credit score.
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;