import { motion } from 'framer-motion'
import { ease } from '../theme/tokens'

type Verdict = 'descartar' | 'revisar' | 'candidata'

const rows: { case: string; addr: string; verdict: Verdict; reason: string }[] = [
  { case: 'TD-2024-0192', addr: '14 Maple Ave', verdict: 'descartar', reason: 'Gravamen federal' },
  { case: 'TD-2024-0207', addr: '8 Oak Street', verdict: 'descartar', reason: 'Deuda de HOA' },
  { case: 'TD-2024-0233', addr: '23 Birch Rd', verdict: 'revisar', reason: 'Verificar título' },
  { case: 'TD-2024-0251', addr: '5 Cedar Lane', verdict: 'candidata', reason: 'Pasa filtro MAP-9' },
  { case: 'TD-2024-0268', addr: '41 Pine Ct', verdict: 'descartar', reason: 'Lote inviable' },
]

const tag: Record<Verdict, string> = {
  descartar: 'bg-charcoal/8 text-smoke',
  revisar: 'bg-olive/15 text-olive',
  candidata: 'bg-petrol/12 text-petrol',
}

const tagLabel: Record<Verdict, string> = {
  descartar: 'Descartar',
  revisar: 'Revisar',
  candidata: 'Candidata',
}

/** Mock animado de un portal público de subastas (.gov). Datos ilustrativos, no reales. */
export function PortalMock() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white text-charcoal shadow-2xl ring-1 ring-black/10">
      {/* Barra de ventana */}
      <div className="flex items-center gap-3 border-b border-black/8 bg-[#f1f0ec] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-smoke/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-smoke/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-smoke/40" />
        </div>
        <div className="flex-1 rounded-md bg-white px-3 py-1 text-[12px] text-smoke ring-1 ring-black/8">
          <span className="text-olive">🔒</span> washington-county.gov/tax-deed-sales
        </div>
      </div>

      {/* Encabezado de tabla */}
      <div className="grid grid-cols-[1fr_1.4fr_auto] gap-4 border-b border-black/8 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-smoke">
        <span>Caso</span>
        <span>Propiedad</span>
        <span>Filtro MAP-9</span>
      </div>

      {/* Filas con veredicto escalonado */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.22, delayChildren: 0.35 } } }}
      >
        {rows.map((r) => (
          <motion.div
            key={r.case}
            variants={{
              hidden: { opacity: 0, x: -10 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: ease.out } },
            }}
            className={`grid grid-cols-[1fr_1.4fr_auto] items-center gap-4 px-5 py-3 text-sm transition-colors hover:bg-charcoal/[0.04] ${
              r.verdict === 'candidata' ? 'bg-petrol/5' : ''
            }`}
          >
            <span className="font-mono text-[12.5px] text-charcoal/70">{r.case}</span>
            <span className={r.verdict === 'descartar' ? 'text-smoke line-through' : 'text-charcoal'}>
              {r.addr}
            </span>
            <span className="flex items-center justify-end gap-2">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${tag[r.verdict]}`}>
                {tagLabel[r.verdict]}
              </span>
              <span className="inline-block w-32 text-right text-[11px] text-smoke">{r.reason}</span>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
