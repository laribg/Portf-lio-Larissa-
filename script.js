function FontSize(type) {
    var ids = ["#h1-01", "#h1-02", "#h1-03", "#h1-04", "#h3", "#ul", "#p-01", "#p-02", "#p-03", "#p-10", "#h4-01", "#h4-02", "#h4-03", "#h4-04", "#h4-05", "#h4-06"];
    ids.forEach(id => {
        var elemento = document.querySelector(id);
        var size = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
        size = parseFloat(size);
        if (type == 'aumentar') {
            elemento.style.fontSize = (size + 5) + "px";
        }
        else {
            elemento.style.fontSize = (size - 5) + "px";
        }
    })
}