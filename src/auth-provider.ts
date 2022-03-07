import { User } from 'screens/project-list/search-panel'

const localStorageKey = '__auto_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data: { username: string; password: string }) => {
    fetch(`${''}/login`, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(async (res: Response) => {
        return handleUserResponse(await res.json())
    })
}
