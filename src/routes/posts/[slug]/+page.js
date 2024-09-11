import { marked } from 'marked'

export const load = async ({ params }) => {

    console.log("load() running...");

    // Blog post
    import post from "$lib/data/posts/sample.html.md?raw"
    // import post from "$lib/data/posts/sample.html.md?raw"


    /** Get JSON - https://stackoverflow.com/a/22790025/11039898
     * @param {string} url JSON file URL
     * @param {boolean} parse Whether or not to convert into a JS object
     * @returns 
     */
    function get(url, parse=false) {
        var rq = new XMLHttpRequest(); // a new request
        rq.open("GET", url, false);
        rq.send(null);
        return parse ? JSON.parse(rq.responseText) : rq.responseText;
    }

    // let post = await fetch('$lib/data/posts/test.md?raw');
    // post = await post.text();

    // Remove data section from document
    const body = post.split("[/data]\r\n")[1];
    let info = post
        .split('[/data]')[0] // Get data section
        .split("\r\n") // Split at new lines
        .filter(e => e !== "" && e !== "[data]") // Remove empty lines
        .map(e => { // Turn into object entry arrays & make keys lowercase
            let value = e.split(": ");
            value[0] = value[0].toLowerCase();
            return value;
        });
    info = Object.fromEntries(info);
    // console.log(data);


    return {
        info, body
    }
}