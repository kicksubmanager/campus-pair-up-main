import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, MapPin, Clock, Heart, Share2 } from "lucide-react";

const PostDetail = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-4xl">
          <article className="rounded-xl border bg-card overflow-hidden">
            {/* Header */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold flex-1">토익 스터디원 모집합니다</h1>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-3 mb-6">
                <Avatar>
                  <AvatarFallback>김</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">김민수</p>
                  <p className="text-sm text-muted-foreground">백석대학교 경영학과</p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">학습/스터디</Badge>
              </div>
              
              {/* Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">모집 인원</p>
                    <p className="font-medium">3/5명</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">모집 기간</p>
                    <p className="font-medium">~12/31</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">활동 기간</p>
                    <p className="font-medium">3개월</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">활동 장소</p>
                    <p className="font-medium">천안시 동남구</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Content */}
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-4">모집 내용</h2>
              <div className="prose prose-sm max-w-none text-foreground">
                <p className="mb-4">
                  안녕하세요! 토익 800점 이상을 목표로 하는 스터디원을 모집합니다.
                </p>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">📚 스터디 정보</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>주 3회 (월, 수, 금) 오전 9시-11시</li>
                  <li>장소: 백석대학교 도서관 스터디룸</li>
                  <li>기간: 2025년 1월 ~ 3월 (3개월)</li>
                  <li>목표: 토익 800점 이상 달성</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">✅ 이런 분을 찾습니다</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>성실하게 출석 가능하신 분</li>
                  <li>토익 공부에 진심이신 분</li>
                  <li>서로 격려하며 함께 성장하고 싶으신 분</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">💬 연락 방법</h3>
                <p>
                  오픈카카오톡: <a href="#" className="text-primary hover:underline">https://open.kakao.com/o/example</a>
                </p>
              </div>
            </div>
            
            <Separator />
            
            {/* Action Button */}
            <div className="p-8">
              <Button size="lg" className="w-full">스터디 지원하기</Button>
            </div>
          </article>
          
          {/* Comments Section */}
          <div className="mt-8 rounded-xl border bg-card p-8">
            <h2 className="text-xl font-semibold mb-6">댓글 (3개)</h2>
            
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>익</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">익명{i}</span>
                      <span className="text-xs text-muted-foreground">2시간 전</span>
                    </div>
                    <p className="text-sm">관심있습니다! 오픈톡 들어갈게요~</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>나</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="댓글을 입력하세요..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>등록</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;
