import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  href: string;
}

const CategoryCard = ({ icon: Icon, title, count, href }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{count}개의 모집글</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
