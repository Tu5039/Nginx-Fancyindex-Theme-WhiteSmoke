// loadmd.js
// Load HEADER.md and FOOTER.md to page.
// © 2017, Lilian Besson (Naereen) and contributors,
// open-sourced under the MIT License, https://lbesson.mit-license.org/
// hosted on GitHub, https://GitHub.com/Naereen/Nginx-Fancyindex-Theme

// © 2021, Tu5039 (三水有余)
// open-sourced under the MIT License, https://raw.githubusercontent.com/Tu5039/Nginx-Fancyindex-Theme-WhiteSmoke/main/LICENSE
// hosted on GitHub, https://GitHub.com/Tu5039/Nginx-Fancyindex-Theme-WhiteSmoke

var converter = new showdown.Converter({ tables: true });
$("#raw_include_HEADER_md").load("/Nginx-Fancyindex-Theme-WhiteSmoke/HEADER.md", function () {
    var elem = document.querySelector("#raw_include_HEADER_md");
    // strip leading whitespace so it isn't evaluated as code
    var text = elem.innerHTML;
    text = text.replace(/\n[ ]*/g, '\n');
    var html = converter.makeHtml(text);
    // here, have some HTML
    elem.innerHTML = html;
});
$("#raw_include_README_md").load("/Nginx-Fancyindex-Theme-WhiteSmoke/FOOTER.md", function () {
    var elem = document.querySelector("#raw_include_README_md");
    // strip leading whitespace so it isn't evaluated as code
    var text = elem.innerHTML;
    text = text.replace(/\n[ ]*/g, '\n');
    var html = converter.makeHtml(text);
    // here, have some HTML
    elem.innerHTML = html;
});