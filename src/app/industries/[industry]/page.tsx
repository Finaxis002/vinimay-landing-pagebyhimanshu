import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRY_PAGES } from "@/content/industryPagesData";
import IndustryPageTemplate from "@/components/industries/IndustryPageTemplate";

interface PageProps {
  params: Promise<{
    industry: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_PAGES).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const pageData = INDUSTRY_PAGES[industry];
  if (!pageData) {
    return {
      title: "Industry Solution | Vinimay",
    };
  }

  return {
    title: pageData.meta.title,
    description: pageData.meta.description,
    keywords: pageData.meta.keywords,
  };
}

export default async function DynamicIndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const pageData = INDUSTRY_PAGES[industry];

  if (!pageData) {
    notFound();
  }

  return <IndustryPageTemplate data={pageData} />;
}
