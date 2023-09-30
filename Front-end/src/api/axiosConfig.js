import axios from 'axios';

export default axios.create({
    baseURL: '  https://916e-45-118-49-35.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true"}
});