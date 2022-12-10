import { localFont } from "@/utils/local-font";
import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className={localFont.className}>
      <div className="pt-16">
        <NavBar />
        {children}
      </div>
    </main>
  );
}
