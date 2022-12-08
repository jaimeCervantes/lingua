import { useEffect } from "react";

export default function useLinguaHouseWidget(container) {

  useEffect(() => {
    if(container?.current) {
      const iframe = createLinguaHouseIframe();
      container.current.appendChild(iframe);
    }
  }, [container])

}


function createLinguaHouseIframe() {
  let url =
    "https://www.linguahouse.com/remote/profile/2a623461-65ed-5b1e-10f7-ffb9724618ed";
  const newPasswordUrl =
    "https://www.linguahouse.com/remote/new-password/2a623461-65ed-5b1e-10f7-ffb9724618ed";
  const verifyEmailUrl =
    "https://www.linguahouse.com/remote/verify-email/2a623461-65ed-5b1e-10f7-ffb9724618ed";
  const addPdfCodeUrl =
    "https://www.linguahouse.com/remote/a/2a623461-65ed-5b1e-10f7-ffb9724618ed";
  const query = parseQuery(window.location.search);
  const width = "100%";
  const height = "1000";

  const iframe = document.createElement("iframe");

  if (query.new_password_token) {
    url = newPasswordUrl + "/" + query.new_password_token;
  } else if (query.verify_email_token) {
    url = verifyEmailUrl + "/" + query.verify_email_token;
  } else if (query.add_pdf_code) {
    url = addPdfCodeUrl + "/" + query.add_pdf_code;
  }

  iframe.setAttribute("class", "linguahouse_profile_widget");
  iframe.setAttribute("src", url);
  iframe.setAttribute("width", width);
  iframe.setAttribute("height", height);
  iframe.setAttribute("frameborder", "0");

  return iframe;
}

function parseQuery(e) {
  for (
    var n = {}, o = ("?" === e[0] ? e.substr(1) : e).split("&"), r = 0;
    r < o.length;
    r++
  ) {
    var t = o[r].split("=");
    n[decodeURIComponent(t[0])] = decodeURIComponent(t[1] || "");
  }
  return n;
}
