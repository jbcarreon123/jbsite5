document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header .header--big');
    if (header) {
        let t = header.textContent;
        let c = t?.split('');
        if (c) header.innerHTML = c.map((s, i) => `<span style="--d: ${i * 10}ms">${s}</span>`).join('');
    }
})