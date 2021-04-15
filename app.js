var app = new Vue({
    el: '#app',
    data: {
        username: "Tudor",
        age: "0",
        exp: "0"

    },

    computed: {
        calcAge: function () {
            let currentDate = new Date();
            let birthDate = new Date(this.age);
            let difference = currentDate - birthDate;
            return Math.floor(difference / 31557600000);

        },

        calcExp: function () {
            let currentDate = new Date();
            let startDate = new Date(this.exp);
            let difference = currentDate - startDate;
            return Math.floor(difference / 31557600000);

        }


    }
})