$(function() {

	$.validator.setDefaults({
		errorClass: 'profile-error',
		highlight: function(element) { // If a field is valid it will return a error 
			$(element)
				.closest('.info-a')
				.addClass('has-error');
		},
		unhighlight: function(element) { // This will unhighlight the errors
			$(element)
				.closest('.info-a')
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

	$("#change-profile").validate({
		rules: {
			email: {
				required: true, // Field is required
				email: true // Needs to be an email type
			},
		    new_pw: {
		        strongPassword: true // Adds the method strong password
		    },
		    password: {
		        required: true, // Field is required
		    }
		},
		messages: {
			email: {
				required: '<i class="fa fa-times" aria-hidden="true"></i>',
				email: '<i class="fa fa-times" aria-hidden="true"></i>'
			},
		    new_pw: {
		        strongPassword: '<i class="fa fa-times" aria-hidden="true"></i>'
		    },
		    password: {
		        required: '<i class="fa fa-times" aria-hidden="true"></i>'
		    }
		}
	});

});