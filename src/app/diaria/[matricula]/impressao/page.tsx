'use client'

import React from "react"
import { useCallback } from "react"

interface ImprimirDiariaPageProps {
  params: Promise<{ matricula: string }>
}

export default function ImprimirDiariaPage({ params }: ImprimirDiariaPageProps) {
  const { matricula } = React.use(params)

  const print = useCallback(() => {
    window.print()
  }, [])

  return (
    <div>
      <h1>Processo de Diária</h1>
      <p>Matrícula: {matricula}</p>

      <button onClick={print}>Imprimir</button>
    </div>
  )
}
