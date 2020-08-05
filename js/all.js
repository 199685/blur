$(document).ready(function() {
    var countId = document.getElementById('countId')
    var ham = document.getElementById('hamNumId')
    var coke = document.getElementById('cokeNumId')
    var body = document.body

    function check(e) {
        var hamvalue = ham.value
        var cokevalue = coke.value
        var cokemoney = 30
        var hammoney = 55
        e.stopPropagation();
        var total = document.getElementById('totalId')
        if (parseInt(hamvalue) >= 0 && parseInt(cokevalue) >= 0) {
            total.textContent = (hamvalue * hammoney) + (cokevalue * cokemoney)
        } else if (typeof(hamvalue) == 'string' || typeof(cokevalue) == 'string') {
            total.textContent = ''
            alert('輸入錯誤')
            console.log('123')
            if (!(hamvalue >= 0)) {
                ham.value = ''
            }
            if (!(cokevalue >= 0)) {
                coke.value = ''
            }
        }

    }
    countId.addEventListener('click', check, false)

    ham.addEventListener('blur', function(e) {
        var str = e.target.value
        if (str == '') {
            ham.style.background = 'red'
        } else {
            ham.style.background = ''
        }
    }, false)

    coke.addEventListener('blur', function(e) {
        var str = e.target.value
        if (str == '') {
            coke.style.background = 'red'
        } else {
            coke.style.background = ''
        }
    }, false)
    body.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            check()
        }

    }, false)

});