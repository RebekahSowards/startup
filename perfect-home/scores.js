function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }

    const tableBodyEl = document.querySelector('#scores');

    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            const dateTdEl = document.createElement('td');
            const winnerTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            
            dateTdEl.textContent = score.date;
            winnerTdEl.textContent = score.winner;
            scoreTdEl.textContent = score.score;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(dateTdEl)
            rowEl.appendChild(winnerTdEl);
            rowEl.appendChild(scoreTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan=3>Complete a game to record a score!</td></tr>';
    }
}

loadScores();
