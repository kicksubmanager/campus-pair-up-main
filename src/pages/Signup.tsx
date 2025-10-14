import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState<string | undefined>(undefined);
  const [major, setMajor] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    if (!name || !email || !university || !major || !password) {
      toast({ title: "입력 확인", description: "필수 항목을 모두 입력하세요.", variant: "destructive" });
      return;
    }
    if (password !== passwordConfirm) {
      toast({ title: "비밀번호 불일치", description: "비밀번호가 일치하지 않습니다.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            university,
            major,
          },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) throw error;

      // Optionally insert into a public profiles table if you have one
      // await supabase.from('profiles').insert({ id: data.user?.id, full_name: name, university, major })

      if (data.user?.identities && data.user.identities.length === 0) {
        // user already exists
        toast({ title: "이미 가입된 이메일", description: "다른 이메일을 사용해 주세요.", variant: "destructive" });
        return;
      }

      toast({ title: "가입 완료", description: "메일함에서 인증을 완료하세요." });
      navigate("/login");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "회원가입에 실패했어요.";
      toast({ title: "오류", description: message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CampusLink
            </h1>
          </Link>
          <p className="text-muted-foreground mt-2">새로운 계정을 만드세요</p>
        </div>
        
        <div className="rounded-xl border bg-card p-8 shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">이름 *</Label>
              <Input
                id="name"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">이메일 *</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@university.ac.kr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="university">학교 *</Label>
              <Select value={university} onValueChange={setUniversity}>
                <SelectTrigger id="university">
                  <SelectValue placeholder="학교를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baekseok">백석대학교</SelectItem>
                  <SelectItem value="namseoul">남서울대학교</SelectItem>
                  <SelectItem value="hoseo">호서대학교</SelectItem>
                  <SelectItem value="korea">한국기술교육대학교</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="major">학과 *</Label>
              <Input
                id="major"
                placeholder="예: 컴퓨터공학과"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호 *</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-confirm">비밀번호 확인 *</Label>
              <Input
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "가입 중..." : "회원가입"}
            </Button>
          </form>
          
          <Separator className="my-6" />
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
