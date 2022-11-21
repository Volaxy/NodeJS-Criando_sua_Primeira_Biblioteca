function extractLinks(links) {
    return links.map(link => Object.values(link).join());
}

async function verifyStatus(urls) {
    let status = await Promise.all(
        urls.map(async url => {
            try {
                let response = await fetch(url);
    
                return response.status;
            } catch (error) {
                return handleError(error);
            }
        })
    );

    return status;
}

function handleError(error) {
    if(error.cause.code === "ENOTFOUND") {
        return "Link not found";
    } else {
        return "Something went wrong";
    }
}

export default async function validateLinks(links) {
    let urls = extractLinks(links);
    let status = await verifyStatus(urls);

    return urls.map((url, index) => ({
        url,
        status: status[index]
    }));
}