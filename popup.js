// https://stackoverflow.com/questions/49546645/clicking-buttons-on-a-website-with-a-chrome-extension
function checkSite(){
    console.log("checking site")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        let activeTabUrl = activeTab.url;
        console.log(activeTabUrl);
        let urlName1 = activeTabUrl.replace("https://", '');
        let urlName2 = urlName1.replace("http://", '');
        let urlName3 = urlName2.replace("www.", '');
        console.log(urlName3);
        let i = 0;
        while(true){
            if(urlName3[i] == "/"){
                break;
            }
            i++;
        }
        let urlName4 = urlName3.slice(0, i);
        console.log(urlName4);
        let url = "http://site-checker.org/en/www/" + urlName4;
        console.log("url")
        chrome.tabs.create({ url: url });
    });
}

document.getElementById("checkSite").addEventListener('click', checkSite);
