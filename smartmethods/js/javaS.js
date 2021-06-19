      var motor1 = document.getElementById("1");
      var out1 = document.getElementById("demo1");
      out1.innerHTML = motor1.value;
      motor1.oninput = function(){out1.innerHTML=this.value;}

      var motor2 = document.getElementById("2");
      var out2 = document.getElementById("demo2");
      out2.innerHTML = motor2.value;
      motor2.oninput = function(){out2.innerHTML=this.value;}

      var motor3 = document.getElementById("3");
      var out3 = document.getElementById("demo3");
      out3.innerHTML = motor3.value;
      motor3.oninput = function(){out3.innerHTML=this.value;}

      var motor4 = document.getElementById("4");
      var out4 = document.getElementById("demo4");
      out4.innerHTML = motor4.value;
      motor4.oninput = function(){out4.innerHTML=this.value;}

      var motor5 = document.getElementById("5");
      var out5 = document.getElementById("demo5");
      out5.innerHTML = motor5.value;
      motor5.oninput = function(){out5.innerHTML=this.value;}

      var motor6 = document.getElementById("6");
      var out6 = document.getElementById("demo6");
      out6.innerHTML = motor6.value;
      motor6.oninput = function(){out6.innerHTML=this.value;}
      

         _rys(window).scroll(function () 
         {
         if (_rys(this).scrollTop() > 136) 
         {
         _rys('.stick-navigation').addClass("fixed-nav");
         } else 
         {
         _rys('.stick-navigation').removeClass("fixed-nav");
         }
         });
