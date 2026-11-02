const project_viewport = document.getElementById("project_viewport");
const image_size = 160;
const image_margin = 10;

const projects = [
    {
        repo: "https://github.com/b1um2/flaker",
        desc: "floor map drawing web-app",
        title: "flaker",
        image: "https://opengraph.githubassets.com/1/b1um2/flaker"
    },

    {
        repo: "https://github.com/b1um2/descare",
        desc: "purely p2p chatting app",
        title: "descare",
        image: "https://opengraph.githubassets.com/1/b1um2/descare"
    },

    {
        repo: "https://github.com/b1um2/WaterWorks",
        desc: "game written in mips for a university project",
        title: "water works",
        image: "https://opengraph.githubassets.com/1/b1um2/WaterWorks"
    },
];

function generate_table() {
    const width = document.documentElement.clientWidth - 30;
    let table_width = Math.floor(width / (image_size+image_margin));
    table_width = table_width <= 0 ? 1 : table_width;

    let image_size_mult = (image_size+image_margin)
    image_size_mult = width / (image_size_mult*table_width)

    let html_table_projects = `<table class="project_table" style="table-layout: fixed;">`;
    
    for (let i = 0; i < projects.length;) {
        html_table_projects += "<tr>";

        for (let j = 0; j < table_width && i < projects.length; j++) {
            let dict = projects[i];
            html_table_projects += `<th class="project_grid">`;
            html_table_projects += `<div class="project_div" style="width: ${(image_size+image_margin)*image_size_mult}px; overflow: hidden;">`;
            html_table_projects += `<a class="project_title" href="${dict.repo}" target="_blank">${dict.title}</a><br>`;
            html_table_projects += `<img src="${dict.image}" style="width: ${image_size*image_size_mult}px; height: ${image_size*image_size_mult}px; object-fit: contain;">`;
            html_table_projects += `<p class="project_description">${dict.desc}</p>`;
            html_table_projects += `</div>`;
            html_table_projects += `</th>`;
            i++;
        }

        html_table_projects += "</tr>";
    }

    html_table_projects += "</table>";

    return html_table_projects;
}

window.onresize = function(ev) {
    project_viewport.innerHTML = generate_table();
};

window.onresize();