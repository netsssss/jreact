import * as Auth from 'auth-provider'
import { useAuth } from 'context/auth-context'
import qs from 'qs'
import { useCallback } from 'react'
const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
    token?: string
    data?: object
}

export const http = async (endpoint: string, { data, token, headers, ...customConfig }: Config = {}) => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type': data ? 'application/json' : ''
        },
        ...customConfig
    }

    if (config.method.toUpperCase() === 'GET') {
        endpoint += `?${qs.stringify(data)}`
    } else {
        config.body = JSON.stringify(data || {})
    }

    const res = await window.fetch(`${apiUrl}/${endpoint}`, config)

    // 登录失效
    if (res.status === 401) {
        await Auth.logout()
        window.location.reload()
        return Promise.reject({ message: '请重新登录' })
    }

    const json = await res.json()
    if (res.ok) {
        return json
    } else {
        return Promise.reject(json)
    }
}

export const useHttp = () => {
    const { user } = useAuth()
    return useCallback((...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: user?.token }), [user?.token])
}
