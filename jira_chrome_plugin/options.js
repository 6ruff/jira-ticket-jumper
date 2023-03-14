let baseUrlInput = document.getElementById("baseUrlInput");

function storeBaseURL(event) {
  chrome.storage.sync.set({"baseURL": event.target.value});
}

chrome.storage.sync.get("baseURL", (data) => {
  let baseURL = data.baseURL;
  // show the URL
  baseUrlInput.value = baseURL;
});

baseUrlInput.addEventListener("input", storeBaseURL);
