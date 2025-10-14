import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CampusLink
          </div>
        </Link>

        <div className="flex flex-1 items-center gap-4 md:gap-6 max-w-2xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="스터디/동아리를 검색해보세요!"
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link to="/login">로그인</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/signup">회원가입</Link>
          </Button>
          <Button asChild>
            <Link to="/create">모집글 등록</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
