$(function() {

	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function(element) { // If a field is valid it will return a error 
			$(element)
				.closest('.form-group')
				.addClass('has-error');
		},
		unhighlight: function(element) { // This will unhighlight the errors
			$(element)
				.closest('.form-group')
				.removeClass('has-error');
		}//
	 //    errorPlacement: function (error, element) {
	 //      if (element.prop('type') === 'checkbox') {
	 //        error.insertAfter(element.parent());
	 //      } else {
	 //        error.insertAfter(element);
	 //      }
	 //    }
	})

	// Password validation
	$.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6 // Passwords needs to be longer than 6 characters
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  	}, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')

	$("#form-register").validate({
		rules: {
			email: {
				required: true, // Field is required
				email: true // Needs to be an email type
			},
		    password: {
		        required: true, // Field is required
		        strongPassword: true // Adds the method strong password
		    },
		    password2: {
		        required: true, // Field is required
		        equalTo: '#password' // Confirm password needs to be equal with first password
		    },
		    lpassword: {
		        required: true, // Field is required
		    },
		    first: {
		        required: true, // Field is required
		        nowhitespace: true, // Cant use white space in field
		        lettersonly: true // Only letters can be used
		    },
		    last: {
		        required: true, // Field is required
		        lettersonly: true // Only letters can be used
		    }
		},
		messages: {
			email: {
				required: '<i class="fa fa-times" aria-hidden="true"></i>',
				email: '<i class="fa fa-times" aria-hidden="true"></i>'
			},
		    password: {
		        required: '<i class="fa fa-times" aria-hidden="true"></i>',
		        strongPassword: '<i class="fa fa-times" aria-hidden="true"></i>'
		    },
		    password2: {
		        required: '<i class="fa fa-times" aria-hidden="true"></i>',
		        equalTo: '<i class="fa fa-times" aria-hidden="true"></i>'
		    },
		    lpassword: {
		        required: '<i class="fa fa-times" aria-hidden="true"></i>'
		    },
		    first: {
		        required: '<i class="fa fa-times" aria-hidden="true"></i>',
		        nowhitespace: '<i class="fa fa-times" aria-hidden="true"></i>',
		        lettersonly: '<i class="fa fa-times" aria-hidden="true"></i>'
		    },
		    last: {
		        required: '<i class="fa fa-times" aria-hidden="true"></i>',
		        lettersonly: '<i class="fa fa-times" aria-hidden="true"></i>'
		    }
		}
	});

});