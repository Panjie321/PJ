// script.js
const questions = [
    {
        question: "以下哪种任务ChatPG无法执行？",
        answers: [
            { text: "回答常见问题", correct: false },
            { text: "实时翻译", correct: false },
            { text: "编写程序代码", correct: false },
            { text: "物理设备维修", correct: true } // 正确答案
        ]
    },
    {
        question: "ChatPG在公司内部的知识管理中可以实现什么功能？",
        answers: [
            { text: "自动生成代码", correct: false },
            { text: "管理和检索公司文档", correct: true }, // 正确答案
            { text: "进行物理实验", correct: false },
            { text: "操作重型机械", correct: false }
        ]
    },
    {
        question: "哪种技术能够通过分析历史数据和传感器数据，预测设备何时可能会发生故障？",
        answers: [
            { text: "自然语言处理（NLP）", correct: false },
            { text: "机器学习", correct: true }, // 正确答案
            { text: "虚拟现实（VR）", correct: false },
            { text: "图像识别", correct: false }
        ]
    },
    {
        question: "在智能仓储管理中，AI最常用于哪项任务？",
        answers: [
            { text: "自动化订单处理", correct: true }, // 正确答案
            { text: "员工培训", correct: false },
            { text: "市场营销", correct: false },
            { text: "财务报表生成", correct: false }
        ]
    },
    {
        question: "以下哪项不是AI在工厂应用中的优势？",
        answers: [
            { text: "提高生产效率", correct: false },
            { text: "预测市场需求", correct: false },
            { text: "降低设备维护成本", correct: false },
            { text: "增加人工成本", correct: true } // 正确答案
        ]
    },
    {
        question: "在生产线质量检测中，哪种AI技术通常会用于识别缺陷？",
        answers: [
            { text: "自然语言处理", correct: false },
            { text: "强化学习", correct: false },
            { text: "计算机视觉", correct: true }, // 正确答案
            { text: "语音识别", correct: false }
        ]
    },
    {
        question: "在工厂的数字化转型过程中，哪种技术可以帮助优化生产流程并减少停机时间？",
        answers: [
            { text: "增强现实（AR）", correct: false },
            { text: "预测性维护", correct: true }, // 正确答案
            { text: "语音识别", correct: false },
            { text: "社交媒体分析", correct: false }
        ]
    },
    {
        question: "2030年目标包括各种可持续发展目标，包括水资源效率目标。P&G 2030年的用水效率目标是什么（vs 09/10）？",
        answers: [
            { text: "25% reduction", correct: false },
            { text: "30% reduction", correct: false },
            { text: "35% reduction", correct: true }, // 正确答案
            { text: "40% reduction", correct: false }
        ]
    },
    {
        question: "2030年目标包括各种可持续发展目标，包括水资源效率目标。P&G 2030年的能耗效率目标是什么（vs 09/10）？",
        answers: [
            { text: "25% reduction", correct: false },
            { text: "30% reduction", correct: true }, // 正确答案
            { text: "35% reduction", correct: false },
            { text: "40% reduction", correct: false }
        ]
    },
    {
        question: "为实现A2030的能源目标，吉列工厂每年的能源节约目标是每年降低____%？",
        answers: [
            { text: "5%", correct: false },
            { text: "6%", correct: true }, // 正确答案
            { text: "7%", correct: false },
            { text: "8%", correct: false }
        ]
    },
    {
        question: "以下哪两个宝洁工厂被内部认证为零碳排放工厂？",
        answers: [
            { text: "South Boston", correct: false },
            { text: "Lodz", correct: false },
            { text: "Shanghai 和Minhang", correct: true }, // 正确答案
            { text: "Milenio", correct: false }
        ]
    },
    {
        question: "（判断对错）吉列工厂实现了零制造垃圾填埋（ZMWTL）？",
        answers: [
            { text: "对", correct: true }, // 正确答案
            { text: "错", correct: false }
        ]
    },
    {
        question: "在办公室中，哪种做法最有助于节约能源？",
        answers: [
            { text: "电脑待机不关", correct: false },
            { text: "关闭不使用的灯和设备", correct: true }, // 正确答案
            { text: "在办公室使用多个打印机", correct: false },
            { text: "增加空调温度", correct: false }
        ]
    },
    {
        question: "以下哪项行动是减少浪费的有效方法？",
        answers: [
            { text: "随意丢弃食物", correct: false },
            { text: "购买过量的商品", correct: false },
            { text: "使用可重复使用的购物袋", correct: true }, // 正确答案
            { text: "只使用一次性餐具", correct: false }
        ]
    },
    {
        question: "如何在办公室中节约水资源？",
        answers: [
            { text: "确保水龙头不漏水", correct: true }, // 正确答案
            { text: "使用一次性饮水瓶", correct: false },
            { text: "每天多次冲洗厕所", correct: false },
            { text: "不关水龙头", correct: false }
        ]
    },
    {
        question: "以下哪种交通方式产生的碳排放最少？",
        answers: [
            { text: "开车", correct: false },
            { text: "骑自行车", correct: true }, // 正确答案
            { text: "坐飞机", correct: false },
            { text: "乘坐公共汽车", correct: false }
        ]
    },
    {
        question: "如何在家中有效减少能源消耗和碳排放？",
        answers: [
            { text: "随意开关电器", correct: false },
            { text: "不关掉不使用的灯", correct: false },
            { text: "让家电全天候运行", correct: false },
            { text: "使用智能温控器", correct: true } // 正确答案
        ]
    },
    {
        question: "我们工厂平等与包容（E&I）的四个重点领域是什么？",
        answers: [
            { text: "Generation@work 代际传递", correct: true },
            { text: "Gender Equality@work 性别平等", correct: true },
            { text: "GABLE@work 多元共赢", correct: true },
            { text: "GABLE@work 多元共赢", correct: true }
        ]
    },
    {
        question: "我们关于代际传递，有哪些相关活动？",
        answers: [
            { text: "教老师傅学数字化", correct: true },
            { text: "师傅徒弟项目", correct: true },
            { text: "员工退休庆祝会", correct: true },
            { text: "三林中学学习经验分享", correct: true }
        ]
    },
    {
        question: "我们工厂的男女比例是多少？",
        answers: [
            { text: "75%：25%", correct: true }
        ]
    },
    {
        question: "LGBTQ 这几个字母分别是什么意思？",
        answers: [
            { text: "女同性恋者（lesbian）", correct: true },
            { text: "男同性恋者（gay）", correct: true },
            { text: "双性向者（bisexual）", correct: true },
            { text: "跨性别者（transgender）", correct: true },
            { text: "酷儿（queer）", correct: true }
        ]
    },
    {
        question: "我们工厂有什么残疾人便利设施？",
        answers: [
            { text: "残疾人无障碍通道（比如医务室门口）", correct: true },
            { text: "医务室存放有轮椅拐杖", correct: true },
            { text: "医务室厕所有无障碍设施", correct: true }
        ]
    },
];

let currentQuestionIndex = null;

const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');

document.addEventListener('DOMContentLoaded', () => {
    showQuestionNumbers();
});

function showQuestionNumbers() {
    resetState();
    questionContainer.innerHTML = '<h2>请选择题号</h2>';
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    questions.forEach((_, index) => {
        const button = document.createElement('button');
        button.innerText = `题号 ${index + 1}`;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            currentQuestionIndex = index;
            setNextQuestion();
        });
        btnGroup.appendChild(button);
    });
    questionContainer.appendChild(btnGroup);
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtonsElement.innerHTML = ''; // 清空答案按钮

    // 显示答案按钮逻辑
    if (questions.length - currentQuestionIndex <= 5) {
        const showAnswersButton = document.createElement('button');
        showAnswersButton.innerText = '显示答案';
        showAnswersButton.classList.add('btn');
        showAnswersButton.addEventListener('click', () => {
            showAnswers(question);
        });
        answerButtonsElement.appendChild(showAnswersButton);
    } else {
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }
}

function showAnswers(question) {
    resultContainer.innerHTML = '<h3>答案:</h3>';
    question.answers.forEach(answer => {
        const answerText = document.createElement('div');
        answerText.innerText = `${answer.text} ${answer.correct ? '✔️' : '❌'}`;
        resultContainer.appendChild(answerText);
    });

    // 添加返回按钮
    const backButton = document.createElement('button');
    backButton.innerText = '返回题号界面';
    backButton.classList.add('btn');
    backButton.addEventListener('click', showQuestionNumbers);
    resultContainer.appendChild(backButton);
}

function resetState() {
    nextButton.classList.add('hide');
    questionContainer.innerHTML = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    resultContainer.innerHTML = ''; // 清空答案显示区域
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        resultContainer.innerHTML = '正确！';
        selectedButton.classList.add('correct');
    } else {
        resultContainer.innerHTML = '错误！';
        selectedButton.classList.add('wrong');
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true; // 禁用所有按钮
        const span = document.createElement('span');
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
            span.innerHTML = '✔';
        } else if (!correct) {
            span.innerHTML = '✖';
        }
        button.appendChild(span);
    });
    nextButton.classList.remove('hide');
    nextButton.addEventListener('click', showQuestionNumbers);
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
