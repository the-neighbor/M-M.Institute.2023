async function getMe()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}me` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

async function getFeed()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/feed` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

async function getTagsFeed()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/tagsfeed` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

async function getGlobalFeed()
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/global` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

async function getTag(tag)
{
    const result = await fetch(`${process.env.REACT_APP_API_URL}tags/${encodeURIComponent('#' +  tag)}` ,{
        headers: { 
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    const data = await result.json()
    return data
}

async function getPost(id) {
    const result = await fetch(`${process.env.REACT_APP_API_URL}posts/${id}`)
    const data = await result.json()
    return data
}

async function deletePost(id) {
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


async function loggedIn() {
    const me = await getMe()
    if (me.username) {
        return true
    }
    return false
}

module.exports = {getMe, getFeed, getGlobalFeed, getTagsFeed, getTag, getPost, loggedIn, deletePost}