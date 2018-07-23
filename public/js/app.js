document.querySelectorAll(".get_profile");

$('.get_profile').on('click', function() {
    var id = $(this).data('id');
    $.ajax({
        dataType: 'json',
        method: "GET",
        url: "/listusers",
        data: data,
    }).done(function(data) {
        console.log(data)
    })
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