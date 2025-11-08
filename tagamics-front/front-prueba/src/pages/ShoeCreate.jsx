import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

export default function ShoeCreate() {
  const [form, setForm] = useState({ name: '', brand: '', price: '', size: '', stock: '' })
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function onSubmit(e) {
    e.preventDefault()
    // validations
    if (!form.name || !form.brand || !form.price) {
      alert('name, brand y price son obligatorios')
      return
    }
    try {
      setSaving(true)
      const payload = {
        name: form.name,
        brand: form.brand,
        price: parseFloat(form.price),
        size: form.size ? parseInt(form.size, 10) : null,
        stock: form.stock ? parseInt(form.stock, 10) : null
      }
      await api.post('/shoes/', payload)
      navigate('/')
    } catch (err) {
      console.error('Error creating', err)
      alert('No se pudo crear la zapatilla')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h2>Agregar zapatilla</h2>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Nombre *
          <input name="name" value={form.name} onChange={onChange} />
        </label>
        <label>
          Marca *
          <input name="brand" value={form.brand} onChange={onChange} />
        </label>
        <label>
          Precio *
          <input name="price" value={form.price} onChange={onChange} type="number" step="0.01" />
        </label>
        <label>
          Talle
          <input name="size" value={form.size} onChange={onChange} type="number" />
        </label>
        <label>
          Stock
          <input name="stock" value={form.stock} onChange={onChange} type="number" />
        </label>

        <div className="form-actions">
          <button className="btn" type="submit" disabled={saving}>{saving ? 'Guardando...' : 'Guardar'}</button>
        </div>
      </form>
    </div>
  )
}
