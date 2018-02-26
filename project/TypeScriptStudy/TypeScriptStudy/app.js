var Greeter = (function () {
    function Greeter() {
    }
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
    Greeter.prototype.start = function () {
        //this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        alert('hello world in TypeScript!');
        var area = this.Add(1, 2);
        alert(area);
    };
    //stop() {
    //    clearTimeout(this.timerToken);
    //}
    Greeter.prototype.Add = function (left, right) {
        return left + right;
    };
    return Greeter;
})();
window.onload = function () {
    //var el = document.getElementById('content');
    var greeter = new Greeter();
    greeter.start();
};
//# sourceMappingURL=app.js.map