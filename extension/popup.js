function countLines(text) {
  if (!text) return 0;
  const trimmed = text.replace(/\s+$/, "");
  if (!trimmed) return 0;
  return trimmed.split(/\r\n|\r|\n/).filter((l) => l.trim().length > 0).length;
}

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function collect() {
  const selection = window.getSelection ? window.getSelection().toString() : "";
  const pageText = document.body ? document.body.innerText : "";
  return { selection, pageText };
}

async function run() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;
  try {
    const [result] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: collect,
    });
    const { selection, pageText } = result.result || { selection: "", pageText: "" };
    document.getElementById("selLines").textContent = countLines(selection);
    document.getElementById("pageLines").textContent = countLines(pageText);
    document.getElementById("words").textContent = countWords(selection || pageText);
  } catch (e) {
    document.getElementById("selLines").textContent = "–";
    document.getElementById("pageLines").textContent = "–";
    document.getElementById("words").textContent = "–";
  }
}

document.getElementById("refresh").addEventListener("click", run);
run();
