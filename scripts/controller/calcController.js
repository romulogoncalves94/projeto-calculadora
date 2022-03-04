class CalcController { 
    
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl =document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        this._operation = [];
    }

//Metodo para quando a calculadora iniciar.
    initialize (){

        this.setDisplayDateTime();
        //Contagem de segundos do relógio da calculadora.
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    addEventListenerAll (element, events, fn){
        events.split(" ").forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }
//Limpar tela
    clearAll (){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }
//Adicionando operações
    addOperation(value){
        this._operation.push(value);
        console.log(this._operation)
    }
//Validação de erro
    setError(){
        this.displayCalc = "Error";
    }
//Condições de Ação para os botões
    execBtn(value){
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearAll();
                break;

            case 'soma':
            
                break;

            case 'subtracao':
            
                break;
                
            case 'divisao':
            
                break;
            
            case 'multiplicacao':
            
                break;

            case 'porcento':
            
                break;
            
            case 'igual':
            
                break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;

            default:
                this.setError();
                break;
        }
    }
//Criação de método para seleção dos botões
    initButtonsEvents (){
       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
      
       buttons.forEach((btn, index) => {
           this.addEventListenerAll(btn, "click drag", e => {
              let textBtn =  btn.className.baseVal.replace("btn-", "");
              this.execBtn(textBtn);
             });

             this.addEventListenerAll(btn, "mouseover", e => {
                btn.style.cursor = "pointer";
             });
       });
    }
//Método para padrão de Data e Relógio do Display
    setDisplayDateTime (){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
//Getters e Setters
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    
    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._displayCalc = value;
    }
}