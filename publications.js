async function fetchPublications() {
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://scholar.google.com/citations?user=MqJvzUsAAAAJ&hl=ja'));
    const data = await response.json();
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    const publications = doc.querySelectorAll('.gsc_a_tr');
    let pubList = '<ul>';
    publications.forEach(pub => {
        const title = pub.querySelector('.gsc_a_at').textContent;
        const citation = pub.querySelector('.gsc_a_ac').textContent;
        const year = pub.querySelector('.gsc_a_y').textContent;
        pubList += `<li><strong>${title}</strong> (${year}), Citations: ${citation}</li>`;
    });
    pubList += '</ul>';

    document.getElementById('scholar-publications').innerHTML = pubList;
}

// ページロード時に関数を呼び出す
fetchPublications();
