let NEW_REDDIT_LINK = "www.reddit.com";
let OLD_REDDIT_LINK = "old.reddit.com";
let REDDIT_MEDIA_LINK = "www.reddit.com/media";
let REDDIT_GALLERY_LINK = "www.reddit.com/gallery";
var all_links = document.getElementsByTagName("a");
var reddit_links = [];

try
{
    for(var i=0; i<all_links.length; i++) {
        if(all_links[i].href.includes(NEW_REDDIT_LINK) && !all_links[i].href.includes(REDDIT_MEDIA_LINK) && !all_links[i].href.includes(REDDIT_MEDIA_LINK)){
            old_link = all_links[i].href;
            all_links[i].href = all_links[i].href.replace(NEW_REDDIT_LINK,OLD_REDDIT_LINK);
            //console.log(old_link+" is being replaced with "+ all_links[i].href);
        }
        else
        {
            console.info("<Take me Home> No work to be done");
        }
  }
  fallback();
}
catch(error)
{
    console.error("<Take me Home> Unable to redirect to old reddit because of error: "+error);
}

function fallback(){
    try
    {
        var newRedditURL = window.location.href;
        //console.log(newRedditURL)
        if(newRedditURL.includes(NEW_REDDIT_LINK) && !newRedditURL.includes(REDDIT_MEDIA_LINK) && !newRedditURL.includes(REDDIT_MEDIA_LINK))
        {
            oldRedditURL = newRedditURL.replace(NEW_REDDIT_LINK,OLD_REDDIT_LINK);
            //console.log(oldRedditURL)
            window.location.replace(oldRedditURL);
        }
        else
        {
            console.info("<Take me Home> No work to be done");
        }
    
    }
    catch(error)
    {
        console.error("<Take me Home> Unable to redirect to old reddit because of error: "+error);
    }
    
}