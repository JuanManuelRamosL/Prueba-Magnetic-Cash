import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api'

export default function ShoeDetail() {
  const { id } = useParams()
  const [shoe, setShoe] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchShoe()
   
  }, [id])

  async function fetchShoe() {
    try {
      setLoading(true)
      const res = await api.get(`/shoes/${id}/`)
      setShoe(res.data)
    } catch (err) {
      console.error('Error fetching shoe', err)
      alert('No se encontró la zapatilla')
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete() {
    if (!confirm('Eliminar esta zapatilla?')) return
    try {
      await api.delete(`/shoes/${id}/`)
      navigate('/')
    } catch (err) {
      console.error('Error deleting', err)
      alert('No se pudo eliminar')
    }
  }

  if (loading) return <p>Cargando...</p>
  if (!shoe) return null

  return (
    <div>
      <h2>{shoe.name}</h2>
      <p><strong>Marca:</strong> {shoe.brand}</p>
      <p><strong>Precio:</strong> ${shoe.price}</p>
      <p><strong>Talle:</strong> {shoe.size ?? '-'}</p>
      <p><strong>Stock:</strong> {shoe.stock ?? '-'}</p>
      <div className="card-actions">
        <button className="btn danger" onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  )
}
