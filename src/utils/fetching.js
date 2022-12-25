export async function getMe()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}me` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

export async function getFeed()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/feed` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

export async function getTagsFeed()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/tagsfeed` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

export async function getGlobalFeed()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/global` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

export async function getTag(tag)
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}tags/${encodeURIComponent('#' +  tag)}` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

export async function getPost(id) {
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/${id}`)
    const data = await result.json()
    return data
}

export async function deletePost(id) {
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/${id}`,
    {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }
    )
    const data = await result.json()
    return data
}


export async function loggedIn() {
    const me = await getMe()
    if (me.username) {
        return true
    }
    return false
}

