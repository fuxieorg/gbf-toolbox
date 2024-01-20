import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ResourceItemProps = {
  icon: string;
  title: string;
  language: string;
  description: string;
};

export default function ResourceItem({
  icon,
  title,
  language,
  description,
}: ResourceItemProps) {
  return (
    <Card className="h-full transition-all hover:border-primary hover:bg-accent">
      <CardContent className="relative p-6">
        <Avatar>
          <AvatarImage src={`/images/resources/${icon}.webp`} />
          <AvatarFallback>{title.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="mt-6 flex items-center gap-1.5">
          <Badge variant="outline" className="absolute right-6 top-6 z-10">
            {language}
          </Badge>
          <span className="line-clamp-2 text-lg font-semibold">{title}</span>
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
