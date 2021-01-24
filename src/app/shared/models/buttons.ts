export class Buttons {
    name: any;
    type: any;
    button: any;
    
    constructor(name, type, button){
		this.name = name;
		this.type = type;
		this.button = button;
    }
    showButtons(){
		this.type.style.display = "block";
		this.button.innerHTML = "Hide " + this.name;
		
	}
	hideButtons(){
		this.type.style.display = "none";
		this.button.innerHTML = "Show " + this.name;
	}
}