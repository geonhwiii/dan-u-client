import { localFont } from "@/utils/local-font";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <main className={localFont.className}>{children}</main>
    </>
  );
}
