import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Posts = () => {
  const [category, setCategory] = useState("all");
  const [region, setRegion] = useState("all");
  const [sort, setSort] = useState("latest");

  const posts = [
    {
      id: "1",
      title: "토익 스터디원 모집합니다",
      description: "목표 점수 800점 이상! 주 3회 오전 스터디",
      category: "학습/스터디",
      members: "3/5명",
      deadline: "3일 남음",
      location: "천안시 동남구",
    },
    {
      id: "2",
      title: "웹 개발 프로젝트 팀원 구합니다",
      description: "React, Node.js를 활용한 웹서비스 개발",
      category: "프로젝트",
      members: "2/4명",
      deadline: "5일 남음",
      location: "온라인",
    },
    {
      id: "3",
      title: "독서 동아리 '책과 함께' 신규 회원 모집",
      description: "매주 일요일 오후 도서관에서 독서 모임",
      category: "취미/동아리",
      members: "8/10명",
      deadline: "7일 남음",
      location: "천안시 서북구",
    },
    {
      id: "4",
      title: "2025 창업 경진대회 팀원 모집",
      description: "아이디어 있으신 분! 함께 도전해요",
      category: "대회/공모전",
      members: "1/3명",
      deadline: "2일 남음",
      location: "천안시 동남구",
    },
    {
      id: "5",
      title: "자격증 스터디 같이 하실 분",
      description: "정보처리기사 자격증 준비 스터디",
      category: "학습/스터디",
      members: "4/6명",
      deadline: "4일 남음",
      location: "천안시 동남구",
    },
    {
      id: "6",
      title: "밴드 동아리 기타리스트 모집",
      description: "락/팝 중심의 밴드 활동",
      category: "취미/동아리",
      members: "3/4명",
      deadline: "6일 남음",
      location: "천안시 서북구",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">모집글 목록</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 space-y-6">
              <div className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-4">필터</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">카테고리</label>
                    <div className="space-y-2">
                      {["전체", "학습/스터디", "취미/동아리", "프로젝트", "대회/공모전"].map((cat) => (
                        <div key={cat} className="flex items-center space-x-2">
                          <Checkbox id={cat} />
                          <label htmlFor={cat} className="text-sm cursor-pointer">{cat}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">지역</label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger>
                        <SelectValue placeholder="지역 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="dongnam">천안시 동남구</SelectItem>
                        <SelectItem value="seobuk">천안시 서북구</SelectItem>
                        <SelectItem value="online">온라인</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Posts Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <p className="text-muted-foreground">총 {posts.length}개의 모집글</p>
                
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">최신순</SelectItem>
                    <SelectItem value="popular">인기순</SelectItem>
                    <SelectItem value="deadline">마감임박순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">이전</Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">다음</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;
