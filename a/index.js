const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answer: [
      'スーファミ',
      'プレステ２',
      'スイッチ',
      'DS'
    ],
    correct: 'DS'
  },{
    question: '任天堂の看板ゲームは？', 
    answer: [
      'ドラクエ',
      'マリオ',
      'モンハン',
      'ダクソ',
    ],
    correct: 'マリオ',
  },{
    question: 'FF7の主人公の名前は？', 
    answer: [
      'サニー',
      'レイン',
      'クラウド',
      'ストーム',
    ],
    correct: 'クラウド',
  }
];

const quizLength = quiz.length;     //問題数
let quizIndex = 0;                  //現在の問題番号
let score = 0;                      //正解数




//定数の文字列をHTMLに反映

//ボタンタグの情報のリストを取る定数
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;          //ボタンの数

//ボタンのテキストに、選択肢を入れる
const setupQuiz = ()=>{
  document.getElementById( 'js-question' ).textContent = quiz[quizIndex].question;    //問題文を表示

  let buttonIndex = 0;

  while (buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex ++;
  }
}

// quizIndex = 0 の時のテキストを表示
setupQuiz();

// e <= イベント
// e.target <-= クリックされたボタン
// 正誤判定関数と、次の問題に進む処理
const clikHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('clear');
    score ++;
  }else{
    window.alert('no');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');
  }
}

//ボタンごとのクッリクイベントを監視
//実行直後に処理
let handlerIndex = 0 ;        //ボタンのIndex
while (handlerIndex < buttonLength)  {
  $button[handlerIndex].addEventListener('click', (e) =>{
    clikHandler(e);
  });
  handlerIndex++;
};