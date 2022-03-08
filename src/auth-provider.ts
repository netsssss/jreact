import { User } from 'screens/project-list/search-panel'

const localStorageKey = '__auto_provider_token__'
const apiUrl = process.env.REACT_APP_API_URL

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = async (data: { username: string; password: string }): Promise<User> => {
    const res = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (res.ok) {
        return handleUserResponse(await res.json())
    }
    return await Promise.reject(data)
}

export const register = async (data: { username: string; password: string }): Promise<User> => {
    const res = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (res.ok) {
        return handleUserResponse(await res.json())
    }
    return await Promise.reject(data)
}

export const logout = async () => window.localStorage.removeItem(localStorageKey)
