'use client'

import React from "react"
import { useCallback, useEffect, useState } from "react"
import { Servidor } from "~/app/generated/prisma"
import { prisma } from "~/database"

interface ImprimirDiariaPageProps {
  params: Promise<{ matricula: string }>
}

export default function ImprimirDiariaPage({ params }: ImprimirDiariaPageProps) {
  const [servidor, setServidor] = useState<Servidor>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>()
  const { matricula } = React.use(params)

  const print = useCallback(() => {
    if (!isLoading) window.print()
  }, [])

  useEffect(() => {
    setIsLoading(true)
      ; (async () => {
        try {
          const servidor = await prisma.servidor.findUniqueOrThrow({ where: { matricula } })
          setServidor(servidor)
        } catch (error) {
          setError(`${error}`)
        } finally {
          setIsLoading(false)
        }

      })()
  }, [])

  if (error) return (
    <div>
      <h1>Ops... ocorreu um erro!</h1>
      <p>{error}</p>
    </div>
  )

  if (isLoading) return (
    <div>
      <p>Carregando...</p>
    </div>
  )
  if (!isLoading)
    return (
      <div>
        <h1>Processo de Diária</h1>
        <p>Servidor: {servidor?.nome}</p>
        <p>Matrícula: {servidor?.matricula}</p>
        <p>CPF: {servidor?.cpf}</p>

        <button onClick={print}>Imprimir</button>
      </div>
    )
}
