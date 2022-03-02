class CalcController { 
    
    constructor(){

        this._displayCalc = "0";
        this._dataAtual;

    }

//Recuperar valor
    get displayCalc(){
        return this._displayCalc;
    }
//Atribuir valor
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._dataAtual;
    }

    set dataAtual(valor){
        this._displayCalc = valor;
    }
}