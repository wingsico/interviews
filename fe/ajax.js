function ajax({
  method = 'get',
  url,
  body,
  contentType,
  fail = () => { },
  success = () => { }
}) {
  function getXhr() {
    if (window.XMLHttpRquest) {
      return new XMLHttpRequest();
    } else {
      return new ActiveXObject('Microsoft.XMLHttp');
    }
  }

  let xhr = getXhr();
  let method = method.toUpperCase();

  xhr.open(method, url);
  xhr.onreadystatechange = function () {
    if (xhr.readystate === 4) {
      let res = {
        status: xhr.status,
        res: unescape(xhr.responseText.replace(/\\u/g, '%u'))
      }
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        success(res);
      } else {
        fail(res);
      }
    }
  }

  if (method === 'GET') {
    xhr.send(null)
  } else {
    xhr.setRequestHeader('Content-Type', contentType)
    xhr.send(body);
  }
}
