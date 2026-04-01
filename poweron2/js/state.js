// ==========================================
// state.js: 状態管理・共通変数
// ==========================================
let currentLesson = 1;
let currentKey = "L01_P1_full";
let currentScore = 0;
let currentMode = ''; 
let isScriptOpen = false;
let isJapaneseOpen = false;

// フォントサイズ管理
let engFontSize = 24;
let jpnFontSize = 20;
let recFontSize = 28;

let targetText = "";
let recordStartTime = 0;
let lastSpokenText = "";

// レッスン構造データ
const lessonStructure = {
    // Lesson 1: Part 1,2,3 はすべて3つのScene
    1: { 1: [1, 2, 3], 2: [1, 2, 3], 3: [1, 2, 3] },
    // Lesson 2: Part 1,2は2つ、Part 3は1つのみ
    2: { 1: [1, 2], 2: [1, 2], 3: [1] },
    // Lesson 3: Part 1と3は4つ、Part 2は2つ
    3: { 1: [1, 2, 3, 4], 2: [1, 2], 3: [1, 2, 3, 4] },
    // Lesson 4: Part 1は2つ、Part 2と3は3つ
    4: { 1: [1, 2], 2: [1, 2, 3], 3: [1, 2, 3] }
};

// オーディオ要素
let audioPlayer = document.getElementById('mainAudioPlayer');
let successSound = document.getElementById('successSound');