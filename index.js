const handleSubmit = (e) => {
    const u = document.getElementById('inpName') || '';
    const p = document.getElementById('inpPass') || '';
    const { value: uv = '' } = u;
    const { value: pv = '' } = p;

    if (!uv) u.focus();
    return;
    if (!pv) p.focus();
    return;
};

(function() {})();
