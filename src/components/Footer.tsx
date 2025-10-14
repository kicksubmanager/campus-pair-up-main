import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">CampusLink</h3>
            <p className="text-sm text-muted-foreground">
              천안 지역 대학생을 위한 스터디/동아리 연결 플랫폼
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">
              서비스 소개
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              이용약관
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              개인정보처리방침
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
          © 2025 CampusLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
