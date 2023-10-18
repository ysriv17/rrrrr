// import React, { useState } from 'react';
// import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = () => {
//         onSearch(searchTerm);
//     };

//     return (
//         <div>
//             <TextField
//                 label="Search..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 variant="outlined"
//                 InputProps={{
//                     endAdornment: (
//                         <InputAdornment position="end">
//                             <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
//                         </InputAdornment>
//                     ),
//                 }}
//             />
//         </div>
//     );
// };

// export default SearchBar;