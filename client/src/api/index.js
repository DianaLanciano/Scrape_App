import axios from 'axios';


const url = 'http://localhost:5000/mybag';

export const fetchBags = () => axios.get(url);


