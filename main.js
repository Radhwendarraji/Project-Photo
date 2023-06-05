// var url = 'https://avatarfiles.alphacoders.com/822/82242.png';
// $(document).ready(function() {
//     var image = new Image();
//     image.src = url;
//     $('#container').append(image);
// });

// var coll = [{img :"images\1451603839739.jpg",na :"1" },{img :"C:\Users\darra\Desktop\photo Heaven\Project-Photo\images\a60.jpg",na :"2" }]
// var change = function(){
//    for(var i=0;i<coll.length;i++){
    
//    $('.NEXT').click = coll[i].img
//    }

// }

// $(".images a").click(function(event) {
//     event.preventDefault();
//     var imageLocation = $(this).attr("href");
  
//     //Update overlay with the image linked in the link
//     $image.attr("src", imageLocation);
  
//     //Show the overlay.
//     $overlay.show();
  
//     //show buttons
//     $leftArrow.show();
//     $rightArrow.show();
  
//     //Get child's alt attribute and set caption
//     var captionText = $(this).children("img").attr("alt");
//     $caption.text(captionText);
//   });
  
  
  
//   //When overlay is clicked
//   $overlay.click(function(){
//     //Hide the overlay
//     $overlay.hide();
//   });

// var coll = ["images\Screenshot 2023-06-05 143145.png","images\a60.jpg","images\1451603839739.jpg","images\613a26b954bb5a42ebef8e6d_613a20fd22ebdb11e38c6723_abin-varghese-pen-characters.jpg"]
// var change = function(array){
//     for(var i =0;i<coll.length;i++){
//       onclick =   $('.card-img').append(coll[i])
//     }
// }

/////////////code that works 
//   var change1 = $(document).ready(function(){
//       $(".bb").click(function(){
//           // Change src attribute of image
         
//           $('.card-img').attr("src", "https://catastic.b-cdn.net/wp-content/uploads/2023/04/white-british-cat-are-wear-sunglass-shirt-concept-summer-yellow-background-1.jpg");
//       });    
//  });

 var images = [
    "https://c8.alamy.com/comp/2JK2K3W/a-cat-wearing-glasses-with-the-sky-reflected-2JK2K3W.jpg",
    "https://catastic.b-cdn.net/wp-content/uploads/2023/04/white-british-cat-are-wear-sunglass-shirt-concept-summer-yellow-background-1.jpg",
    "https://pbs.twimg.com/media/FcIOzz7aMAIQb5d.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg",
    "https://s.yimg.com/ny/api/res/1.2/WfAIcTxGIhQZIMOSjLPohw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTg1Mw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f4130c376e8c1633b900e6006fea8d89",
    "https://thepetgazette.com/wp-content/uploads/2021/10/Manny-The-Selfie-Cat01.jpg",
    "https://www.eatliver.com/wp-content/uploads/2016/01/manny9.jpg",
    "https://cdn.meme.market/static/pub/images/meme/b2owZVGsT3irgX8Fino1Ng.png",
    "https://cattitudedaily.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGY2F0dGl0dWRlZGFpbHkuY29tJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDIwJTJGMDUlMkZjYXRzLWhhdGUtc2VsZmllcy0xLmpwZyZjYWNoZU1hcmtlcj0xNjczMzA2NDM3LTUzNjYyJnRva2VuPTE1Y2U1ZGFhNWM5N2FlNWQ.q.jpg",
    "https://i.pinimg.com/736x/90/37/01/903701985912184ea21c2f9afddabae3.jpg",
    "https://i.etsystatic.com/23032371/r/il/f083c8/2986975686/il_fullxfull.2986975686_90ri.jpg",
    "https://www.pleated-jeans.com/wp-content/uploads/2014/03/funny-cat-Superman-costume-room-1.jpg",
    "https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg",
    "https://images7.memedroid.com/images/UPLOADED835/62fa68298e596.jpeg",
    "https://miro.medium.com/v2/resize:fit:1200/0*n-2bW82Z6m6U2bij.jpeg",
    "https://miro.medium.com/v2/resize:fit:800/0*oqkwd5C3c2UO1CzX.jpeg",
    "https://variety.com/wp-content/uploads/2013/06/keanu-2.jpg",
    "https://i.etsystatic.com/19716042/r/il/b684f1/3366689951/il_1080xN.3366689951_jz7z.jpg",
    "https://i.etsystatic.com/38912246/r/il/fc9f5f/4432571139/il_fullxfull.4432571139_qvsh.jpg"
  ];
  var currentIndex = 0;
  
  var change1 = $(document).ready(function() {
    $(".bb").click(function() {
      currentIndex = (currentIndex + 1) % images.length;
      var nextImage = images[currentIndex];
      $('.card-img').attr("src", nextImage);
    });
  });



//  var coll = src = "images\Screenshot 2023-06-05 143145.png"
//  function loop (array){
//     for(var i = 0;i<coll.length;i++){
//         return coll[i]
//     }
//  }

// var change1 = $(document).ready(function() {
//      $(".bb").click(function() {
//        var currentImg = $(this).closest('.container').find('.card-img');
//        var nextImg = currentImg.next('.card-img');
  
  
//        if (nextImg.length > 0) {
//          currentImg.attr("src", "https://static.boredpanda.com/blog/wp-content/uploads/2021/01/funny-cat-memes-jokes-fb52-png__700.jpg");
//          nextImg.attr("src", "https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg");
//        }
//      });
//    });



