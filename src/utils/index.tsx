import axios from 'axios';
import { UNSPLASH_KEY } from '../config/index';

export const getImages = async () => {
  try {
    let res = await axios.get('https://api.unsplash.com/search/photos?query=apartments%20interiors', {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_KEY}`
      }
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
}