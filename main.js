{
    var Calculator =  (function(){
        function Calculator(){
            this.key = [
                ['Clear', '/'],
                ['7', '8', '9', 'x'],
                ['4', '5', '6','-'],
                ['1','2','3','+'],
                ['0',',','=']
            ];
            this.creatSpan();
            this.creatOutput();
            this.creatContainer();
            this.bindEvents();
            this.creatButtons();
        }
        Calculator.prototype.creatButton = function(text, className, container){
            var button = document.createElement('button');
            button.textContent = text;
            if (className) {
                button.className = className;
            }
            container.appendChild(button);
            return button;
        };
        Calculator.prototype.creatSpan = function () {
            var span = document.createElement('span');
            span.textContent = '0';
            this.span = span;
        };
        Calculator.prototype.creatOutput = function (){
            var output = document.createElement('div');
            output.classList.add('cal-output');
            output.appendChild(this.span);
            this.output = output;
        };
        Calculator.prototype.creatContainer = function (){
            var container = document.createElement('div');
            container.classList.add('cal');
            container.appendChild(this.output);
            document.body.appendChild(container);
            this.container = container;
        };

        Calculator.prototype.creatButtons = function (){
            var _this = this;
            this.key.forEach(function (textList){
                var div = document.createElement('div');
                div.classList.add('row');
                textList.forEach(function (text){
                    _this.creatButton(text, "cal-button cal-"+ text, div);
                });
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.bindEvents = function(){
            var _this = this;
            this.container.addEventListener('click', function(event){
                if (!(event.target instanceof HTMLButtonElement)){
                    return;
                }
                _this.calc(event);
            });
        };
        Calculator.prototype.calc = function(event){
            var text = event.target.textContent;
            if ('0123456789'.indexOf(text) >=0){
                if(this.operator){
                    if(this.n2) {
                        this.n2 = parseInt(this.n2.toString() + text);
                    }
                    else {
                        this.n2 = parseInt(text);
                    }
                    this.span.textContent = this.n2.toString();
                }
                else {
                    if(this.n1){
                        this.n1 = parseInt(this.n1.toString() + text);
                    }
                    else {
                        this.n1 = parseInt(text);
                    }
                    this.span.textContent = this.n1.toString();
                }
            }
            else if ('+-x/'.indexOf(text) >=0) {
                this.operator = text;

            }
            else if ('='.indexOf(text) >=0){
                var result = void 0;
                if(this.operator === '+'){
                    result = this.n1 + this.n2;
                }
                else if (this.operator === '-'){
                    result = this.n1 - this.n2;
                }
                else if (this.operator === 'x'){
                    result = this.n1 * this.n2;
                }
                else if (this.operator === '/'){
                    result = this.n1 / this.n2;
                }
                this.span.textContent = result.toString();
            }
            else if (text === 'Clear') {
                this.n1 = null;
                this.n2 = null;
                this.operator = null;
                this.result = null;
                this.span.textContent = '0';
            }
        };
        return Calculator;
    }());
    new Calculator();
}