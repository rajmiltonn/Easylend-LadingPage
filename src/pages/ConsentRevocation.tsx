import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ArrowLeft, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import phoneNotificationImg from "@/assets/phone-notification-clean.png";
import thumbsUpImg from "@/assets/thumbs-up-illustration.png";

const ConsentRevocation = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    setPhoneNumber(numericValue);
  };

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log("Sending OTP to:", phoneNumber);
    setShowOtpSection(true);
  };

  const handleResendOTP = () => {
    // Reset OTP and resend
    setOtp("");
    console.log("Resending OTP to:", phoneNumber);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Submitting consent revocation for:", phoneNumber, "OTP:", otp);
    setShowSuccessScreen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="mr-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-6 py-4">
        <div className="w-full max-w-sm">
          {/* Title with yellow underline */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold text-foreground mb-2">
              Consent Revocation form
            </h1>
            <div className="w-24 h-0.5 bg-fintech-orange mx-auto"></div>
          </div>

          {/* Success Screen */}
          {showSuccessScreen ? (
            <Card className="bg-background shadow-card overflow-hidden">
              <div className="p-8 text-center">
                <h2 className="text-xl font-semibold text-primary mb-2">
                  We Respect Your Choice
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Thank for being part our journey. We'll here if you ever choose rejoin us.
                </p>
                
                <div className="mb-8 flex justify-center">
                  <img 
                    src={thumbsUpImg} 
                    alt="Thumbs up" 
                    className="w-16 h-16"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Your preferences have updated, and I'll you longer receive communications from 
                  <span className="text-primary font-medium"> easlend</span>.
                </p>
              </div>
            </Card>
          ) : (
            <Card className="bg-background shadow-card overflow-hidden">
              {/* Purple notification section */}
              <div className="pt-6 pr-6 pl-6 pb-0 bg-gradient-primary text-primary-foreground relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h2 className="text-lg font-semibold mb-1">Stop getting</h2>
                    <p className="text-sm opacity-90">notifications from us</p>
                  </div>
                  {/* Spacer to maintain height while image is absolutely positioned */}
                  <div className="w-24 h-20 shrink-0" aria-hidden="true"></div>
                </div>
                {/* Mobile phone illustration anchored to bottom-right without gaps */}
                <img 
                  src={phoneNotificationImg} 
                  alt="Phone with notification" 
                  className="absolute right-0 bottom-0 w-28 h-auto pointer-events-none select-none"
                />
              </div>

              {/* Form Content */}
              <div className="p-6">
                {/* Phone Input or OTP Input */}
                {!showOtpSection ? (
                  <div className="mb-6">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Phone No.*
                    </Label>
                    <div className="flex">
                      <div className="flex items-center px-3 py-2 border border-input bg-background rounded-l-md border-r-0">
                        <span className="text-sm mr-2">🇮🇳</span>
                        <span className="text-sm text-muted-foreground">+91</span>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        maxLength={10}
                        className="rounded-l-none border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="otp" className="text-sm font-medium text-foreground">
                        Enter OTP*
                      </Label>
                      <span className="text-xs text-primary font-medium">OTP Sent</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mb-4">
                      <Info className="w-3 h-3 mr-1" />
                      <span>OTP sent on +91{phoneNumber}</span>
                    </div>
                    <div className="flex justify-center">
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={(value) => setOtp(value.replace(/\D/g, '').slice(0, 6))}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="one-time-code"
                      >
                        <InputOTPGroup className="gap-2">
                          <InputOTPSlot index={0} className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" />
                          <InputOTPSlot index={1} className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" />
                          <InputOTPSlot index={2} className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" />
                          <InputOTPSlot index={3} className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" />
                          <InputOTPSlot index={4} className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" />
                          <InputOTPSlot index={5} className="w-12 h-12 rounded-lg border-2 border-input bg-background text-center text-lg font-medium focus:border-primary" />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>
                )}

                {/* Checkboxes */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent1"
                      checked={consent1}
                      onCheckedChange={(checked) => setConsent1(checked as boolean)}
                      className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="consent1" className="text-sm text-foreground leading-relaxed">
                      I wish to revoke my consent on processing of personal data.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent2"
                      checked={consent2}
                      onCheckedChange={(checked) => setConsent2(checked as boolean)}
                      className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor="consent2" className="text-sm text-foreground leading-relaxed">
                      I request deletion of my personal data from your database.
                    </Label>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4">
                  {!showOtpSection ? (
                    <>
                      <Button
                        variant="fintech"
                        onClick={handleSendOTP}
                        className="flex-1"
                        disabled={phoneNumber.length !== 10 || !consent1 || !consent2}
                      >
                        Send OTP
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={handleSubmit}
                        className="flex-1"
                        disabled={true}
                      >
                        Submit
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="fintech"
                        onClick={handleResendOTP}
                        className="flex-1"
                        disabled={phoneNumber.length !== 10 || !consent1 || !consent2}
                      >
                        Resend OTP
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={handleSubmit}
                        className={`flex-1 ${otp.length !== 6 || !consent1 || !consent2 ? 'cursor-not-allowed opacity-50' : ''}`}
                        disabled={otp.length !== 6 || !consent1 || !consent2}
                      >
                        Submit
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default ConsentRevocation;