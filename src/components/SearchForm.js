import React from 'react';

const SearchForm = props => {
    return (
        <div className='searchForm'>
            <form>
                <label htmlFor='name'>Search for User: </label>
                <input
                 id='name'
                 type='text'
                 name='textfield'
                 />
            </form>

        </div>
    )
}

export default SearchForm;