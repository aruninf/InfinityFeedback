import type { Metadata } from "next";
import { Suspense } from "react";
import { DemoSite } from "@/components/demo/demo-site";
import { Playground } from "./playground";

export const metadata: Metadata = {
  title: "Live Demo",
  description: "Try InfinityFeedback live — draw annotations, leave comments, directly on a demo website.",
  openGraph: {
    title: "InfinityFeedback — Live Demo",
    description: "Try InfinityFeedback live — draw annotations, leave comments, directly on a demo website.",
    url: "https://siteping.dev/demo",
  },
};

export default function DemoPage() {
  return (
    <>
      {/* useSearchParams in Playground requires a Suspense boundary for static rendering */}
      <Suspense fallback={null}>
        <Playground />
      </Suspense>
      <DemoSite />
    </>
  );
}
