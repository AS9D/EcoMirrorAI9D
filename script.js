let waterLevel = '';
let energyLevel = '';
let envLevel = '';

function setWater(level, btn) {
    waterLevel = level;
    highlightBtn(btn);
}
function setEnergy(level, btn) {
    energyLevel = level;
    highlightBtn(btn);
}
function setEnv(level, btn) {
    envLevel = level;
    highlightBtn(btn);
}

function highlightBtn(btn){
    const buttons = btn.parentNode.querySelectorAll('button');
    buttons.forEach(b => b.style.backgroundColor = '');
    btn.style.backgroundColor = '#4CAF50';
}

function analyze() {
    let resultText = "⚖️ EcoMirror AI Insight: ";
    if (waterLevel === 'high' || energyLevel === 'high' || envLevel==='high') {
        resultText += "Your usage is high. Small changes can make a big difference!";
    } else if (waterLevel === 'medium' || energyLevel === 'medium' || envLevel==='medium') {
        resultText += "You're doing okay, but improvement is possible.";
    } else {
        resultText += "Great job! Your habits are eco-friendly!";
    }
    document.getElementById('result').innerText = resultText;
}

function toggleInfo(infoId) {
    const info = document.getElementById(infoId);
    const card = info.parentNode;
    if(info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
        card.style.backgroundColor = '#e0f7fa';
    } else {
        info.style.display = 'none';
        card.style.backgroundColor = '';
    }
}

function showSection(sectionId) {
    const sections = ['quizContainer','learnContainer','ideasContainer','goalsContainer'];
    sections.forEach(id => {
        const elem = document.getElementById(id);
        if(elem) {
            elem.style.display = (id === sectionId+'Container') ? 'block' : 'none';
        }
    });
}

// 30 ideas
const ideas = [
"🌱 <strong>Start a daily water-saving challenge</strong> at school.",
"🎨 <strong>Create eco-friendly posters</strong> for classrooms.",
"🧹 <strong>Organize a clean-up drive</strong> in your neighborhood.",
"📢 <strong>Share sustainability tips</strong> on social media.",
"🌳 <strong>Plant trees</strong> with friends or family.",
"♻️ <strong>Reduce single-use plastics</strong> at home.",
"🍃 <strong>Start a composting system</strong> at school.",
"🧠 <strong>Host a sustainability quiz</strong> competition.",
"📄 <strong>Create a recycling awareness campaign</strong>.",
"💡 <strong>Turn off lights when not in use</strong>.",
"🚴 <strong>Encourage cycling</strong> instead of using vehicles.",
"💧 <strong>Monitor water usage</strong> at school or home.",
"👩‍🏫 <strong>Teach friends to save energy</strong>.",
"🎨 <strong>Organize an eco-art competition</strong>.",
"🛠 <strong>Share DIY eco hacks</strong> with classmates.",
"✍️ <strong>Write a blog about sustainable living</strong>.",
"🎥 <strong>Make video tutorials</strong> on reducing waste.",
"🌿 <strong>Host tree-planting day</strong> events.",
"🛍 <strong>Use reusable bottles and bags</strong>.",
"📄 <strong>Start a paper recycling initiative</strong>.",
"📰 <strong>Share weekly eco tips</strong> in newsletters.",
"🚗 <strong>Organize a car-free day challenge</strong>.",
"☀️ <strong>Educate about renewable energy</strong>.",
"📊 <strong>Make fun eco infographics</strong>.",
"📝 <strong>Host a quiz on environmental facts</strong>.",
"🥗 <strong>Promote low-meat meals</strong>.",
"💡 <strong>Create energy-saving posters</strong>.",
"💻 <strong>Organize sustainability webinars</strong>.",
"📊 <strong>Create classroom eco-dashboard</strong>.",
"🏆 <strong>Reward eco-friendly actions</strong> among peers."
];

let currentIdea = 0;
function nextIdea() {
    document.getElementById('ideaText').innerHTML = ideas[currentIdea];
    currentIdea = (currentIdea + 1) % ideas.length;
}
