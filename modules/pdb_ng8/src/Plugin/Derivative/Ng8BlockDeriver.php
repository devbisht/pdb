<?php

namespace Drupal\pdb_ng8\Plugin\Derivative;

use Drupal\pdb\Plugin\Derivative\PdbBlockDeriver;

/**
 * Derives block plugin definitions for Angular 8 components.
 */
class Ng8BlockDeriver extends PdbBlockDeriver {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $definitions = parent::getDerivativeDefinitions($base_plugin_definition);

    return array_filter($definitions, function (array $definition) {
      return $definition['info']['presentation'] == 'ng8';
    });
  }

}
