---
title: my grandparents wedding day
Author: Luis Cerezo
---

# An old photo and a silly idea

My mom sent me a photo of my grandmother's wedding day. As you can imagine, it's quite old. Looking at the photo I got the idea that it would be kinda neat to be able to put a label by the person of their name, but only when you mouse-over, or _hovered_ over the photo.  How hard could this be? As it turns out, not that hard.

I combined these two tutorials
[how to overlay images](https://www.w3schools.com/howto/howto_css_image_overlay.asp)
[how to position text](https://www.w3schools.com/howto/howto_css_image_text.asp)

Now being an infrastructure type person, I haven't spent too much time thinking of the best way to create content. My career has been focused on delivering the content in the most reliable way.

Is this a good way to do this? Do you know a better or more clever way? let me know. Try it out below.
<html>
<style>
.container {
  position: relative;
  width: 80%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right; 0;
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: .5s ease;
  opacity: 1;
}

.container:hover .overlay {
  width: 100%;
}

.bela {
  color: white;
  font-size: 15px;
  position: relative;
  top: 28%;
  left: 36%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
}
.abu {
  color: white;
  font-size: 15px;
  position: relative;
  top: 25%;
  left: 51%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
}
.mamia {
  color: white;
  font-size: 15px;
  position: relative;
  top: 28%;
  left: 60%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
}
.manolo {
  color: white;
  font-size: 15px;
  position: relative;
  top: 22%;
  left: 26%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
}

</style>
<body>
<div class="container">
   <img src="/assets/images/boda-de-abuelos-90.jpg" alt="boda" style="width:100%" class="image">
   <div class="overlay">
   <div class="bela"> Ana Josephina<br />González</div>
   <div class="mamia"> Ana "Mamia"<br/>Turull Moreno</div>
   <div class="manolo"> Manuel<br/>González Quiñones</div>
   <div class="abu"> Francisco <br/>Garcia de Quevedo</div>
 </div>
</div>
</body>
</html>

# update

as it turns out, it's not that easy. It seems the overlay does not adjust as expected on different browser window sizes. I'll play with it a bit more and update here. If you know why, let me know on the Twitter.


# update 2
I changed the element position to relative, it seems a bit more resiliant now.
