
$('.get_profile').click(function() {

        var id = $(this).attr("data-id");

    $.ajax({
        type: "GET",
        url: "/api/listusers/" + id,
        success: function(user, err) {

            $("#enterfname").html(user.firstname);
            $("#enterlname").html(user.lastname);
            $("#entercompany").html(user.companyname);
            $("#entertitle").html(user.title);
            $("#enteradd").html(user.address);
            $("#enterzip").html(user.zip);
            $("#entercity").html(user.city);
            $("#enterstate").html(user.state);
            $("#entercountry").html(user.country);
            $("#enterphone").html(user.phone);
            $("#enteremail").html(user.email);
            $("#enterweb").html(user.website);
            $("#entersys").html(user.system);
            console.log(user, err);
        },
        error: function(err) {
           $("#userdetails span").html("<strong> Error </strong>");
           console.log("ERROR: ", err);
        }
      });
   
});
