// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var _this = this;
    $(".menu").click(function(event) {
      $(".nav").toggleClass('show');
      return false;
    });
    $("section").click(function() {
      if ($(".nav").hasClass("show")) {
        $(".nav").removeClass("show");
      }
    });
    $(".close").click(function(event) {
      $(event.currentTarget).parent().hide();
    });
    $("form").submit(function(event) {
      $(event.currentTarget).submit(function() {
        return false;
      });
      return true;
    });
    $('.comment-delete').click(function(event) {
      var link;
      if (confirm("If you delete this comment you can't recover\nDo you want to delete it anyway?")) {
        link = $(event.currentTarget).data('path');
        $.ajax(link, {
          type: 'DELETE',
          error: function() {
            alert('Delete Error');
          },
          success: function(data) {
            $(event.currentTarget).parent().hide();
          }
        });
      }
      return false;
    });
    $('.delete').click(function(event) {
      if (confirm("If you delete this post you can't recover\nDo you want to delete it anyway?")) {
        return true;
      } else {
        return false;
      }
    });
    $('.cancel').click(function(event) {
      window.history.back();
      return false;
    });
  });

}).call(this);
