// videos
(function (window) {
    function setupVideo() {
        var v = document.getElementById('videoElement1');
        v.addEventListener('mouseover', function () { this.controls = true; }, false);
        v.addEventListener('mouseout', function () { this.controls = false; }, false);
        v.addEventListener('ended', function () { this.load(); }, false); // Add this line
    }

    window.addEventListener('load', setupVideo, false);
})(window);

(function (window) {
    function setupVideo() {
        var v = document.getElementById('videoElement2');
        v.addEventListener('mouseover', function () { this.controls = true; }, false);
        v.addEventListener('mouseout', function () { this.controls = false; }, false);
        v.addEventListener('ended', function () { this.load(); }, false); // Add this line
    }

    window.addEventListener('load', setupVideo, false);
})(window);

(function (window) {
    function setupVideo() {
        var v = document.getElementById('videoElement3');
        v.addEventListener('mouseover', function () { this.controls = true; }, false);
        v.addEventListener('mouseout', function () { this.controls = false; }, false);
        v.addEventListener('ended', function () { this.load(); }, false); // Add this line
    }

    window.addEventListener('load', setupVideo, false);
})(window);





// clock

var Clock = (function () {

    var exports = function (element) {
        this._element = element;
        var html = '';
        for (var i = 0; i < 6; i++) {
            html += '<span>&nbsp;</span>';
        }
        this._element.innerHTML = html;
        this._slots = this._element.getElementsByTagName('span');
        this._tick();
    };

    exports.prototype = {

        _tick: function () {
            var time = new Date();
            this._update(this._pad(time.getHours()) + this._pad(time.getMinutes()) + this._pad(time.getSeconds()));
            var self = this;
            setTimeout(function () {
                self._tick();
            }, 1000);
        },

        _pad: function (value) {
            return ('0' + value).slice(-2);
        },

        _update: function (timeString) {

            var i = 0, l = this._slots.length, value, slot, now;
            for (; i < l; i++) {

                value = timeString.charAt(i);
                slot = this._slots[i];
                now = slot.dataset.now;

                if (!now) {
                    slot.dataset.now = value;
                    slot.dataset.old = value;
                    continue;
                }

                if (now !== value) {
                    this._flip(slot, value);
                }
            }
        },

        _flip: function (slot, value) {

            // setup new state
            slot.classList.remove('flip');
            slot.dataset.old = slot.dataset.now;
            slot.dataset.now = value;

            // force dom reflow
            slot.offsetLeft;

            // start flippin
            slot.classList.add('flip');

        }

    };

    return exports;
}());

var i = 0, clocks = document.querySelectorAll('.clock'), l = clocks.length;
for (; i < l; i++) {
    new Clock(clocks[i]);
}



var Clock = (function () {

    var exports = function (element) {
        this._element = element;
        var html = '';
        for (var i = 0; i < 6; i++) {
            html += '<span>&nbsp;</span>';
        }
        this._element.innerHTML = html;
        this._slots = this._element.getElementsByTagName('span');
        this._tick();
    };

    exports.prototype = {

        _tick: function () {
            var now = new Date();
            var midday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
            if (now > midday) {
                midday.setDate(midday.getDate() + 1);
            }
            var diff = midday - now;
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);
            diff -= minutes * 1000 * 60;
            var seconds = Math.floor(diff / 1000);

            this._update(this._pad(hours) + this._pad(minutes) + this._pad(seconds));

            var self = this;
            setTimeout(function () {
                self._tick();
            }, 1000);
        },

        _pad: function (value) {
            return ('0' + value).slice(-2);
        },

        _update: function (timeString) {
            var i = 0, l = this._slots.length, value, slot, now;
            for (; i < l; i++) {
                value = timeString.charAt(i);
                slot = this._slots[i];
                now = slot.dataset.now;
                if (!now) {
                    slot.dataset.now = value;
                    slot.dataset.old = value;
                    slot.innerHTML = value;
                    continue;
                }
                if (now !== value) {
                    this._flip(slot, value);
                }
            }
        },

        _flip: function (slot, value) {
            slot.classList.remove('flip');
            slot.dataset.old = slot.dataset.now;
            slot.dataset.now = value;
            slot.offsetLeft;
            slot.innerHTML = value;
            slot.classList.add('flip');
        }
    };

    return exports;
}());

var i = 0, clocks = document.querySelectorAll('.clock'), l = clocks.length;
for (; i < l; i++) {
    new Clock(clocks[i]);
}


// Number of People
window.onload = function() {
    const numberDisplay = document.getElementById('numberDisplay');
    let number = 123423418; // Starting number

    numberDisplay.textContent = number.toLocaleString();

    setInterval(function() {
        const randomNumber = Math.floor(Math.random() * (1000000 - 1000) + 1000);
        number += randomNumber;
        numberDisplay.textContent = number.toLocaleString();
    }, 1000);
};
