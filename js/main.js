document.addEventListener("DOMContentLoaded", async () => {
  // Fungsi untuk memuat komponen HTML ke dalam elemen yang ditentukan
  async function loadComponent(selector, filePath) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`Gagal memuat ${filePath}`);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error("Error memuat komponen:", filePath, err);
    }
  }

  // Tentukan basePath berdasarkan URL
  const basePath = (() => {
    const pathname = window.location.pathname;

    if (pathname.includes("/en/")) {
      return "../../../";
    }

    if (pathname.includes("/about-us")) {
      return "..";
    }

    return ".";
  })();

  // Muat header dan footer
  // await loadComponent("header", `${basePath}/components/header.html`);
  // await loadComponent("footer", `${basePath}/components/footer.html`);

});


