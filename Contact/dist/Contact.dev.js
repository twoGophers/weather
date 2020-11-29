"use strict";

window.onload = function () {
  var contact__form = new Vue({
    el: '.contact__form',
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      first_last_name: ''
    },
    computed: {
      fullName: {
        get: function get() {
          if (this.firstName && this.lastName) {
            return this.firstName + ' ' + this.lastName;
          } else {
            return this.firstName || this.lastName;
          }
        },
        set: function set(newFullName) {
          var names = newFullName.split(' ');

          if (names.length == 2) {
            this.firstName = names[0];
            this.lastName = names[1];
          }

          if (names.length <= 1) {
            this.firstName = names[0] || '';
            this.lastName = '';
          }
        }
      },
      emailIsValid: function emailIsValid() {
        return this.email.includes('@');
      },
      phoneIsValid: function phoneIsValid() {
        return this.phone["typeof"]('number');
      },
      formIsValid: function formIsValid() {
        return this.firstName && this.lastName && this.email && this.phone;
      },
      emailClasses: function emailClasses() {
        return {
          touched: this.email.length !== 0,
          invalid: this.email && !this.emailIsValid
        };
      }
    },
    methods: {
      resetFields: function resetFields() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
      }
    }
  });
};