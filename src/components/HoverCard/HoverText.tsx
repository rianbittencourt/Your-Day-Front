import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverTextProps {
    icon: React.ReactNode;
    text: string;


  }
  

export default function HoverText(
  {
    icon,
    text,
  }
  : HoverTextProps
) {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>{icon}</HoverCardTrigger>
        <HoverCardContent>
          <p>{text}</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
