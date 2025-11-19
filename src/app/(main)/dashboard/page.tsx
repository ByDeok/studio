import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">온보딩 완료!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            메인 대시보드 페이지입니다. 다음 단계에서 구현될 예정입니다.
          </p>
          <div className="mt-6 text-center">
            <Link href="/" className="text-primary hover:underline">
              시작 페이지로 돌아가기
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
