const imgTitleArray = ['smile', 'sign', 'service', 'pig', 'car'];
console.log(imgTitleArray);
$(document).ready(function () {
    const blogRef = $('#blog');
    blogRef.append('<div>');
    for (let i = 0; i < imgTitleArray.length; i++) {
        const post = createBlogPost(i, imgTitleArray[i]);
        blogRef.append(post);
    }

    blogRef.append('</div>');
});
//array of images names
// builg blog item - with the title, the img, and lurom ipusom
// add to the blog one item at a time/ later > at once for all


function createBlogPost(index, imgTitle) {
    const randomText = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                      <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>`;

    return $("div.row").html(`<h3>${imgTitle}</h3>
                    <div><img src="img/${imgTitle}.jpg"><p>${randomText}</p></div>`);
}

