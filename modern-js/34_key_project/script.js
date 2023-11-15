window.addEventListener("keydown", (evt) => setFields(evt));

function setFields(e) {
  const fields = document.querySelectorAll("#insert .key");
  setFieldValue(fields[0], e.key === " " ? "Space" : e.key);
  setFieldValue(fields[1], e.keyCode);
  setFieldValue(fields[2], e.code);
}

function setFieldValue(node, value) {
  node.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE && n.nodeValue.trim() !== "") {
      n.nodeValue = value;
    }
  });
}
