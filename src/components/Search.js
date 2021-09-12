import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wikiApi';
import './Search.scss';

const Search = () => {

    const [term, setTerm] = useState('Programming');
    const [debouncedTerm, setdebouncedTerm] = useState(term);
    const [result, setResult] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setdebouncedTerm(term);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {

        const search = async () => {
            const { data } = await wikiApi.get('', {
                params: {
                    srsearch: debouncedTerm
                }
            })
            console.log(data.query.search)
            setResult(data.query.search);
        }
        search();
    }, [debouncedTerm])





    const onInputChange = (e) => {
        setTerm(e.target.value);
    }

    const renderedItems = result.map(item => {
        return (
            <div className="search-container__card" key={item.pageid}>
                <div className="search-container__content">
                    <h3>{item.title}</h3>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                </div>
                <a href={`https://en.wikipedia.org?curid=${item.pageid}`}>Go</a>
            </div>
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