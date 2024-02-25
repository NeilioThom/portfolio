import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  displaySize: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "6xl";
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "primary" | "secondary";
}

type TextSize =
  | "text-sm"
  | "text-md"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-6xl";

export const Heading = ({
  tagName,
  children,
  className,
  displaySize,
  variant,
}: Props) => {
  const TagName = tagName;
  const textSizeClass: TextSize = `text-${displaySize}`;

  const variantStyles: Record<Props["variant"], string> = {
    primary: "font-roboto text-white font-bold tracking-tight my-4",
    secondary: "font-roboto text-primary font-light tracking-loose my-4",
  };

  return (
    <TagName className={clsx(variantStyles[variant], textSizeClass, className)}>
      {children}
    </TagName>
  );
};
