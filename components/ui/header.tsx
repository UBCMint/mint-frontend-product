import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, ChevronUpIcon } from "@radix-ui/react-icons";

export default function AppHeader() {
  return (
    <header className="flex justify-between items-center p-2 border-b h-16">
      {/* logo */}
      <div className="flex items-center">
        <img src= "https://ubcmint.github.io/img/main-page/mint-logo.png" alt="Logo" className="h-14" />
      </div>

      {/* update, issues, help */}
      <div className="flex items-center space-x-4">
        <Button variant="link" className="flex items-center space-x-1 px-3 py-2">
            <span>Update</span>
            <ExternalLinkIcon className="h-4 w-4" />
        </Button>
        <Button variant="link" className="flex items-center space-x-1 px-3 py-2">
          <span>Issues</span>
          <ExternalLinkIcon className="h-4 w-4" />
        </Button>
        <Button variant="link" className="flex items-center space-x-1 px-3 py-2">
          <span>Help</span>
          <ChevronUpIcon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}