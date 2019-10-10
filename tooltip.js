//Removing Tooltip function
let removeTooltip = function(e, obj) {
  var elem = document.querySelector(".div-tooltip");
  elem.remove();
};

//Poping up tooltip upon dblclick event
let displayTooltip = function(e, obj) {
  //selecting the dblclicked word
  var txt = document.getSelection();
  var txtLeng = txt.toString().length;

  //injecting a new element named 'div-tooltip' onto DOM
  var tooltip = document.createElement("div");
  tooltip.className = "div-tooltip";

  //Invoking the block of the selected area and the following selected position :top right bottom left.
  var range = txt.getRangeAt(0);
  var boundary = range.getBoundingClientRect();

  //Adjusting the position of tooltip
  var tooltipTop = boundary.bottom - 15;
  var tooltipLeft = boundary.left - 35;

  //Inserting the element to body
  document.body.appendChild(tooltip);

  //Assinging the value of the height of block including the contents
  var tooltipHeight = document.querySelector(".div-tooltip");

  //Dummy data in tooltip
  tooltip.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cupiditate
  qui dolorem veritatis blanditiis nisi nobis consectetur dolore quasi rem!
  Dignissimos optio expedita nulla non quis distinctio dolorum. Voluptatem,
  accusantium?`;

  //if text is composed of two letters at least .
  if (txtLeng > 1) {
    //Condition checking if the tooltip is out of boundary following on the width and height of the browser
    if (tooltipLeft + tooltipHeight.offsetWidth > window.innerWidth) {
      tooltipLeft = tooltipLeft - 150;
    }
    if (tooltipTop + tooltipHeight.offsetHeight > window.innerHeight) {
      tooltipTop = tooltipTop - tooltipHeight.offsetHeight - 30;
      tooltip.style.top = tooltipTop + "px";
      tooltip.style.left = tooltipLeft + "px";
    } else {
      tooltip.style.top = tooltipTop + "px";
      tooltip.style.left = tooltipLeft + "px";
    }
    //Switching the value of the opacity to 1 to display the tooltip
    tooltip.style.opacity = 1;
  }
};

//Setting up the basement to capture all the elements in the body
let setUpToolTip = function() {
  toolTipElements = Array.from(document.querySelectorAll("body"));

  toolTipElements.forEach(function(elem) {
    //dblclicking event
    elem.addEventListener("dblclick", function(e) {
      displayTooltip(e, this);
    });

    //let tooltip be vanished upon the events : click || scorll
    document.addEventListener("click", function(e) {
      if (document.contains(document.querySelector(".div-tooltip"))) {
        removeTooltip(e, this);
      }
    });
    document.addEventListener("scroll", function(e) {
      if (document.contains(document.querySelector(".div-tooltip"))) {
        removeTooltip(e, this);
      }
    });
  });
};

//Initializing all the functions
function init() {
  setUpToolTip();
}

init();
