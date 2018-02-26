class Greeter {
    //element: HTMLElement;
    //span: HTMLElement;
    //timerToken: number;

    //constructor(element: HTMLElement) {
    //    this.element = element;
    //    this.element.innerHTML += "The time is: ";
    //    this.span = document.createElement('span');
    //    this.element.appendChild(this.span);
    //    this.span.innerText = new Date().toUTCString();
    //}

    start() {
        //this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        alert('hello world in TypeScript!');
        var area = this.Add(1, 2);
        alert(area);

        

    }

    //stop() {
    //    clearTimeout(this.timerToken);
    //}

    Add(left: number, right: number): number {
        return left + right;
    }
}

window.onload = () => {
    //var el = document.getElementById('content');
    var greeter = new Greeter();
    greeter.start();
};