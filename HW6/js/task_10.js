{
  let url1 =
      "http://chart.apis.google.com/chart?chs=500x500&chma=0,0,100,100&cht=p&chco=FF0000%2CFFFF00%7CFF8000%2C00FF00%7C00FF00%2C0000FF&chd=t%3A122%2C42%2C17%2C10%2C8%2C7%2C7%2C7%2C7%2C6%2C6%2C6%2C6%2C5%2C5&chl=122%7C42%7C17%7C10%7C8%7C7%7C7%7C7%7C7%7C6%7C6%7C6%7C6%7C5%7C5&chdl=android%7Cjava%7Cstack-trace%7Cbroadcastreceiver%7Candroid-ndk%7Cuser-agent%7Candroid-webview%7Cwebview%7Cbackground%7Cmultithreading%7Candroid-source%7Csms%7Cadb%7Csollections%7Cactivity",
    url2 =
      "https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3";
  let array = [];

  function sliceUrl(url) {
    let domainRegex =
      /([https:\/\?]*[\w\.]+)([\w\/.-]*)([?])?([\w\/.,=\-%&]*)([\w\/#.-]*)/;
    let parseUrl = url.match(domainRegex);
    console.log(parseUrl)
    for (let i = 1; parseUrl.length > i; i++) {
      if (parseUrl[i] !== "?" && parseUrl[i] !== "") {
        array.push(parseUrl[i]);
      }
    }
    return array;
  }

//   console.log(sliceUrl(url1));
  console.log(sliceUrl(url2));
}
