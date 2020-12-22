$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/api/customer/4"
    }).then(function(data) {
        console.log(data);
       $('#id').append(data.id);
       $('#firstName').append(data.firstName);
       $('#lastName').append(data.lastName);
       $('#email').append(data.email);
       $('#tel').append(data.tel);
    });
});