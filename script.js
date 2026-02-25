document.addEventListener('DOMContentLoaded', function() {
    const goalInput = document.getElementById('goal-input');
    const addGoalBtn = document.getElementById('add-goal');
    const goalList = document.getElementById('goal-list');
    const scoreDisplay = document.getElementById('score');
    let score = parseInt(localStorage.getItem('umrahScore')) || 0;
    scoreDisplay.textContent = score;

    // Load goals from localStorage
    let goals = JSON.parse(localStorage.getItem('umrahGoals')) || [];
    goals.forEach(goal => addGoalToList(goal.text, goal.completed));

    addGoalBtn.addEventListener('click', function() {
        const goalText = goalInput.value.trim();
        if (goalText) {
            addGoalToList(goalText, false);
            goals.push({ text: goalText, completed: false });
            localStorage.setItem('umrahGoals', JSON.stringify(goals));
            goalInput.value = '';
        }
    });

    function addGoalToList(text, completed) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = completed;
        checkbox.addEventListener('change', function() {
            const index = Array.from(goalList.children).indexOf(li);
            goals[index].completed = this.checked;
            localStorage.setItem('umrahGoals', JSON.stringify(goals));
            if (this.checked) {
                score += 5;
            } else {
                score -= 5;
            }
            scoreDisplay.textContent = score;
            localStorage.setItem('umrahScore', score);
        });
        li.appendChild(checkbox);
        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        li.appendChild(textSpan);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            const index = Array.from(goalList.children).indexOf(li);
            if (goals[index].completed) {
                score -= 5;
                scoreDisplay.textContent = score;
                localStorage.setItem('umrahScore', score);
            }
            goals.splice(index, 1);
            localStorage.setItem('umrahGoals', JSON.stringify(goals));
            goalList.removeChild(li);
        });
        li.appendChild(deleteBtn);
        goalList.appendChild(li);
        if (completed) score += 5; // in case loaded
    }

    // Load prayer states
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        const checkbox = document.getElementById(prayer);
        const saved = localStorage.getItem('umrah' + prayer);
        if (saved === 'true') {
            checkbox.checked = true;
        }
        checkbox.addEventListener('change', function() {
            localStorage.setItem('umrah' + prayer, this.checked);
        });
    });

    // Toggle buttons
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
                this.textContent = 'إخفاء المحتوى';
            } else {
                content.style.display = 'none';
                this.textContent = 'عرض المحتوى';
            }
        });
    });
});