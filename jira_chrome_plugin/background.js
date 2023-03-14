let default_base_url = 'https://my_jira_instance.net';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({"baseURL": default_base_url });
});
