<?php

namespace Drupal\pdb_ng8\Plugin\Block;

use Drupal\pdb\Plugin\Block\PdbBlock;

/**
 * Exposes an Angular 8 component as a block.
 *
 * @Block(
 *   id = "ng8_component",
 *   admin_label = @Translation("Angular 8 component"),
 *   deriver = "\Drupal\pdb_ng8\Plugin\Derivative\Ng8BlockDeriver"
 * )
 */
class Ng8Block extends PdbBlock {

  public function getSelector(){
    $info = $this->getComponentInfo();
    $selector = $info['machine_name'];
    if(isset($info['selector'])) {
      $selector = $info['selector'];
    }
    return $selector;
  }
  /**
   * {@inheritdoc}
   */
  public function build() {
    $selector = $this->getSelector();
    $build = parent::build();
    $build['#uuid'] = $this->configuration['uuid']; // lets add this to get while altering block
    $build['#allowed_tags'] = [$selector];
    $build['#type'] = 'markup';
    $build['#markup'] = '<' . $selector . ' id="instance-id-' . $this->configuration['uuid'] . '"></' . $selector . '>';
    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function attachFramework(array $component) {
    $attached = array();
    $attached['drupalSettings']['pdb']['ng8']['global_injectables'] = [];
    return $attached;
  }

  /**
   * {@inheritdoc}
   */
  public function attachSettings(array $component) {
    $attached = parent::attachSettings($component);

    $selector = $this->getSelector();
    $machine_name = $component['machine_name'];
    $uuid = $this->configuration['uuid'];

    $attached['drupalSettings']['pdb']['ng8']['components']['instance-id-' . $uuid] = [
      'uri' => $component['path'],
      'element' => $selector,
      'element_module' => $machine_name,
    ];
    // Check if ng_class_name was defined.
    if(!empty($component['ng_class_name'])) {
      // Add "ngClassName" value.
      $attached['drupalSettings']['pdb']['ng8']['components']['instance-id-' . $uuid] += [
        'ngClassName' => $component['ng_class_name'],
      ];
    }
    $attached['drupalSettings']['pdb']['ng8']['module_path'] = drupal_get_path('module', 'pdb_ng8');

    $config_settings = \Drupal::config('pdb_ng8.settings');
    if (isset($config_settings)) {
      $attached['drupalSettings']['pdb']['ng8']['development_mode'] = $config_settings->get('development_mode');
    }
    else {
      $attached['drupalSettings']['pdb']['ng8']['development_mode'] = TRUE;
    }

    return $attached;
  }

  /**
   * {@inheritdoc}
   */
  public function attachLibraries(array $component) {
    $parent_libraries = parent::attachLibraries($component);

    $framework_libraries = array(
      'pdb_ng8/pdb.ng8.config',
    );

    $libraries = array(
      'library' => array_merge($parent_libraries, $framework_libraries),
    );

    return $libraries;
  }

}
