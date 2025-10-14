import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const CreatePost = () => {
  const [recruitStart, setRecruitStart] = useState<Date>();
  const [recruitEnd, setRecruitEnd] = useState<Date>();
  const [activityStart, setActivityStart] = useState<Date>();
  const [activityEnd, setActivityEnd] = useState<Date>();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">새로운 스터디/동아리 모집글 등록</h1>
            <p className="text-muted-foreground">함께할 멤버를 찾아보세요!</p>
          </div>
          
          <form className="space-y-6 rounded-xl border bg-card p-8">
            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">카테고리 *</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="카테고리를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="study">학습/스터디</SelectItem>
                  <SelectItem value="hobby">취미/동아리</SelectItem>
                  <SelectItem value="project">프로젝트</SelectItem>
                  <SelectItem value="contest">대회/공모전</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">제목 *</Label>
              <Input
                id="title"
                placeholder="예: 토익 스터디원 모집합니다"
              />
            </div>
            
            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">대표 이미지</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="cursor-pointer"
              />
              <p className="text-xs text-muted-foreground">
                권장 크기: 1200x630px (선택사항)
              </p>
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">활동 목표/내용 *</Label>
              <Textarea
                id="description"
                placeholder="스터디/동아리의 목적, 활동 내용, 규칙 등을 자유롭게 작성해주세요."
                rows={10}
                className="resize-none"
              />
            </div>
            
            {/* Member Count */}
            <div className="space-y-2">
              <Label htmlFor="members">모집 인원 *</Label>
              <Input
                id="members"
                type="number"
                min="1"
                max="20"
                placeholder="예: 5"
              />
            </div>
            
            {/* Recruitment Period */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>모집 시작일 *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !recruitStart && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {recruitStart ? format(recruitStart, "yyyy-MM-dd") : "날짜 선택"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={recruitStart}
                      onSelect={setRecruitStart}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>모집 종료일 *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !recruitEnd && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {recruitEnd ? format(recruitEnd, "yyyy-MM-dd") : "날짜 선택"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={recruitEnd}
                      onSelect={setRecruitEnd}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Activity Period */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>활동 시작일 *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !activityStart && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {activityStart ? format(activityStart, "yyyy-MM-dd") : "날짜 선택"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={activityStart}
                      onSelect={setActivityStart}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <Label>활동 종료일 *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !activityEnd && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {activityEnd ? format(activityEnd, "yyyy-MM-dd") : "날짜 선택"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={activityEnd}
                      onSelect={setActivityEnd}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">활동 장소 *</Label>
              <Input
                id="location"
                placeholder="예: 백석대학교 도서관 스터디룸"
              />
            </div>
            
            {/* Contact */}
            <div className="space-y-2">
              <Label htmlFor="contact">연락 방법 *</Label>
              <Input
                id="contact"
                placeholder="예: 오픈카카오톡 링크, 이메일 등"
              />
            </div>
            
            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1">
                취소
              </Button>
              <Button type="submit" className="flex-1">
                등록하기
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePost;
