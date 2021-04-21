import react from 'react';
import './SearchBox.css';

const SearchBox =({  onInputChange })=>{
    return(
        <div className="Search-container">
            <input onChange={(event)=>onInputChange(event.target.value)} placeholder="Type a word......." className="Search-input"/>
        </div>
    );
};

export default SearchBox;