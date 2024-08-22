import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams();

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  )
}

export default Produto
