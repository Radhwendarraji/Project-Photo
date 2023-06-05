

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

// It checks to see if the span id #heart has "liked" class, if not it run the else statement and adds the "liked" class, on a 2nd click it see that it has the "liked" class so it replaces the ihherHTML and removes class, on 3rd click it runs the else statement again cause there is no "liked" class(remomved on 2nd click).

$(document).foundation();

$(function() {
  $('.button-like')
    .bind('click', function(event) {
      $(".button-like").toggleClass("liked");
    })
});


  






