(()=> {

    class Accordion {
        
        //初期化
        constructor(obj){

            console.log('obj', obj.hookName);
            
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            
            const triggerLen = $trigger.length;
            let index = 0;

            //クリックイベントの監視役
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));     //this ⇒ 同じクラス内で参照
                index++;
            }

            
        }
    

        //クリックされたとき
        clickHandler = (e) => {
            e.preventDefault();
            
            //クリックされた要素の取得
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;

            //$trigger(<a href>)の次の要素( .accordion-contents )を代入
            if($content.style.display === 'block'){
                $content.style.display = 'none';
            } else{
                $content.style.display = 'block';
            }
        }
    }

    //引数(obj)
    const fuckingAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });
    const dummyAccordion = new Accordion({
        hookName: '#js-accordion',
        tagName: 'a'
    });
    const miniAccordion = new Accordion({
        hookName: '#js-accordion-mini',
        tagName: 'dt'
    });

})();