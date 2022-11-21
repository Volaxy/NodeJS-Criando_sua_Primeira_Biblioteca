function extractLinks(links) {
    return links.map(link => Object.values(link).join());
}

function validateLinks(links) {
    return extractLinks(links);
}

export default validateLinks;