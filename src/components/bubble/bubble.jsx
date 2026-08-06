import { motion } from "framer-motion";

export function Bubble() {
  return (
    <div className="pointer-events-none absolute top-0 left-0 -z-10 h-64 w-64 rounded-full bg-slate-400/30 blur-3xl"></div>
  );
}
