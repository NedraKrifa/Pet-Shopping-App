import React from 'react'

function Search() {
    return (
        <form style={{ display:'flex',width:'700px',height:'50px' }}>
            <input
                type="text"
                name="title"
                placeholder="search for products ..."
                style={{flex: '10', padding: '5px'}}
            />
            <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}
            />
        </form>
    )
}
export default Search