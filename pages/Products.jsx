export default function Products() {
  const products = [
    { id: 1, name: 'React Course', price: '$99' },
    { id: 2, name: 'JavaScript Guide', price: '$49' },
    { id: 3, name: 'Web Dev Bundle', price: '$149' },
  ]

  return (
    <div>
      <h1>Products</h1>
      <p>List of available products:</p>
      
      {products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  )
}
