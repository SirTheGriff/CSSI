
$('.get_profile').click(function() {
        alert($(this).attr("data-id"));
        var id = $(this).attr("data-id");

    $.ajax({
        type: "POST",
        traditional: true,
        dataType: "json",
        context: id,
        data: id,
        url: "/listusers",
        success: function(id) {

            $("#enterfname").html(id.firstname);
            $("#enterlname").html(id.lastname);
            $("#entercompany").html(id.companyname);
            $("#entertitle").html(id.title);
            $("#enteradd").html(id.address);
            $("#enterzip").html(id.zip);
            $("#entercity").html(id.city);
            $("#enterstate").html(id.state);
            $("#entercountry").html(id.country);
            $("#enterphone").html(id.phone);
            $("#enteremail").html(id.email);
            $("#enterweb").html(id.web);
            $("#entersys").html(id.system);
            console.log(id);
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