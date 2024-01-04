function showBrowserWidth() {
    width = window.innerWidth
    document.querySelector('p').textContent = `Width: ${width}px`
}
window.onload = showBrowserWidth
window.onresize = showBrowserWidth