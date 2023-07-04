import Comp from "@/components/layout/Header";
import Comp2 from "@/components/layout/Header2";

export default async function ComponentTestPage() {
  return (
    <main>
      <div className="h-10 w-full bg-green-200 pt-24"></div>
      <Comp />
      <Comp2 />
    </main>
  );
}
