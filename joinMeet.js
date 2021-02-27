async function joinMeet() {
    // find btn to join
    let btn = document.querySelectorAll("button.icons-call-jump-in");
    if (btn.length > 0) {
        let joinMeet = btn[0];
        joinMeet.click()
    }
    // mute vidio & mic
    let muteBtn = document.querySelector("#prejoin-options-content > button:nth-child(1)")
    if (muteBtn) {
        muteBtn.click();
    } else {
        let s = document.querySelectorAll("span.style-layer[title='Turn camera off']")
        // if >0 : camera is on
        if (s.length > 0) {
            s[0].click();
        }

        let p = document.querySelectorAll("span.style-layer[title='Mute microphone']")
        // if >0 : mic ic is on
        if (p.length > 0) {
            p[0].click();
        }
    }

}

let intV = setInterval(joinMeet, 2000)