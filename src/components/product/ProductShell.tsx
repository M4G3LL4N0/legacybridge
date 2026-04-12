import { ReactNode } from "react";
import AppSidebar from "@/components/product/AppSidebar";
import AppTopbar from "@/components/product/AppTopbar";

export default function ProductShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-[1600px] flex-col lg:min-h-screen lg:flex-row">
        <AppSidebar />
        <div className="min-w-0 flex-1">
          <AppTopbar />
          <div className="px-6 py-6 sm:px-8 sm:py-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
