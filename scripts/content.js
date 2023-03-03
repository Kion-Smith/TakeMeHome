try
{
    var newRedditURL = window.location.href
    //console.log(newRedditURL)
    if(newRedditURL.includes("www.reddit.com"))
    {
        oldRedditURL = newRedditURL.replace("www.reddit.com","old.reddit.com")
        //console.log(oldRedditURL)
        window.location.replace(oldRedditURL);
    }
    else
    {
        console.info("<Take me Home> No work to be done")
    }

}
catch(error)
{
    console.error("<Take me Home> Unable to redirect to old reddit because of error: "+error)
}

