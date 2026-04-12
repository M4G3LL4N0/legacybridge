import { ReactNode } from "react";
import AppSidebar from "@/components/product/AppSidebar";
import AppTopbar from "@/components/product/AppTopbar";

export default function ProductShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen premium-page-shell">
      <div className="signal-mist signal-mist-a" />
      <div className="signal-mist signal-mist-b" />

      <div className="mx-auto flex max-w-[1680px] flex-col lg:min-h-screen lg:flex-row">
        <AppSidebar />
        <div className="min-w-0 flex-1">
          <AppTopbar />
          <div className="premium-grid min-h-[calc(100vh-88px)] px-6 py-6 sm:px-8 sm:py-8">
            <div className="mx-auto max-w-[1280px]">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
