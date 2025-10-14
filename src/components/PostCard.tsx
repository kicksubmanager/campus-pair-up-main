import { Link } from "react-router-dom";
import { Clock, Users, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  members: string;
  deadline: string;
  location: string;
  imageUrl?: string;
}

const PostCard = ({
  id,
  title,
  description,
  category,
  members,
  deadline,
  location,
  imageUrl,
}: PostCardProps) => {
  return (
    <Link to={`/posts/${id}`}>
      <div className="group h-full overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
        {imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{category}</Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{members}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{deadline}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
