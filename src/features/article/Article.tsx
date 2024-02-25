import { Pill } from "@/features/pill";
import { Heading } from "@/features/heading";
import bpor from "@/assets/bpor.png";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  pillText: string;
  detailText: string;
}

export const Article = ({ detailText, pillText, title, ...rest }: Props) => (
    <div className="h-full md:flex bg-white/5 rounded-lg mx-auto" {...rest}>
      <div className="h-max lg:max-w-[400px]">
        <img src={bpor} className="h-max w-full object-contain" />
      </div>
      <div className="flex-1 p-5">
        <Pill>{pillText}</Pill>
        <Heading
          variant="secondary"
          tagName="h1"
          displaySize="3xl"
          className=""
        >
          {title}
        </Heading>
        <p className="text-white leading-7">{detailText}</p>
      </div>
    </div>
);
