toDelete = "";

function deleteImage(image_src) {

  toDelete = image_src;

  $("#surePhotoLabel").text(image_src);

  $("#areYouSureDelete").modal('show');

}

function confirmDelete() {

  // When you delete a file, it is moved to the /trash directory,
  // to avoid losing data... The cron job will get rid of it after
  // 1-2 days.

  $('#form').addClass('loading')

  $.post("/helpers/deleteFile.php", {"src": toDelete}, function() {

    $('#form').addClass('success')

  })
    .done(function() {
      $('#form').removeClass('loading')
      location.reload();
    })
    .fail(function() {
      $('#form').removeClass('loading')
      $('#form').addClass('error')
    })

}

function updateDesc(writeURL) {

  desc = $("#albumDesc").val();

  $('#form').addClass('loading')

  $.post("/helpers/writeJSON.php", {"file": writeURL.substring(3),"json_data": desc}, function() {

    $('#form').addClass('success')

  })
    .done(function() {

      $('#form').removeClass('loading')

    })
    .fail(function() {

      $('#form').removeClass('loading')
      $('#form').addClass('error')

    })

}

$('#newAlbum').click(function() {

  $('#album_title.modal')
    .modal({
      closable  : false,
      onDeny    : function(){
      },
      onApprove : function() {

        $('#form').addClass('loading');

        dir_name = $("#dir_name").val();

        console.log(dir_name)

        $.post("/helpers/createDir.php", {"dir_name": dir_name, "location": 'resources/images/albums'}, function() {

          $('#form').removeClass('loading');

          location.reload();

        })
          .fail(function() {

            alert("An error occured");
            $('#form').removeClass('loading');

          })

      }
    })
    .modal('show');

});

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
