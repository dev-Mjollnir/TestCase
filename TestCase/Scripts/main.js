$(document).ready(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault()
        const username = $("input[name='username']").val();
        const password = $("input[name='password']").val();
        const data = {
            username: username,
            password: password
        }

        $.ajax({
            url: '/Home/Login',
            type: 'POST',
            data: data,
            dataType: 'json',
            success: function (data) {
                if (data.ResultCode == -1) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.ResultMessage,
                    })
                }
                else {
                    Swal.fire({
                        icon: 'Success',
                        title: 'Welcome ' + data.FirstName + " " + data.LastName,
                        html: "<pre> Your Phone: " + data.Mobile+ "\n" + "Your Email :" + data.Email + "</pre>",
                    })
                }
                
            },
            error: function (request, error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Technical Error',
                })
            }
        });
    })
});

