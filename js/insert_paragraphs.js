(function($, Drupal) {
  'use strict';

  var INSERT_TYPE_PARAGRAPHS = 'paragraph';

  Drupal.behaviors.insert_paragraph = {};

  Drupal.behaviors.insert_paragraph.attach = function(context) {
    $('.insert', context).each(function() {
      var $insert = $(this);

      if ($insert.data('insert-type') !== INSERT_TYPE_PARAGRAPHS) {
        return;
      }

      var $inserter = $($insert.data('insert'));

      // Be sure to have the event listener attached only once.
      $inserter.off('.insert_paragraph').on('insert.insert_paragraph', function() {
        var $viewModes = $insert.find('[name$="[view_modes]"]');
        var viewMode = $viewModes.val();
        return $insert.find('[name="template[' + viewMode + ']"]').val();
      });
    });
  }

})(jQuery, Drupal);
