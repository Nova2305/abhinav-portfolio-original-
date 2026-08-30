import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav Singh | AI Engineer • Cloud • MLOps",
  description:
    "Abhinav Singh — AI Engineer focused on AI systems, cloud infrastructure, data engineering, DevOps, and MLOps.",
  keywords: [
    "Abhinav Singh",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "Cloud",
    "AWS",
    "MLOps",
    "DevOps",
    "Data Engineering",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Abhinav Singh",
    },
  ],
  creator: "Abhinav Singh",

  openGraph: {
    title: "Abhinav Singh | AI Engineer • Cloud • MLOps",
    description:
      "Building AI-powered applications, scalable backend systems, and cloud-native infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
