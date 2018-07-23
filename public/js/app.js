document.querySelectorAll(".get_profile");

$('.get_profile').on('click', function(data) {
    var id = data._id;
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/listusers",
        success: function(result) {
           $(".userdetails span").empty();
           console.log(result);
           $("#enterfname").html(result.firstname);
           $("#enterlname").html(result.lastname);
           $("#entercompany").html(result.company);
           $("#entertitle").html(result.title);
           $("#enteradd").html(result.address);
           $("#enterzip").html(result.zip);
           $("#entercity").html(result.city);
           $("#enterstate").html(result.state);
           $("#entercountry").html(result.country);
           $("#enterphone").html(result.phone);
           $("#enteremail").html(result.email);
           $("#enterweb").html(result.web);
           $("#entersys").html(result.system);
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