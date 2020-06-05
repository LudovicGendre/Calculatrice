{
    function creatButton(text, className, container) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
    }
    var container_1 = document.createElement('div');
    container_1.classList.add('cal');
    document.body.appendChild(container_1);

    var output = document.createElement('div');
    var span = document.createElement('span');

    output.classList.add('cal-output');
    span.textContent = '1000';
    output.appendChild(span);
    container_1.appendChild(output);

    var key = [
        ['Clear', '/'],
        ['7', '8', '9', 'x']
    ]
}