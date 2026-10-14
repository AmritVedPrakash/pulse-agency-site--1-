import { useState } from 'react'
import { img } from '../../data/site'
// Unsplash image with lazy loading and a graceful fallback if a photo ID ever disappears.
export default function SmartImg({ id, alt, w = 900, h, className = '', eager = false }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-violet-soft to-blush ${className}`} />
  return <img src={img(id, w, h)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} className={`object-cover ${className}`} />
}
