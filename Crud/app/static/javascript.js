(function(win,doc){
    'user strict';
    console.log('entrou')
    if(doc.querySelector('.btnDel')){
        let btnDel =doc.querySelectorAll('.btnDel');
        for(let i=0; i <btnDel.length; i++){
            btnDel[i].addEventListener('click', function(event){
                if(confirm('Deseja deletar este dado?')){
                    return true;
                }else{
                    event.preventDefault();
                }
                
            });
        }
    }
})(window,document);