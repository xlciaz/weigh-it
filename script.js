let pros = [];
let cons = [];

function addPro() {
    const proInput = document.getElementById('proInput').value;
    const proValue = parseInt(document.getElementById('proValue').value);

    if (proInput && proValue >= 1 && proValue <= 10) {
        pros.push({ pro: proInput, value: proValue });
        displayPros();
        document.getElementById('proInput').value = '';
        document.getElementById('proValue').value = '';
    } else {
        alert('Please enter a pro and assign a value between 1 and 10.');
    }
}

function displayPros() {
    const prosList = document.getElementById('prosList');
    prosList.innerHTML = '';
    pros.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.pro}: ${item.value}`;
        prosList.appendChild(li);
    });
}

function donePros() {
    localStorage.setItem('pros', JSON.stringify(pros));
    window.location.href = 'conslist.html';
}

function addCon() {
    const conInput = document.getElementById('conInput').value;
    const conValue = parseInt(document.getElementById('conValue').value);

    if (conInput && conValue >= 1 && conValue <= 10) {
        cons.push({ con: conInput, value: conValue });
        displayCons();
        document.getElementById('conInput').value = '';
        document.getElementById('conValue').value = '';
    } else {
        alert('Please enter a con and assign a value between 1 and 10.');
    }
}

function displayCons() {
    const consList = document.getElementById('consList');
    consList.innerHTML = '';
    cons.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.con}: ${item.value}`;
        consList.appendChild(li);
    });
}

function doneCons() {
    localStorage.setItem('cons', JSON.stringify(cons));
    window.location.href = 'results.html';
}

function calculateResults() {
    let totalPros = 0;
    let totalCons = 0;

    pros = JSON.parse(localStorage.getItem('pros')) || [];
    cons = JSON.parse(localStorage.getItem('cons')) || [];

    pros.forEach(item => {
        totalPros += item.value;
    });

    cons.forEach(item => {
        totalCons += item.value;
    });

    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    if (totalPros > totalCons) {
        resultsContainer.innerHTML = '<p class="result-message result-message-green">The pros outweigh the cons! Go for it!!</p>';
    } else if (totalCons > totalPros) {
        resultsContainer.innerHTML = '<p class="result-message result-message-red">The cons outweigh the pros...maybe rethink this one...</p>';
    } else {
        resultsContainer.innerHTML = '<p class="result-message result-message-yellow">The pros and cons are equal. Try flipping a coin...</p>';
    }
}

function redirectToApp() {
    window.location.href = 'app.html';
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners only if the elements exist
    const proceedButton = document.getElementById('proceedButton');
    if (proceedButton) {
        proceedButton.addEventListener('click', redirectToApp);
    }

    const yesButton = document.getElementById('yesButton');
    if (yesButton) {
        yesButton.addEventListener('click', () => {
            window.location.href = 'proslist.html';
        });
    }

    const noButton = document.getElementById('noButton');
    if (noButton) {
        noButton.addEventListener('click', () => {
            window.location.href = 'proscons.html';
        });
    }

    const beginButton = document.getElementById('beginButton');
    if (beginButton) {
        beginButton.addEventListener('click', () => {
            window.location.href = 'proslist.html';
        });
    }

    const addProBtn = document.getElementById('addProBtn');
    if (addProBtn) {
        addProBtn.addEventListener('click', addPro);
    }

    const doneProsBtn = document.getElementById('doneProsBtn');
    if (doneProsBtn) {
        doneProsBtn.addEventListener('click', donePros);
    }

    const addConBtn = document.getElementById('addConBtn');
    if (addConBtn) {
        addConBtn.addEventListener('click', addCon);
    }

    const doneConsBtn = document.getElementById('doneConsBtn');
    if (doneConsBtn) {
        doneConsBtn.addEventListener('click', doneCons);
    }

    if (document.getElementById('resultsContainer')) {
        calculateResults();
    }
});











