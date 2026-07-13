export interface SectionMeta {
  id: number;
  slug: string;
  label: string;
}

// 17 sections total (Section 6.5 counted as its own stop, id 6.5 handled as 65 for indexing)
export const SECTIONS: SectionMeta[] = [
  { id: 1, slug: "opening", label: "Opening" },
  { id: 2, slug: "who-i-am", label: "Who I Am" },
  { id: 3, slug: "dolze", label: "Dolze" },
  { id: 4, slug: "interests", label: "Interests" },
  { id: 5, slug: "real-question", label: "The Real Question" },
  { id: 6, slug: "llm-capability", label: "What LLMs Can Do" },
  { id: 65, slug: "ai-vocabulary", label: "AI Vocabulary" },
  { id: 7, slug: "prompt-engineering", label: "Prompt Engineering" },
  { id: 8, slug: "context-engineering", label: "Context Engineering" },
  { id: 9, slug: "the-bridge", label: "The Bridge" },
  { id: 10, slug: "case-for-ai", label: "Case for AI" },
  { id: 11, slug: "the-risk", label: "Where the Risk Sits" },
  { id: 12, slug: "introducing-wmhit", label: "Introducing WMHIT" },
  { id: 13, slug: "live-demo", label: "Live Demo" },
  { id: 14, slug: "what-demo-shows", label: "What the Demo Shows" },
  { id: 15, slug: "where-this-goes", label: "Where This Could Go" },
  { id: 16, slug: "close", label: "Close" },
];
