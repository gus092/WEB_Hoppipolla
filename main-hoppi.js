var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){

  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url,true).pathname;

  if(pathname === '/'){
    if(queryData.id === undefined){ //루트경로 >메인페이지
      fs.readFile(`hoppi-pages/${queryData.id}`,'utf8',function(err,description){
        console.log(queryData.id);
        var template = `
        <!doctype html>
        <html>
          <head>
            <title> Hoppipolla page : ${queryData.id} </title>
            <meta charset="utf-8">
              <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165579840-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-165579840-1');
            </script>
          </head>
          <body>
          멤버<br>
          <ol>
            <li><a href="/?id=ill">아일</a></li>
            <li><a href="/?id=hyunsang">하현상</a></li>
            <li><a href="/?id=youngso">김영소</a></li>
            <li><a href="/?id=jinho">홍진호</a></li>
          </ol>
          <h3>ABOUT 호피폴라</h3><br>
          <p>
          전체노래 듣기<br>
          <a href="https://www.youtube.com/watch?v=Ic4lH6nlWII&list=PLx1uTN1NBrv7IvSQb_iYoSSJxgcy9nqbe&index=1" target="_blank" title="Go to Youtube Channel">Go to YouTube</a></p>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/xZ3JhBiZlIc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>Hoppipolla (Korean: 호피폴라) is a South Korean band formed in JTBC survival show Super Band [ko] in 2019 and the winner of the show.[3] Their band name, which means “jumping into puddles” in Icelandic, is about "Hoping people around the world can immerse in their music and feel bliss by getting solace".[4] The band consists of two main vocalists, a cellist and a guitarist: I'll, Ha Hyun-sang, Hong Jin-ho and Kim Young-so respectively. They made their debut on November 16, 2019 with single album "About Time".[5]</p>
          <img src="group.jpg" width="50%">

          <p>
            <div id="disqus_thread"></div>
              <script>
              /**
              *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
              *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
              /*
              var disqus_config = function () {
              this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
              };
              */
              (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://web-hoppipolla.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })();
              </script>
              <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
          </p>

          <!--Start of Tawk.to Script-->
          <p>
            <script type="text/javascript">
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5eb0ca7ca1bad90e54a1b209/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            </script>
            <!--End of Tawk.to Script-->
          </p>
          </body>

        </html>
        `
        response.writeHead(200);
        response.end(template);
      });
    }else{
      fs.readFile(`hoppi-pages/${queryData.id}`,'utf8',function(err,description){
        console.log(queryData.id);
        var title = queryData.id;
        var template;
        if (description ===undefined ){
          template = `NOOOOOOOOOOO11`;
        }else{
        template = `
        <!doctype html>
        <html>
          <head>
            <title> Hoppipolla page : ${queryData.id} </title>
            <meta charset="utf-8">
              <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165579840-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-165579840-1');
            </script>
          </head>
          <body>
          멤버<br>
          <ol>
            <li><a href="/?id=ill">아일</a></li>
            <li><a href="/?id=hyunsang">하현상</a></li>
            <li><a href="/?id=youngso">김영소</a></li>
            <li><a href="/?id=jinho">홍진호</a></li>
          </ol>
          <h3>ABOUT 호피폴라</h3><br>
          <p>${description}</p>
          <p>
          전체노래 듣기<br>
          <a href="https://www.youtube.com/watch?v=Ic4lH6nlWII&list=PLx1uTN1NBrv7IvSQb_iYoSSJxgcy9nqbe&index=1" target="_blank" title="Go to Youtube Channel">Go to YouTube</a></p>
          <iframe width="853" height="480" src="https://www.youtube.com/embed/xZ3JhBiZlIc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </body>

        </html>
        `}
        response.writeHead(200);
        response.end(template);
      });
    }
  }else{
    response.writeHead(404);
    response.end('Not Found');
  }
});
app.listen(3000);
