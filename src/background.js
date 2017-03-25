var config = {
  apiKey: "AIzaSyAtnwNgh3qzpYFwurHb0Myg7k8ZLnRyTTA",
  authDomain: "crowddj-be2bb.firebaseapp.com",
  databaseURL: "https://crowddj-be2bb.firebaseio.com",
  storageBucket: "crowddj-be2bb.appspot.com",
  messagingSenderId: "310782812217"
};
firebase.initializeApp(config);


function inject() {
  chrome.tabs.query({url: 'https://*.spotify.com/*'}, function(tabs) {
    if (tabs.length != 0) {
      console.log("injecting...");
      console.log(tabs);
      chrome.tabs.executeScript(tabs[0].id, {file: "inject.js"});
    }
  });
}

chrome.runtime.onMessage.addListener(function(details) {
  console.log("details, ");
  console.log(details);
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    inject();
}, {
    url: [{
        hostContains: 'play.spotify.com'
    }],
});