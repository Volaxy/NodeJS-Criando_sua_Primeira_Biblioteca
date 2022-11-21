function extractLinks(links) {
    return links.map(link => Object.values(link).join());
}

async function verifyStatus(urls) {
    // The "all()" function receives a list of promises and solve all of then
    let status = await Promise.all(
        urls.map(async url => {
            let response = await fetch(url);
    
            return response.status;
        })
    );

    return status;
}

export default async function validateLinks(links) {
    let urls = extractLinks(links);
    let status = await verifyStatus(urls);

    console.log(status);

    return status;
}

//[gatinho salsicha](http://gatinhosalsicha.com.br/)