let selectorInput = document.getElementById("selectorInput");

selectorInput.focus();

selectorInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      if (selectorInput.value) {
        chrome.storage.sync.get("baseURL", (data) => {
          let baseURL = data.baseURL;
          let url = baseURL + "/browse/" + selectorInput.value;
          window.open(url);
        });
      }
    }
});