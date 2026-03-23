const loadComponent = async (id, file) => {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
};

loadComponent("footer", "/tech-examples/reusable-html/components/footer.html");
