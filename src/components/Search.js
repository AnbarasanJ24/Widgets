import React, { useEffect, useState } from 'react';
import wikiApi from '../api/wikiApi';
import './Search.scss';

const Search = () => {

    const [term, setTerm] = useState('Programming');
    const [result, setResult] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await wikiApi.get('', {
                params: {
                    srsearch: term
                }
            })
            console.log(data.query.search)
            setResult(data.query.search);
        }
        if (term) {
            search();
        } else {
            const timerId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 5000);

            return () => {
                clearTimeout(timerId);
                console.log("Clean up")
            }

        }

    }, [term])





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