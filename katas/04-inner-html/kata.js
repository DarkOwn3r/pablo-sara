const data = [
    {
        image: `https://picsum.photos/id/28/800/300`,
        category: `travel`,
        title: `Trip Planning for Total Beginners`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet reprehenderit nesciunt repellendus dolorem ipsa eaque repudiandae odit aperiam est assumenda, impedit alias doloremque temporibus eligendi neque, qui quas esse.`
    },
    {
        image: `https://picsum.photos/id/35/800/300`,
        category: `travel`,
        title: `7 ways to survive in the desert`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet reprehenderit nesciunt repellendus dolorem ipsa eaque repudiandae odit aperiam est assumenda, impedit alias doloremque temporibus eligendi neque, qui quas esse.`
    },
    {
        image: `https://picsum.photos/id/37/800/300`,
        category: `travel`,
        title: `5 amazing travel destinations`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet reprehenderit nesciunt repellendus dolorem ipsa eaque repudiandae odit aperiam est assumenda, impedit alias doloremque temporibus eligendi neque, qui quas esse.`
    }
]

const article1 = `<article>
<img src=${data[0].image}>
<div class="content">
    <p class="category">${data[0].category}</p>
    <h2>${data[0].title}</h2>
    <p>${data[0].content}</p>
</div>
</article>`

const article2 = `<article>
<img src=${data[1].image}>
<div class="content">
    <p class="category">${data[1].category}</p>
    <h2>${data[1].title}</h2>
    <p>${data[1].content}</p>
</div>
</article>`

const article3 = `<article>
<img src=${data[2].image}>
<div class="content">
    <p class="category">${data[2].category}</p>
    <h2>${data[2].title}</h2>
    <p>${data[2].content}</p>
</div>
</article>`

const articlesList = [article1, article2, article3]
const articles = articlesList.join('\n')

const page = `<main>
${articles}
</main>`;

export function kata() {
  document.body.innerHTML = page;
}
