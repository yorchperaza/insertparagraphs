<?php

/**
 * @file
 */

/**
 * Write default values of additional variables to module configuration.
 */
function insert_paragraphs_update_8102(array &$sandbox) {
    $configFactory = \Drupal::configFactory();
    $config = $configFactory->getEditable('insert_paragraphs.config');

    // It is possible to access the module configuration page and save
    // configuration after applying the new code while not having run the update.
    // So, the new variables might have been registered already, but without their
    // default value.
    if ($config->get('absolute') === NULL) {
        $config->set('absolute', FALSE);
    }

    if ($config->get('widgets') === NULL) {
        $config->set('widgets', ['paragraphs' => []]);
    }

    $config->save(TRUE);
}
