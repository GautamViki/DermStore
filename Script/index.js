

$(document).ready(function(){
    $('#container1').slick({
   infinite: true,
    slidesToShow: 5 ,
   slidesToScroll: 4,
   dots:true,
   responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
    });
})


$(document).ready(function(){
    $('#container1_1').slick({
       infinite: true,
    slidesToShow: 2 ,
   slidesToScroll: 2,
 //   dots:true,
 responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
    });
})



$(document).ready(function(){
    $('#container1_2').slick({
       infinite: true,
    slidesToShow: 4 ,
   slidesToScroll: 4,
   dots:true,
 responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
    });
})


////


$(document).ready(function(){
    $('#container3').slick({
       infinite: true,
    slidesToShow: 5 ,
   slidesToScroll: 5,
   dots:true,
 responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
    });
})


// slide upper

let imgdata = [
image="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/43/original-0429-STDCRE-35399-DS-AMR-May_Batch_Shot32-HomePage_1920x700-014443.jpg",
image="https://static.thcdn.com/images/xlarge/webp/widgets/208-us/04/original-1904_THG0034748_DERMSTOREMAY_SHOT1_1920x700-054404.png",

]



let images_div = document.getElementById("slideshow")
let i=0;
let id;

let img = document.createElement("img");

id=setInterval(function(){
if(i===imgdata.length){
    i=0;
}
images_div.innerHTML=null;
img.src=imgdata[i];
images_div.append(img);
i++;
},2000);



$(document).ready(function(){
    $('#container1_B').slick({
       infinite: true,
    slidesToShow: 2 ,
   slidesToScroll: 2,
 //   dots:true,
 responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
    });
})
