import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


export default function ProjectCard({ title, blurb, image, href, year, tags = [] }) {
return (
<a href={href} target="_blank" className="card block overflow-hidden">
<div className="relative aspect-[4/3] bg-black/5">
{image && (
<Image src={image} alt="" fill className="object-cover" />
)}
</div>
<div className="p-4">
<div className="flex items-center justify-between gap-3">
<h3 className="text-base font-semibold tracking-tight">{title}</h3>
<span className="text-xs text-mute">{year}</span>
</div>
<p className="mt-2 text-sm text-ink/80 line-clamp-2">{blurb}</p>
<div className="mt-3 flex flex-wrap gap-2">
{tags.map((t) => (
<span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-black/5 border border-black/5">{t}</span>
))}
</div>
<div className="mt-3 inline-flex items-center gap-1 text-sm">
<span>View</span>
<ArrowUpRight size={16} />
</div>
</div>
</a>
);
}