import { FigmaIcon, GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="mb-1.5">Assigment Showcase</h1>
        <p className="text-2xl">Reusable Button Component</p>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <a href="#">
          <Button
            asChild
            type="button"
            variant="ghost"
            className="hover:bg-white/5 hover:text-white"
            icon={GithubIcon}
          >
            Source Code
          </Button>
        </a>
        <div className="w-px h-6 bg-white" />
        <a href="#">
          <Button
            asChild
            type="button"
            variant="ghost"
            className="hover:bg-white/5 hover:text-white"
            icon={FigmaIcon}
          >
            Ui Design
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
