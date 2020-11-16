import React from 'react';
import './SearchBar.css';


const searchOptions = {
    "Best Match": 'best_match',
    "Highest Rated": 'rating',
    "Most Reviewed": 'review_count'
}

class SearchBar extends React.Component {
    renderSearchOptions() {
        const optionsList = [];
        for (let option in searchOptions) {
            const searchKey = option;
            const searchValue = searchOptions[searchKey];

            const listItem = <li key={searchValue}>{searchKey}</li>;
            optionsList.push(listItem);

        }
        return optionsList;
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSearchOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;