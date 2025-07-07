(() =>{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;
    

    //初期化
    const init = () => {
        $content[0].style.display = 'block';    //CSSで none 状態だったテキストを表示する
    };
    init();


    //クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();         //次の処理を優先する命令

        //クリックされたタブ(nav)と、そのデータを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav     //データ属性の値を取得

        // タブの色、テキストを全てリセット
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        //選択された targetVal と同じ値の data-content （テキスト）の情報を取得し、表示する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);     //クリックしたタブに is-active クラスを追加 ⇒タブの色を付ける
    };

    //タブごとにクリックの監視役をつける
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();