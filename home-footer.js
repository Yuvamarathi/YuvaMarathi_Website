const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }
  // Update css classes for gallery
  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState(direction) {

    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    
    this.updateGallery();
  }

  // Construct the carousel controls
  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }
 
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls-add') {
          const newItem = document.createElement('img');
          const latestItem = this.carouselArray.length;
          const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

          // Assign the necessary properties for new gallery item
          Object.assign(newItem,{
            className: 'gallery-item',
            src: `http://fakeimg.pl/300/?text=${this.carouselArray.length+1}`
          });
          newItem.setAttribute('data-index', this.carouselArray.length+1);

          // Then add it to the carouselArray and update the gallery
          this.carouselArray.splice(latestIndex, 0, newItem);
          document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
          this.updateGallery();

        } else {
          this.setCurrentState(control);
        }

      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();
const galleryControlsNext = document.querySelector('.gallery-controls-next');

function automate(){
  galleryControlsNext.click();
}
setInterval(automate,4000);

//Navbar

const a = document.querySelector('.navbar');
const b = document.getElementById('nav_bar');
const c = document.getElementById('ul');
const d= document.querySelector('.arrow');
const z= document.querySelector('.brochure');
const l= document.querySelector('.brochure_class');

const topOfNav = a.offsetTop;
function change() {
  if (a.clientWidth<450) {
    b.style.backgroundColor = "black";
    c.getElementsByTagName("span")[0].style.color = 'white';
    c.getElementsByTagName("span")[1].style.color = 'white';
    c.getElementsByTagName("span")[2].style.color = 'white';
    c.getElementsByTagName("span")[3].style.color = 'white';
    c.getElementsByTagName("span")[4].style.color = 'white';
    d.style.color='white';
    z.style.display='none'
  }
  else if ((window.scrollY > topOfNav)) {
        b.style.backgroundColor = "black";
        c.getElementsByTagName("span")[0].style.color = 'white';
        c.getElementsByTagName("span")[1].style.color = 'white';
        c.getElementsByTagName("span")[2].style.color = 'white';
        c.getElementsByTagName("span")[3].style.color = 'white';
        c.getElementsByTagName("span")[4].style.color = 'white';
        d.style.color='white';
        z.style.display='block';
        z.style.color='black';
        l.style.backgroundColor='#f78f20';
        l.getElementsByTagName("a")[0].style.color = 'black';
        l.getElementsByTagName("img")[0].style.filter='invert(100%)'
    }
    else{
        b.style.backgroundColor = "#f78f20";
        c.getElementsByTagName("span")[0].style.color = 'black';
        c.getElementsByTagName("span")[1].style.color = 'black';
        c.getElementsByTagName("span")[2].style.color = 'black';
        c.getElementsByTagName("span")[3].style.color = 'black';
        c.getElementsByTagName("span")[4].style.color = 'black';
        d.style.color='black';
        z.style.display='block'
        l.style.backgroundColor='black';
        l.getElementsByTagName("a")[0].style.color = 'white';
        l.getElementsByTagName("img")[0].style.filter='grayscale(100%)'
    }

}

window.addEventListener('scroll', change);


// Navbar animations
const arrow_=document.getElementById('_arrow');
const navUL=document.getElementById('ul');

arrow_.addEventListener('click',()=>{
    navUL.classList.toggle('show');
})


// Get the container element
//var btnContainer = document.getElementById("nav-li");

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("nav_btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

