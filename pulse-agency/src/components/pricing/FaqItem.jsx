import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink/15">
      <h3><button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold">{q}<motion.span animate={{ rotate: open ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-soft text-violet"><Plus size={18} /></motion.span></button></h3>
      <AnimatePresence initial={false}>{open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="pb-5 text-ink/70">{a}</p></motion.div>}</AnimatePresence>
    </div>
  )
}
