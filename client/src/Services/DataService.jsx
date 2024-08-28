//This will hold our helper functions or method.

//helper function to check our token.
const checkToken = () => {
    let result = false;
    let lsData = localStorage.getItem("Token");
    if(lsData && lsData != null)
    {
        result = true;
    }
    return result;
}

//helper function or method to createAccount, async and await
//fetch() json(), stringify
const createAccount = async (createduser) => 
{
    const result = await fetch('http://localhost:5006/api/User/AddUsers',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createduser)
    })
    if(!result.ok)
    {
        const message = `Yo yo you have an Error Check your code!${result.status}`
        throw new Error(message);
    }
        let data = await result.json();
        console.log(data);
        
}

const login = async (loginUser) => 
{
    const result = await fetch('http://localhost:5173/api/User/Login',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginUser)
    })
    if(!result.ok)
    {
        const message = `Yo yo you have an Error Check your code!${result.status}`
        throw new Error(message);
    }
        let data = await result.json();
        console.log(data);
        return data;
}

    const GetLoggedInUser = async (username) => 
    {
       let result = await fetch(`"http://localhost:5021/api/User/GetUserByUsername/${username}"`)
       console.log(result)

       userData = await result.json();
       console.log(userData)
    }

    const LoggedInData = () =>
    {
        return userData;
    }

    const AddBlogItems = async (blogItems) =>
        result = await fetch("http://localhost:5021/api/User/AddblogItems",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blogItems)
        })
        if(!result.ok)
        {
            const message = `Check Yourself, ERROR Your Bad CODE!${result.status}` throw new Error(message);
        }
            let data = await result.json();
            console.log(data);
            return data;
        }
        const getBlogItems = async () =>
        {
            let result = await fetch("http://localhost:5021/api/User/GetBlogItems")

            let data = await result.json();
            console.log(data, "from our getblogItems method")
            return data;
        }

        const GetItemsByUserId = async (UserId) =>
        {
            let result = await fetch(`http://localhost:5021/api/User/GetBlogItems"`)
        }
    

   
    



export {checkToken,createAccount,login,GetLoggedInUser}