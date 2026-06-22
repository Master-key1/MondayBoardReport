window.onload = updateDashboard;

function generateNarrative(name, emoji, color, c, p, b, n) {
    return `
    <div style="margin-bottom: 25px;">
        <h3 style="color: ${color}; margin-bottom: 8px;">${emoji} ${name} Portfolio</h3>
        <hr style="border: 0; border-top: 2px solid #eee; margin-bottom: 12px;">
        <p style="margin-bottom: 15px;"><b style="color: #28a745;">✅ Completed:</b> ${c} projects successfully finished.</p>
        <p style="margin-bottom: 15px;"><b style="color: #2196f3;">🔄 In Progress:</b> ${p} projects currently active.</p>
        <p style="margin-bottom: 15px;"><b style="color: #ff9800;">⏳ To Start:</b> ${n} projects in backlog.</p>
        <p style="margin-bottom: 15px;"><b style="color: #dc3545;">🚧 Blocked:</b> ${b} projects require attention.</p>
    </div>`;
}

function updateDashboard() {
    const p = [parseInt(document.querySelector('.cert-progress').value), parseInt(document.querySelector('.switch-progress').value), parseInt(document.querySelector('.instore-progress').value)];
    const c = [parseInt(document.querySelector('.cert-completed').value), parseInt(document.querySelector('.switch-completed').value), parseInt(document.querySelector('.instore-completed').value)];
    const b = [parseInt(document.querySelector('.cert-blocked').value), parseInt(document.querySelector('.switch-blocked').value), parseInt(document.querySelector('.instore-blocked').value)];
    const n = [parseInt(document.querySelector('.cert-notstarted').value), parseInt(document.querySelector('.switch-notstarted').value), parseInt(document.querySelector('.instore-notstarted').value)];

    document.getElementById('totalProgress').innerText = p.reduce((a, b) => a + b);
    document.getElementById('totalCompleted').innerText = c.reduce((a, b) => a + b);
    document.getElementById('totalBlocked').innerText = b.reduce((a, b) => a + b);
    document.getElementById('totalNotStarted').innerText = n.reduce((a, b) => a + b);

    let html = `<h2>📊 Weekly Executive Summary</h2>`;
    html += generateNarrative('Certification', '🏆', '#0052cc', c[0], p[0], b[0], n[0]);
    html += generateNarrative('Switch', '🔄', '#6f42c1', c[1], p[1], b[1], n[1]);
    html += generateNarrative('Instore', '🏪', '#17a2b8', c[2], p[2], b[2], n[2]);
    document.getElementById('summaryOutput').innerHTML = html;
}

function copyForMailbox() {
    updateDashboard();
    const html = `
    <div style="font-family: sans-serif; max-width: 800px; color: #333;">
        <div style="background: #0052cc; color: white; padding: 20px; text-align: center; border-radius: 10px;"><h1>Product Portfolio Weekly Status</h1></div>
        <table width="100%" style="margin: 20px 0;">
            <tr>
                <td width="33%" style="padding: 10px; border: 1px solid #eee; border-radius: 10px;">${document.querySelector('.team-card:nth-child(1)').innerText}</td>
                <td width="33%" style="padding: 10px; border: 1px solid #eee; border-radius: 10px;">${document.querySelector('.team-card:nth-child(2)').innerText}</td>
                <td width="33%" style="padding: 10px; border: 1px solid #eee; border-radius: 10px;">${document.querySelector('.team-card:nth-child(3)').innerText}</td>
            </tr>
        </table>
        <div style="padding-top: 30px;">${document.getElementById('summaryOutput').innerHTML}</div>
    </div>`;
    const div = document.createElement('div'); div.innerHTML = html; document.body.appendChild(div);
    const range = document.createRange(); range.selectNode(div);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(div);
    alert("📧 Copied! Paste into your mail box.");
}

function downloadPNG() {
    html2canvas(document.getElementById('capture-area'), { scale: document.getElementById('imageScale').value }).then(c => {
        const a = document.createElement('a'); a.download = 'Report.png'; a.href = c.toDataURL(); a.click();
    });
}window.onload = updateDashboard;

function generateNarrative(name, emoji, color, c, p, b, n) {
    return `
    <div style="margin-bottom: 25px;">
        <h3 style="color: ${color}; margin-bottom: 8px;">${emoji} ${name} Portfolio</h3>
        <hr style="border: 0; border-top: 2px solid #eee; margin-bottom: 12px;">
        <p style="margin-bottom: 15px;"><b style="color: #28a745;">✅ Completed:</b> ${c} projects successfully finished.</p>
        <p style="margin-bottom: 15px;"><b style="color: #2196f3;">🔄 In Progress:</b> ${p} projects currently active.</p>
        <p style="margin-bottom: 15px;"><b style="color: #ff9800;">⏳ To Start:</b> ${n} projects in backlog.</p>
        <p style="margin-bottom: 15px;"><b style="color: #dc3545;">🚧 Blocked:</b> ${b} projects require attention.</p>
    </div>`;
}

function updateDashboard() {
    const p = [parseInt(document.querySelector('.cert-progress').value), parseInt(document.querySelector('.switch-progress').value), parseInt(document.querySelector('.instore-progress').value)];
    const c = [parseInt(document.querySelector('.cert-completed').value), parseInt(document.querySelector('.switch-completed').value), parseInt(document.querySelector('.instore-completed').value)];
    const b = [parseInt(document.querySelector('.cert-blocked').value), parseInt(document.querySelector('.switch-blocked').value), parseInt(document.querySelector('.instore-blocked').value)];
    const n = [parseInt(document.querySelector('.cert-notstarted').value), parseInt(document.querySelector('.switch-notstarted').value), parseInt(document.querySelector('.instore-notstarted').value)];

    document.getElementById('totalProgress').innerText = p.reduce((a, b) => a + b);
    document.getElementById('totalCompleted').innerText = c.reduce((a, b) => a + b);
    document.getElementById('totalBlocked').innerText = b.reduce((a, b) => a + b);
    document.getElementById('totalNotStarted').innerText = n.reduce((a, b) => a + b);

    let html = `<h2>📊 Weekly Executive Summary</h2>`;
    html += generateNarrative('Certification', '🏆', '#0052cc', c[0], p[0], b[0], n[0]);
    html += generateNarrative('Switch', '🔄', '#6f42c1', c[1], p[1], b[1], n[1]);
    html += generateNarrative('Instore', '🏪', '#17a2b8', c[2], p[2], b[2], n[2]);
    document.getElementById('summaryOutput').innerHTML = html;
}

function copyForMailbox() {
    updateDashboard();
    const html = `
    <div style="font-family: sans-serif; max-width: 800px; color: #333;">
        <div style="background: #0052cc; color: white; padding: 20px; text-align: center; border-radius: 10px;"><h1>Product Portfolio Weekly Status</h1></div>
        <table width="100%" style="margin: 20px 0;">
            <tr>
                <td width="33%" style="padding: 10px; border: 1px solid #eee; border-radius: 10px;">${document.querySelector('.team-card:nth-child(1)').innerText}</td>
                <td width="33%" style="padding: 10px; border: 1px solid #eee; border-radius: 10px;">${document.querySelector('.team-card:nth-child(2)').innerText}</td>
                <td width="33%" style="padding: 10px; border: 1px solid #eee; border-radius: 10px;">${document.querySelector('.team-card:nth-child(3)').innerText}</td>
            </tr>
        </table>
        <div style="padding-top: 30px;">${document.getElementById('summaryOutput').innerHTML}</div>
    </div>`;
    const div = document.createElement('div'); div.innerHTML = html; document.body.appendChild(div);
    const range = document.createRange(); range.selectNode(div);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    document.body.removeChild(div);
    alert("📧 Copied! Paste into your mail box.");
}

function downloadPNG() {
    html2canvas(document.getElementById('capture-area'), { scale: document.getElementById('imageScale').value }).then(c => {
        const a = document.createElement('a'); a.download = 'Report.png'; a.href = c.toDataURL(); a.click();
    });
}
