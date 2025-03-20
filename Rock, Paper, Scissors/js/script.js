// 分數初始值
let playerScore = 0;
let computerScore = 0;

// 遊戲邏輯
function playGame(playerChoice) {
    const choices = ['剪刀', '石頭', '布'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    // 判定勝負
    if (playerChoice === computerChoice) {
        result = '平手！';
    } else if (
        (playerChoice === '剪刀' && computerChoice === '布') ||
        (playerChoice === '石頭' && computerChoice === '剪刀') ||
        (playerChoice === '布' && computerChoice === '石頭')
    ) {
        result = '你贏了！';
        playerScore++;
    } else {
        result = '你輸了！';
        computerScore++;
    }

    // 更新結果與分數
    document.getElementById('result').innerHTML = `
        你選擇了 <span class="highlight">${playerChoice}</span>，電腦選擇了 <span class="highlight">${computerChoice}</span>。<br>
        <strong>${result}</strong>
    `;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// 重置遊戲
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('result').textContent = '遊戲已重置，請開始新一局！';
}