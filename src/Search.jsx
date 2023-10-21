
import {useGlobalContext} from './context'

function search() {
  const {query, setQuery, isError} = useGlobalContext();
  return (
    <div className="form-box">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="input-area">
        <input type="text" placeholder='Search for movies' value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button type="submit">Search</button>
        </div>
      </form>
      <div className="error-card">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  )
}

export default search
