// --- 配置控制区（目标生日时间：2026年6月6日 00:00:00） ---
const TARGET_DATE = new Date("June 6, 2026 00:00:00").getTime();

const quizQuestions = [
    { 
        q: "请问你收伟永给你的第一份礼物是什么呢？", 
        options: { A: "一本书", B: "一束花", C: "护肤品", D: "一个手表" },
        correct: ["C"], 
        pop: "答对啦！第一份礼物就是护肤品，要把你宠得漂漂亮亮的 ✨" 
    },
    { 
        q: "请问我们家族以后会几有钱？", 
        options: { A: "一般", B: "有钱到脱裤", C: "比世界上最有钱的人有钱", D: "无限钱 要去哪里都可以 要买什么都可以 要吃什么都可以 我们是神" },
        correct: ["B", "C", "D"], 
        pop: "完全正确！以后我们家族就是最顶级的，想买什么就买什么！💰" 
    },
    { 
        q: "你觉得伟永会陪你到几时？", 
        options: { A: "1年", B: "2年", C: "5年", D: "10000000000000000000000000年以上" },
        correct: ["D"], 
        pop: "那是必须 solid 的！我们要在一起很久很久很久，永不分离 ❤️" 
    },
    { 
        q: "我们几时认识？", 
        options: { A: "08/10/2025", B: "09/10/25", C: "10/10/25", D: "12/10/25" },
        correct: ["A"], 
        pop: "大功告成！2025年10月8日，我生命中最幸运的一天 🗓️" 
    },
    { 
        q: "你会爱我一辈子吗，寿星老婆？", 
        options: { A: "会100% 我们一起不分离 真的100%", B: "会会会会会会 我最爱你了老公永远地不分离" },
        correct: ["A", "B"], 
        pop: "我就知道老婆最爱我了！我也会超级无敌超级爱你一辈子！💍" 
    }
];

const wrongMessages = [
    "错了哦宝贝 Try again ❤️",
    "come on baby想好来！！！",
    "多一次我的老婆大人 💕💕💕",
    "Try again baby 😘"
];

const correctMessages = [
    "干得漂亮宝贝 ❤️",
    "厉害baby~~~ ✨",
    "Good Job baby！！！ 🌟",
    "我爱你你最厉害 😘😘😘"
];

// 倒计时界面乱点时，在光标处就地飘散的搞笑短语和表情包
const clickPrankMessages = [
    "生日还没到leh，耐心点baby 😂",
    "tunggu lah ⏳",
    "belum lahir lagi 👶",
    "wait BB！！！ 🛑",
    "❤️",
    "🎂",
    "😎"
];

const galleryData = [
    { type: "image", src: "photo1.jpg", quote: "我们的第一张照片，那天的你很美，但其实没什么特别因为你一天比一天美，我每次看见你都被你迷住啊bb！！！❤️❤️" },
    { type: "image", src: "photo2.jpg", quote: "这张很丑但也是我们真正一起出门的一天，我们那时还不懂怎样坐bus跟火车哈哈哈哈哈哈哈哈哈" },
    { type: "image", src: "photo3.jpg", quote: "你这天sotsot骚骚的还讲叫姐姐 害人家身体感觉怪怪的。。。宝贝其实你很变态~~~但不要紧我依然爱你" },
    { type: "image", src: "photo4.jpg", quote: "第一次去karaoke。。。不正常的情侣，不要紧我们开心就好，我爱你老婆😘😘😘" },
    { type: "image", src: "photo5.jpg", quote: "100%成功率的告白 别忘记哦1月1号 我们一起庆祝这一天到老，爱你一辈子！！！❤️❤️❤️❤️" },
    { type: "image", src: "photo6.jpg", quote: "你那天emo了，你说你怕考不好，而且怕做老师做不到，还流眼泪。。。我想告诉你，不管怎么样我都会陪着你，有什么事拉着我的手我们一起解决他们！！！！" },
    { type: "image", src: "photo7.jpg", quote: "第一次带你去吃好料，宝贝我以后会带你吃到更好的，现在可能给不到你什么但我希望你可以陪我度过这刻，等我成功我们一起享受人生ehheheeh😘😘" },
    { type: "video", src: "video.mp4", quote: "我最喜欢的视频hehehehe sotsot的寿星Joanne" },
    { type: "image", src: "photo8.jpg", quote: "第一次来我家见家长，还生我气，baby以后别一直生我气我也是，我们一起happy happy，下次我也要见你家人ehheheheeh？？" },
    { type: "image", src: "photo9.jpg", quote: "你帮我庆祝生日，没人跟我说生日快乐除了你 我不会忘记的 谢谢你宝贝❤️" },
    { type: "image", src: "photo10.jpg", quote: "你来看我比赛heheheh，还送我花，男人很少收到花但我收到了，有你这个完美爱我的女朋友，我真的太幸福乐家家人~~~~" },
    { type: "image", src: "photo11.jpg", quote: "一起庆祝520，宝贝我爱你一辈子。。。我说到做到，你也要这样哦 love u~~" }
];

// --- 核心舞台切换系统 ---
function nextStage(stageNumber) {
    document.querySelectorAll('.stage, .title-stage').forEach(s => s.classList.remove('active'));
    
    if (stageNumber === 1) {
        document.getElementById('stage-1').classList.add('active');
        loadQuestion();
    } else if (stageNumber === 2.5) {
        document.getElementById('stage-2-5').classList.add('active');
    } else if (stageNumber === 1.5) {
        document.getElementById('stage-1-5').classList.add('active');
    } else {
        document.getElementById(`stage-${stageNumber}`).classList.add('active');
        if (stageNumber === 2) updateSlide(); 
    }
}

// 页面一加载，立刻启动倒计时乱点整蛊监听
window.onload = function() {
    setupPrankListener();
};

// --- 自动化生日倒计时引擎 ---
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = TARGET_DATE - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownEl = document.getElementById("countdown");
    if(countdownEl) {
        countdownEl.innerHTML = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
    }

    // 时间一到（2026年6月6日 00:00:00）
    if (distance < 0) {
        clearInterval(timer);
        if(countdownEl) countdownEl.innerHTML = "老婆！生日快乐！🎉";
        document.getElementById("unlock-btn").classList.remove("hidden");
        
        // 移除整蛊点击事件
        const stage0 = document.getElementById("stage-0");
        if(stage0) stage0.onclick = null;
    }
}, 1000);

// --- 正式触发：点击解锁生日按钮后的互动序列 ---
function startUnlockSequence() {
    document.getElementById('stage-0').classList.remove('active');
    document.getElementById('title-card').classList.add('active');
    setTimeout(() => {
        nextStage(1);
    }, 3000);
}

// --- 倒计时界面：【全新光标原地飘字版】乱点整蛊逻辑 ---
function setupPrankListener() {
    const stage0 = document.getElementById("stage-0");
    if (stage0) {
        stage0.onclick = function(e) {
            // 如果点的是解锁按钮，直接放行
            if (e.target.id === "unlock-btn") return;

            const countdownEl = document.getElementById("countdown");
            // 只要时间还没到
            if (countdownEl && countdownEl.innerHTML !== "老婆！生日快乐！🎉") {
                
                // 1. 随机选一句逗趣的话
                const randomMsg = clickPrankMessages[Math.floor(Math.random() * clickPrankMessages.length)];
                
                // 2. 在屏幕上动态创建一个文本元素
                const popText = document.createElement("span");
                popText.className = "click-pop-text";
                popText.innerText = randomMsg;
                
                // 3. 定位到当前鼠标点击的精确绝对坐标位置
                popText.style.left = e.pageX + "px";
                popText.style.top = e.pageY + "px";
                
                // 4. 把这个字塞进网页
                document.body.appendChild(popText);
                
                // 5. 动效播放完毕后（1.2秒），自动销毁这个元素，防止卡顿
                setTimeout(() => {
                    popText.remove();
                }, 1200);
            }
        };
    }
}

// --- 问答逻辑引擎 ---
let currentQ = 0;

function loadQuestion() {
    if (currentQ >= quizQuestions.length) {
        nextStage(1.5); 
        return;
    }
    
    const currentData = quizQuestions[currentQ];
    document.getElementById("question-text").innerText = currentData.q;
    document.getElementById("correct-random-line").innerText = "";
    document.getElementById("memory-line").innerText = "";
    document.getElementById("next-q-btn").classList.add("hidden");
    
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    
    for (const [letter, text] of Object.entries(currentData.options)) {
        const btn = document.createElement("button");
        btn.className = "mcq-btn";
        btn.id = `opt-${letter}`; 
        btn.innerText = `${letter}. ${text}`;
        btn.onclick = () => checkAnswer(letter);
        container.appendChild(btn);
    }
}

function checkAnswer(selectedLetter) {
    const currentData = quizQuestions[currentQ];
    
    if (currentData.correct.includes(selectedLetter)) {
        const randomCorrect = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        
        document.getElementById("correct-random-line").innerText = randomCorrect;
        document.getElementById("memory-line").innerText = currentData.pop;
        document.getElementById("next-q-btn").classList.remove("hidden");
        
        document.getElementById(`opt-${selectedLetter}`).classList.add("correct-green");
        
        // 答对题大 Boom 炸开星星
        confetti({
            particleCount: 60,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ffb3c1', '#ff4d6d', '#ffca28', '#f4ff81'], 
            shapes: ['star'] 
        });

        document.querySelectorAll(".mcq-btn").forEach(btn => btn.disabled = true);
        currentQ++;
    } else {
        const randomWrong = wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
        alert(randomWrong);
    }
}

// --- 相册核心滑块控制 ---
let activeSlideIndex = 0;

function changeSlide(direction) {
    const videoEl = document.getElementById("gallery-video");
    if(videoEl) videoEl.pause();

    activeSlideIndex += direction;
    
    if (activeSlideIndex < 0) {
        activeSlideIndex = galleryData.length - 1;
    } else if (activeSlideIndex >= galleryData.length) {
        activeSlideIndex = 0;
    }
    
    updateSlide();
}

function updateSlide() {
    const slideInfo = galleryData[activeSlideIndex];
    const imgEl = document.getElementById("gallery-img");
    const videoEl = document.getElementById("gallery-video");
    
    document.getElementById("photo-quote").innerText = slideInfo.quote;

    if (slideInfo.type === "video") {
        imgEl.classList.add("hidden");
        videoEl.classList.remove("hidden");
        videoEl.src = slideInfo.src; 
    } else {
        videoEl.classList.add("hidden");
        imgEl.classList.remove("hidden");
        imgEl.src = slideInfo.src;
    }
}

// --- 互动：三层蛋糕独立吹蜡烛判定系统 ---
let blownCandlesCount = 0;

function blowIndividualCandle(candleId) {
    const flameEl = document.getElementById(`flame-${candleId}`);
    
    if (flameEl.classList.contains('active-flame')) {
        flameEl.innerHTML = "💨"; 
        flameEl.classList.remove('active-flame'); 
        flameEl.style.cursor = "default";
        
        confetti({ particleCount: 40, angle: 90, spread: 40, origin: { y: 0.6 } });
        blownCandlesCount++;
        
        if (blownCandlesCount === 3) {
            triggerCakeSuccess();
        }
    }
}

function triggerCakeSuccess() {
    setTimeout(() => {
        document.getElementById("birthday-cake-wrapper").classList.add("hidden");
        document.getElementById("cake-instruction").classList.add("hidden");
        
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
        document.getElementById("envelope-area").classList.remove("hidden");
    }, 800);
}

// --- 互动：点击超大信封系统 ---
function openEnvelope() {
    document.getElementById("envelope-icon").innerHTML = "📂"; 
    
    setTimeout(() => {
        nextStage(4);
    }, 500);
}