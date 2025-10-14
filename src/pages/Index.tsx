import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Lightbulb, Trophy, ArrowRight } from "lucide-react";
const Index = () => {
  const categories = [{
    icon: BookOpen,
    title: "학습/스터디",
    count: 24,
    href: "/posts?category=study"
  }, {
    icon: Users,
    title: "취미/동아리",
    count: 18,
    href: "/posts?category=hobby"
  }, {
    icon: Lightbulb,
    title: "프로젝트",
    count: 12,
    href: "/posts?category=project"
  }, {
    icon: Trophy,
    title: "대회/공모전",
    count: 8,
    href: "/posts?category=contest"
  }];
  const latestPosts = [{
    id: "1",
    title: "토익 스터디원 모집합니다",
    description: "목표 점수 800점 이상! 주 3회 오전 스터디",
    category: "학습/스터디",
    members: "3/5명",
    deadline: "3일 남음",
    location: "천안시 동남구"
  }, {
    id: "2",
    title: "웹 개발 프로젝트 팀원 구합니다",
    description: "React, Node.js를 활용한 웹서비스 개발",
    category: "프로젝트",
    members: "2/4명",
    deadline: "5일 남음",
    location: "온라인"
  }, {
    id: "3",
    title: "독서 동아리 '책과 함께' 신규 회원 모집",
    description: "매주 일요일 오후 도서관에서 독서 모임",
    category: "취미/동아리",
    members: "8/10명",
    deadline: "7일 남음",
    location: "천안시 서북구"
  }, {
    id: "4",
    title: "2025 창업 경진대회 팀원 모집",
    description: "아이디어 있으신 분! 함께 도전해요",
    category: "대회/공모전",
    members: "1/3명",
    deadline: "2일 남음",
    location: "천안시 동남구"
  }];
  return <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                함께 성장하는 대학생활의 시작
              </h1>
              
              <Button size="lg" className="gap-2" asChild>
                <a href="/posts">
                  모집글 둘러보기
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-3">카테고리 탐색</h2>
              <p className="text-muted-foreground">관심있는 분야를 선택해보세요</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(category => <CategoryCard key={category.title} {...category} />)}
            </div>
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-3">새롭게 올라왔어요!</h2>
                <p className="text-muted-foreground">최신 모집글을 확인해보세요</p>
              </div>
              <Button variant="outline" asChild>
                <a href="/posts">더 보기</a>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestPosts.map(post => <PostCard key={post.id} {...post} />)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;