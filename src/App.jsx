const App = () => {
  const address = 'Nairobi';
  const names = ['Mathew', 'Mark', 'John']
  const isLoggedIn = true;
  return (
    <>
    <div className='text-5xl'>
      App

      </div>
      <p>welcome to { address}</p>
      <p>Hello</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name }</li>
        ))}
      </ul>
      {isLoggedIn && <h1>Hello Member</h1>}
    
    </>
  )
}

export default App;