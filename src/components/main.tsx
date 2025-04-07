import { CatIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { VariantProps } from "class-variance-authority";

type ButtonColor = NonNullable<VariantProps<typeof buttonVariants>["color"]>;
type ButtonVariants = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;
type ButtonIcon = "before" | "after" | "icon-only";
type TooltipPosition = "bottom" | "top" | "right" | "left";

const Main = () => {
  const [buttonText, setButtonText] = useState("Hover Me!");
  const [buttonColor, setButtonColor] = useState<ButtonColor>("default");
  const [variant, setVariant] = useState<ButtonVariants>("default");
  const [size, setSize] = useState<ButtonSize>("default");
  const [iconPosition, setIconPosition] = useState<ButtonIcon>("before");
  const [isWithIcon, setIsWithIcon] = useState(true);
  const [tooltipSide, setTooltipSide] = useState<TooltipPosition>("bottom");
  const [isWithTooltip, setIsWithTooltip] = useState(true);

  return (
    <main className="grid grid-cols-3 h-full gap-x-6">
      <div className="border border-white/15 border-dashed rounded-2xl h-full flex items-center justify-center">
        <Button
          variant={variant}
          color={buttonColor}
          icon={isWithIcon ? CatIcon : undefined}
          iconPosition={iconPosition}
          size={size}
          tooltip={isWithTooltip}
          tooltipPosition={tooltipSide}
        >
          {buttonText}
        </Button>
      </div>
      <div className="h-full flex flex-col gap-y-4 items-center justify-start">
        <div className="w-full">
          <Label htmlFor="btnTxt" className="mb-2 pl-0.5">
            Button Text
          </Label>
          <Input
            className="w-full"
            placeholder="Button Text"
            id="btnTxt"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
        </div>
        <div className="w-full">
          <Label htmlFor="btnTxt" className="mb-2 pl-0.5">
            Button Color
          </Label>
          <Select
            onValueChange={(value) => setButtonColor(value as ButtonColor)}
            defaultValue={buttonColor}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pick Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="danger">Danger</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label htmlFor="btnTxt" className="mb-2 pl-0.5">
            Button Variant
          </Label>
          <Select
            onValueChange={(value) => setVariant(value as ButtonVariants)}
            defaultValue={variant}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pick Variant" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Filled</SelectItem>
              <SelectItem value="outline">Outline</SelectItem>
              <SelectItem value="ghost">Ghost</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="h-full flex flex-col gap-y-4 items-center justify-start">
        <div className="w-full">
          <Label htmlFor="btnTxt" className="mb-2 pl-0.5">
            Button Size
          </Label>
          <Select
            onValueChange={(value) => setSize(value as ButtonSize)}
            defaultValue={size}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pick Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Medium</SelectItem>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label htmlFor="" className="mb-2 pl-0.5">
            Icon
          </Label>
          <Select
            onValueChange={(value) => {
              if (value !== "none") {
                setIsWithIcon(true);
                setIconPosition(value as ButtonIcon);
              } else {
                setIsWithIcon(false);
                setIconPosition("before");
              }
            }}
            defaultValue={iconPosition}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Icon Settings" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="before">Left</SelectItem>
              <SelectItem value="after">Right</SelectItem>
              <SelectItem value="icon-only">Icon Only</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label htmlFor="" className="mb-2 pl-0.5">
            Tooltip
          </Label>
          <Select
            onValueChange={(value) => {
              if (value !== "none") {
                setIsWithTooltip(true);
                setTooltipSide(value as TooltipPosition);
              } else {
                setIsWithTooltip(false);
              }
            }}
            defaultValue={tooltipSide}
          >
            <SelectTrigger className="w-full" id="tooltip">
              <SelectValue placeholder="Tooltip Settings" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="right">Right</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </main>
  );
};

export default Main;
