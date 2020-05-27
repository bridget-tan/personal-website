$("#resume").click(function() {
    window.open('documents/Bridget Tan Resume.pdf', '_blank');
});

$("#linkedin").click(function() {
    window.open("https://www.linkedin.com/in/bridget-tan/", '_blank');
});

$("#github").click(function() {
    window.open("https://github.com/bridget-tan", '_blank');
});

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



// https://stackoverflow.com/questions/41541559/multiple-slideshows-on-one-page-makes-the-first-one-not-work-anymore
var sliderObjects = [];
createSliderObjects();

function plusDivs(obj, n) {
  var parentDiv = $(obj).parent();
  var matchedDiv;
  $.each(sliderObjects, function(i, item) {
    if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
      matchedDiv = item;
      return false;
    }
  });
  matchedDiv.slideIndex=matchedDiv.slideIndex+n;
  showDivs(matchedDiv, matchedDiv.slideIndex);
}

function createSliderObjects() {
  var sliderDivs = $('.slider');
  $.each(sliderDivs, function(i, item) {
    var obj = {};
    obj.id = $(item).attr('id');
    obj.divContent = item;
    obj.slideIndex = 1;
    obj.slideContents = $(item).find('.mySlides');
    showDivs(obj, 1);
    sliderObjects.push(obj);
  });
}

function showDivs(divObject, n) {
  debugger;
  var i;
  if (n > divObject.slideContents.length) {
    divObject.slideIndex = 1
  }
  if (n < 1) {
    divObject.slideIndex = divObject.slideContents.length
  }
  for (i = 0; i < divObject.slideContents.length; i++) {
    divObject.slideContents[i].style.display = "none";
  }
  divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
}