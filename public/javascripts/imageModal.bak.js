const post = document.getElementById("Post");
const p = document.createElement("div");

let isModalOn = false;

function doModal(imgs) {
  let curIndex = 0;
  let str = imgs.split(';');
  const p = document.createElement("div");
  p.classList.add('modal');
  p.id = 'myModal';
  let li = "";

  for(let i=0 ;i< str.length-2; i++) {
    li += `<li style="display:none;"><img  src='/uploads/${str[i]}'/></li>`
    }


  p.innerHTML = `
		<div class="modal-content">
			<span class="close">&times;</span>
      <ul style="height:90%;display:flex;justify-content:center;align-items:center;" class="mySlides">
      ${li}
      </ul>
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
		</div>
  `;
  post.appendChild(p);

  const closeBtn = document.getElementsByClassName('close')[0];
  const slides = document.getElementsByClassName('mySlides')[0];

  showSlides(curIndex,slides);

  window.onclick = function(event) {
    if (event.target == p) {
      //p.style.display = "none";
      isModalOn = false;
      post.removeChild(p);
    }
  }
  closeBtn.onclick = function() {
      post.removeChild(p);
  }
    isModalOn = true;
    p.style.display='block';
}


function plusSlides(btn) {
  if(isModalOn){
    const slides = document.getElementsByClassName('mySlides')[0];
    if(curIndex == 1) {
      curIndex+=1;
      showSlides(curIndex,slides);
    }else {
      curIndex-=1;
      showSlides(curIndex,slides);
    }
  }
}

function showSlides(curIndex, slides) {
  if(curIndex > slides.length) {
    slides.children[slides.length].style.display='none';
    slideIndex = 0;
  }
  if(curIndex < 0) {
    slides.children[0].style.display='none';
    slideIndex = slides.length;
  }
  console.log(curIndex);
  slides.children[curIndex].style.display='block';


}
