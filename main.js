document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector(".content").style.display = "none";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".content").style.display = "initial";
    document.querySelector(".loader").style.display = "none";
  }
};