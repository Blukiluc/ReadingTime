const article = document.querySelector("article");

if (article) {
    const text = article.textContent;
    const wordMatchRedExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRedExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("h1");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min reading time`;

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);
}