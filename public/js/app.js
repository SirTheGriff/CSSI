
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







// $(function() {
//
//     $('.editlink').on('click', function(){
//
//         var id = $(this).data('id');
//
//         $.ajax({
//
//             method: "GET",
//
//             url: "/fetchdata",
//
//             data: { id:  id },
//
//         }).done(function( data ) {
//
//             $('#id').val(data[0]['_id']);
//
//             $('#product_name').val(data[0]['product_name']);
//
//             $('#price').val(data[0]['price']);
//
//             $('#category').val(data[0]['category']);
//
//             $("#subbtn").val('Edit Product');
//
//             $('#form1').attr('action', '/edit');
//
//         });
//
//     });
//
// });