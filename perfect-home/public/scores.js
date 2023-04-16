async function loadScores() {
    let scores = [];
    try {
        const response = await fetch('//api/scores');
        scores = await response.json();

        localStorage.setItem('scores', JON.stringify(scores));
    } catch {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
    }

    displayScores(scores);
}

function displayScores(scores) {
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
