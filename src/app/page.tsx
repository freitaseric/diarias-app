'use client'

import { FormEvent, useState } from 'react'

export default function HomePage() {
  const [matricula, setMatricula] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      alert('Não implementado!')
    } catch (error) {
      setError(`${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Gerar Relatório em PDF
        </h1>
        <p className="text-gray-600 mb-6">
          Digite o nome de uma pessoa cadastrada para gerar o relatório.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="matricula"
              className="block text-gray-700 text-sm font-bold mb-2 sr-only"
            >
              Matrícula do Servidor
            </label>
            <input
              type="text"
              id="matricula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              placeholder="Ex: 123456-0"
              required
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isLoading ? 'Gerando...' : 'Gerar PDF'}
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 font-semibold">{error}</p>}
      </div>
    </main>
  )
}
