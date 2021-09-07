import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wikiApi';
import './Search.scss';

const Search = () => {

    const [term, setTerm] = useState('Programming');
    const [data, setData] = useState([]);

    useEffect(() => {

        const search = async () => {
            const { data } = await wikiApi.get('', {
                params: {
                    srsearch: term
                }
            })
            console.log(data.query.search)
            setData(data.query.search);
        }
        if (term) {
            search();
        }

    }, [term])

    const onInputChange = (e) => {
        setTerm(e.target.value);
    }

    const renderedItems = data.map(item => {
        return (
            <React.Fragment key={item.pageid}>
                <h1>{item.title}</h1>
                {item.snippet}
            </React.Fragment>
        )
    })

    return (
        <div className="search-container">
            <div>
                <input
                    value={term}
                    type="text"
                    name="search"
                    id="search"
                    onChange={onInputChange}
                    placeholder="search" />
            </div>
            <div className="search-container__list">
                {renderedItems}
            </div>

        </div>
    )
}

export default Search;