/* global document, window */
window.onscroll = function () {
    'use strict';
    var el = document.getElementById('arrow');
    if (window.pageYOffset >= 500) {
        el.style.fontSize = '40px';
        el.addEventListener('click', function () {
            window.scrollTo(0, 0);
           
        });
    } else if (window.pageYOffset < 500) {
        el.style.fontSize = '0px';
    }

};
var one = document.getElementById('on'),
    two = document.getElementById('tw'),
    three = document.getElementById('th'),
    four = document.getElementById('fo'),
    five = document.getElementById('fv'),
    sol1 = document.getElementById('sol1'),
    sol2 = document.getElementById('sol2'),
    sol3 = document.getElementById('sol3'),
    sol4 = document.getElementById('sol4'),
    sol5 = document.getElementById('sol5'),
    sol6 = document.getElementById('sol6'),
    sol7 = document.getElementById('sol7'),
    sol8 = document.getElementById('sol8'),
    sol9 = document.getElementById('sol9');
sol1.style.display = 'inherit';
sol2.style.display = 'inherit';
sol3.style.display = 'inherit';
sol4.style.display = 'inherit';
sol5.style.display = 'inherit';
sol6.style.display = 'inherit';
sol7.style.display = 'inherit';
sol8.style.display = 'inherit';
sol9.style.display = 'inherit';
one.style.backgroundColor = '#007bff';
one.style.color = 'white';
one.addEventListener('click', function () {
    'use strict';
    sol1.style.display = 'inherit';
    sol2.style.display = 'inherit';
    sol3.style.display = 'inherit';
    sol4.style.display = 'inherit';
    sol5.style.display = 'inherit';
    sol6.style.display = 'inherit';
    sol7.style.display = 'inherit';
    sol8.style.display = 'inherit';
    sol9.style.display = 'inherit';
    one.style.backgroundColor = '#007bff';
    one.style.color = 'white';
    two.style.backgroundColor = 'white';
    two.style.color = '#6B6B6B';
    three.style.backgroundColor = 'white';
    three.style.color = '#6B6B6B';
    four.style.backgroundColor = 'white';
    four.style.color = '#6B6B6B';
    five.style.backgroundColor = 'white';
    five.style.color = '#6B6B6B';
});
two.addEventListener('click', function () {
    'use strict';
    sol1.style.display = 'inherit';
    sol2.style.display = 'inherit';
    sol3.style.display = 'inherit';
    sol4.style.display = 'none';
    sol5.style.display = 'none';
    sol6.style.display = 'none';
    sol7.style.display = 'none';
    sol8.style.display = 'none';
    sol9.style.display = 'none';
    one.style.backgroundColor = 'white';
    one.style.color = '#6B6B6B';
    two.style.backgroundColor = '#007bff';
    two.style.color = 'white';
    three.style.backgroundColor = 'white';
    three.style.color = '#6B6B6B';
    four.style.backgroundColor = 'white';
    four.style.color = '#6B6B6B';
    five.style.backgroundColor = 'white';
    five.style.color = '#6B6B6B';

});
three.addEventListener('click', function () {
    'use strict';
    sol1.style.display = 'none';
    sol2.style.display = 'none';
    sol3.style.display = 'none';
    sol4.style.display = 'inherit';
    sol5.style.display = 'inherit';
    sol6.style.display = 'inherit';
    sol7.style.display = 'none';
    sol8.style.display = 'none';
    sol9.style.display = 'none';
    one.style.backgroundColor = 'white';
    one.style.color = '#6B6B6B';
    two.style.backgroundColor = 'white';
    two.style.color = '#6B6B6B';
    three.style.backgroundColor = '#007bff';
    three.style.color = 'white';
    four.style.backgroundColor = 'white';
    four.style.color = '#6B6B6B';
    five.style.backgroundColor = 'white';
    five.style.color = '#6B6B6B';

});
four.addEventListener('click', function () {
    'use strict';
    sol1.style.display = 'none';
    sol2.style.display = 'none';
    sol3.style.display = 'none';
    sol4.style.display = 'none';
    sol5.style.display = 'none';
    sol6.style.display = 'none';
    sol7.style.display = 'inherit';
    sol8.style.display = 'inherit';
    sol9.style.display = 'inherit';
    one.style.backgroundColor = 'white';
    one.style.color = '#6B6B6B';
    two.style.backgroundColor = 'white';
    two.style.color = '#6B6B6B';
    three.style.backgroundColor = 'white';
    three.style.color = '#6B6B6B';
    four.style.backgroundColor = '#007bff';
    four.style.color = 'white';
    five.style.backgroundColor = 'white';
    five.style.color = '#6B6B6B';
});
five.addEventListener('click', function () {
    'use strict';
    sol1.style.display = 'none';
    sol2.style.display = 'inherit';
    sol3.style.display = 'none';
    sol4.style.display = 'inherit';
    sol5.style.display = 'none';
    sol6.style.display = 'inherit';
    sol7.style.display = 'inherit';
    sol8.style.display = 'none';
    sol9.style.display = 'inherit';
    one.style.backgroundColor = 'white';
    one.style.color = '#6B6B6B';
    two.style.backgroundColor = 'white';
    two.style.color = '#6B6B6B';
    three.style.backgroundColor = 'white';
    three.style.color = '#6B6B6B';
    four.style.backgroundColor = 'white';
    four.style.color = '#6B6B6B';
    five.style.backgroundColor = '#007bff';
    five.style.color = 'white';

});