import { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { cleanObject, useDebounce } from 'utils'
import { useHttp } from 'utils/http'

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debounceParam = useDebounce(param, 500)
    const [list, setList] = useState([])
    const client = useHttp()

    useEffect(() => {
        client('projects', { data: cleanObject(debounceParam) }).then(setList)
    }, [debounceParam, client])

    // mount
    useEffect(() => {
        console.log('hahahaa')
        client('users').then(setUsers)
    }, [client])

    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}
