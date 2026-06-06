import { useEffect, useState } from 'react'
import { getMenu } from '../api/api.js'

export function useQuery() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const menu = await getMenu()
        setData(menu)
      } catch {
        setError('Unable to load menu. Please check backend server connection.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, loading, error }
}
