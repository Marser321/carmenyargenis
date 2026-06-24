import { createContext, useContext } from 'react'

/**
 * Paso actual visible DENTRO de la slide (0 = estado base; cada → avanza un paso
 * hasta `steps`, y solo entonces salta a la siguiente slide). Lo provee el Deck;
 * lo leen los componentes <Step/> para revelar contenido punto por punto en vivo.
 */
export const StepContext = createContext(0)

export function useStep() {
  return useContext(StepContext)
}
