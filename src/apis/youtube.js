import axios from 'axios';

const KEY = 'AIzaSyAiZpCLROk5wqXZATstev1ID51Vhvjp2P0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});