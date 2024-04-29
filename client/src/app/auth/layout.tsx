import AuthenticationLayout from "@/components/Auth/AuthLayout";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Authentication",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthenticationLayout>
        {children}
        </AuthenticationLayout>
        </body>
    </html>
  );
}