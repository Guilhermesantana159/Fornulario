const inputs = document.getElementsByTagName("input");
const divs = document.getElementsByTagName("div");
const form = document.getElementById("form");
const btn = document.getElementById("submit");
const validation = [];
const arrayinput = [...inputs];
const arraydivs = [...divs];



btn.addEventListener("click",function(event){
    event.preventDefault(); 
    validations.cleanError()
})

const validations = {
    writeError(msg,div){
        let txt_node = document.createTextNode(msg);
        let p_error = document.createElement("p");
        p_error.appendChild(txt_node);
        console.log(arraydivs[div])
        arraydivs[div].appendChild(p_error)
    },
    cleanError(){
        let principal = document.getElementById("principal");
        let p_error = document.getElementsByTagName("p");
        p_error = [...p_error];
        for(let i=0;i<p_error.length;i++){
            p_error[i].remove();
        }
        this.validateEmail();        
    },
    validateEmail(){
        let valueEmail = arrayinput[0].value;
        let error_Email = [];
        if (valueEmail == ""){
            error_Email.push("O campo está vazio");
        }if(valueEmail.length > 50){
            error_Email.push("O campo Excedeu o tamanho de 50 Caracteres")
        }if(valueEmail.search("@") == -1){
            error_Email.push("O caractere @ não está presente")
        }if(valueEmail.search(".com") == -1){
            error_Email.push("O caractere .com não está presente")
        }if(valueEmail.search(" ") != -1){
            error_Email.push("Há espaços no campo Email")
        }if(error_Email.length > 0){
            this.writeError(error_Email[0],1)
            validation.push(false);
        }else{
            validation.push(true);
        }
        this.validateName();
    },
    validateName(){
        let value_Name = arrayinput[1].value;
        let error_Name = [];
        if(value_Name.length > 20){
            this.writeError("O campo Excedeu o tamanho de 20 caracteres")
        }if (value_Name == ""){
            error_Name.push("O campo está vazio");
        }if(error_Name.length > 0){
            this.writeError(error_Name[0],2)
            validation.push(false)
        }else{
            validation.push(true);
        }
        this.validateLastName();
    },
    validateLastName(){
        let value_LastName = arrayinput[2].value;
        let error_LastName = [];
        if(value_LastName > 20){
            this.writeError("O campo Excedeu o tamanho de 20 caracteres")
        }if (value_LastName == ""){
            error_LastName.push("O campo está vazio");
        }if(error_LastName.length > 0){
            this.writeError(error_LastName[0],3)
            validation.push(false)
        }else{
            validation.push(true);
        }

    }
}
