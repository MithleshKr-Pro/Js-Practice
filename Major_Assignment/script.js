// collapsing navbar
const topics = document.querySelector("#facts");

const topicsDiv = document.createElement("div");
topicsDiv.classList.add("topicsExtension");
topicsDiv.innerHTML = `
            <div class="topicsExtensionChild">
                <div>NLP</div>
                <hr>
                <div>Computer Vision</div>
                <hr>
                <div>AI in Coding</div>
                <hr>
                <div>AI in Gaming</div>
                <hr>
                <div>Ai in Healthcare</div>

            </div>
            `;
document.body.appendChild(topicsDiv);

let count=0;
topics.addEventListener("mouseover", (event) => {
    event.stopPropagation(); // prevents the mouseover event from bubbling up to the body
    //get the position of mouseovered event
    const pos = topics.getBoundingClientRect();
    topicsDiv.style.top = `${pos.bottom + window.scrollY}px`;
    topicsDiv.style.left = `${pos.left + window.scrollX}px`;
    if(aboutCnt==1){
        aboutDiv.classList.remove("show");
        aboutCnt=0;
    }
    if(count==0){
        console.log("mouseovered and count is 0");
            topicsDiv.classList.toggle("show");
            const items = topicsDiv.querySelectorAll(".topicsExtensionChild div");
            items.forEach((item, index) => {
            item.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
        });
            count=1;
            console.log(count);
        }
});

// // const body1 = document.querySelectorAll("body *:not(#facts)");
// const body1 = Array.from(document.body.getElementsByTagName('*'))
// .filter(elem => elem !== topics );
// // const body2 = document.querySelectorAll("body *:not(topicsDiv)");
// body1.forEach(body => {
//     body.addEventListener("mouseover",()=>{
//         if(count==1){
//         console.log("mouseovered body and count is 1");
//         document.body.removeChild(topicsDiv);
//         count=0;
//         }
//     });
// });

document.addEventListener("mouseover",(event)=>{
    if (count===1 && !topicsDiv.contains(event.target) && event.target !== topics){
        topicsDiv.classList.remove("show");
        count=0;
    }
});


const about = document.querySelector("#about");
const aboutDiv = document.createElement("div");
aboutDiv.classList.add("aboutExtension");
aboutDiv.innerHTML = `
<div class="aboutExtensionChild">
    <div><a href="about.html#mission">Our Mission</a></div>
    <hr>
    <div><a href="about.html#whatWeOffer">What We Offer</a></div>
    <hr>
    <div><a href="about.html#team">Our Team</a></div>
</div>
`;
document.body.appendChild(aboutDiv);

let aboutCnt=0;
about.addEventListener("mouseover",(event)=>{
    event.stopPropagation();
    if(count==1){
        topicsDiv.classList.remove("show");
        count=0;
    }
    if(aboutCnt==0){
        const pos = about.getBoundingClientRect();
        aboutDiv.style.top=`${pos.bottom + window.scrollY}px`;
        aboutDiv.style.left=`${pos.left + window.scrollX}px`;
        aboutDiv.classList.toggle("show");

        const items = aboutDiv.querySelectorAll(".aboutExtensionChild div");
        items.forEach((item, index) => {
        item.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
        });
        aboutCnt=1;
    }

})
//close when mouse movement outside
document.addEventListener("mouseover",(event)=>{
    if(aboutCnt===1 && !aboutDiv.contains(event.target) && event.target!==about){
        aboutDiv.classList.remove("show");
        aboutCnt=0;
    }
});



const blogs = document.querySelector("#blogs");
const blogsDiv = document.createElement("div");
blogsDiv.classList.add("blogsExtension");
blogsDiv.innerHTML = `
    <div class="blogsExtensionChild">
        <div><a>Today's / Latest Blog</a></div>
        <hr>
        <div><a>Most Popular One</a></div>
        <hr>
        <div><a>First Blog</a></div>
    </div>
`;
document.body.appendChild(blogsDiv);

let blogCnt = 0;
blogs.addEventListener("mouseover",(event) =>{
    event.stopPropagation();
    // blogs.style.border-bottom = ``;
    if(aboutCnt == 1 || count==1){
        aboutDiv.classList.remove("show");
        topicsDiv.classList.remove("show");
        count=0,aboutCnt=0;
    }
    if(blogCnt == 0 ){
        const pos = blogs.getBoundingClientRect();
        blogsDiv.style.top = `${pos.bottom + window.scrollY}px`;
        blogsDiv.style.left = `${pos.left + window.scrollX}px`;
        blogsDiv.classList.toggle("show");

        const items = blogsDiv.querySelectorAll(".blogsExtensionChild div");
        items.forEach((item, index) => {
        item.style.animation = `slideIn 0.3s ease forwards ${index * 0.1}s`;
        });

        blogCnt=1;

    }
})

document.body.addEventListener("mouseover",(event) =>{
    if(blogCnt === 1 && !blogsDiv.contains(event.target) && event.target!==blogs){
        blogsDiv.classList.remove("show");
        blogCnt = 0;
    }
})
