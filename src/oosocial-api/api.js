import * as axios from 'axios'

//настройка подключения к удалённому серверу
/*
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_SAMURAI,
    withCredentials: true,
    headers: {'API-KEY': process.env.REACT_APP_API_KEY_SAMURAI}
});
*/

//настройка подключения к локальному серверу

const instance = axios.create({
    baseURL: 'http://localhost:4000/api/',  //'https://oo-server.herokuapp.com/api/',
    withCredentials: true
});

const savePhotoSingle = (route, photo) => {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(route, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}


export const usersAPI = {

    getByPage(page = 1) {
        return instance.get('users?page=' + page);
    },

    follow(id) {
        return instance.post('follow/' + id)
    },

    unfollow(id) {
        return instance.delete('follow/' + id)
    },

    getFriends(page = 1) {
        return instance.get('friends?page=' + page);
    },

    getFriendsById(page = 1, id) {
        return instance.get(`friends?page=${page}&id= ${id}`);
    }
}

export const profileAPI = {

    getStatus(id) {
        return instance.get('profile/status/' + id)
    },

    setStatus(statusText) {
        return instance.put('profile/status/', {status: statusText})
    },

    getUserProfile(id) {
        return instance.get('profile/' + id)
    },

    setProfile(profile) {
        return instance.put('profile/', profile)
    },


    getFollowStatus(id) {
        return instance.get('follow/' + id)
    },

    savePhoto(photo) {
        return savePhotoSingle('profile/photo/', photo)
    }


}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },

    logout() {
        return instance.delete('auth/login')
    },

    login(email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    register(email, password, login, fullName) {
        return instance.post('auth/register', {email, password, login, fullName})
    }
}


export const mediaAPI = {
    getPhotos(id) {
        return instance.get('/photos?id=' + id)
    },

    savePhoto(photo) {
        return savePhotoSingle('photo/', photo)
    },

    setAsProfilePhoto(id) {
        return instance.put('photo/profile?id=' + id)
    },

    deletePhoto(id){
        return instance.delete('photo?id=' + id)
    }
}
