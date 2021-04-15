var app = new Vue({
    el: '#app',
    data: {
        username: "Tudor",
        age: 0,
        exp: 0,
        lang: 1,
        expYears: 0,
        salary: 0,
        pos: 1,
        coeff: [10000, 12000, 13500, 14000, 15000],
    },

    computed: {
        calcAge: function() {
            let currentDate = new Date();
            let birthDate = new Date(this.age);
            let difference = currentDate - birthDate;
            return Math.floor(difference / 31557600000);

        }

    },
    watch: {
        lang: function(val) {
            this.lang = parseFloat(val);
            this.salary = this.coeff[this.pos - 1] * this.lang;

        },
        expYears: function(val) {
            (val >= "5") ? this.pos = 5: this.pos = val;
            if (val <= "0") this.pos = 1;
            this.salary = this.coeff[this.pos - 1] * this.lang;
            }
    }
})