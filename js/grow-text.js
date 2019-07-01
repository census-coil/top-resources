function growText(block) {
  if (block === "research") {
    let element = document.getElementById("research-text");
    element.style.webkitTransform = "scale(1.1,1.1)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[0].style.color = "black";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[0].style.backgroundColor = "#00a6d2";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[0].style.color = "#00A6D2";
  }

  if (block === "data") {
    let element = document.getElementById("data-text");
    element.style.webkitTransform = "scale(1.1,1.1)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[1].style.color = "black";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[1].style.backgroundColor = "#00a6d2";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[1].style.color = "#00A6D2";
  }

  if (block === "development") {
    let element = document.getElementById("development-text");
    element.style.webkitTransform = "scale(1.1,1.1)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[2].style.color = "black";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[2].style.backgroundColor = "#00a6d2";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[2].style.color = "#00A6D2";
  }

  if (block === "demo") {
    let element = document.getElementById("demo-text");
    element.style.webkitTransform = "scale(1.1,1.1)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[3].style.color = "black";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[3].style.backgroundColor = "#00a6d2";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[3].style.color = "#00A6D2";
  }

}

function normalText(block) {
  if (block === "research") {
    let element = document.getElementById("research-text");
    element.style.webkitTransform = "scale(1.0, 1.0)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[0].style.color = "#aeb0b5";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[0].style.backgroundColor = "#112e51";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[0].style.color = "#000";
  }

  if (block === "data") {
    let element = document.getElementById("data-text");
    element.style.webkitTransform = "scale(1.0, 1.0)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[1].style.color = "#aeb0b5";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[1].style.backgroundColor = "#112e51";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[1].style.color = "#000";
  }

  if (block === "development") {
    let element = document.getElementById("development-text");
    element.style.webkitTransform = "scale(1.0, 1.0)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[2].style.color = "#aeb0b5";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[2].style.backgroundColor = "#112e51";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[2].style.color = "#000";
  }

  if (block === "demo") {
    let element = document.getElementById("demo-text");
    element.style.webkitTransform = "scale(1.0, 1.0)";

    let text = document.getElementsByClassName("timeline-text-content");
    text[3].style.color = "#aeb0b5";

    let bar = document.getElementsByClassName("timeline-bar");
    bar[3].style.backgroundColor = "#112e51";

    let headers = document.getElementsByClassName("timeline-text-header");
    headers[3].style.color = "#000";
  }
}
