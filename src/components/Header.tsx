import { Button } from "@/components/ui/button";
import { HelpCircle, ThumbsDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import easylendLogo from "@/assets/easylend-logo.png";
const Header = () => {
  const navigate = useNavigate();

  const handleNotInterested = () => {
    navigate("/consent-revocation");
  };

  return <header className="w-full px-6 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img src={easylendLogo} alt="EasyLend Logo" className="h-14 w-auto" />
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="help" size="sm" className="px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-1" />
            Help?
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-0" align="end">
          <div className="py-1">
            <button 
              onClick={handleNotInterested}
              className="flex items-center w-full px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <ThumbsDown className="w-4 h-4 mr-2 text-blue-500 fill-blue-500" />
              Not interested in Loan
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </header>;
};
export default Header;