<?php

namespace Drupal\pdb_ng8\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class PdbNg8Form.
 *
 * @package Drupal\pdb_ng8\Form
 */
class PdbNg8Form extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['pdb_ng8.settings'];
  }

  /**
   * {@inheridoc}
   */
  public function getFormId() {
    return 'pdb_ng8_form';
  }

  /**
   * {@inheridoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('pdb_ng8.settings');
    $form['development_mode'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Development Mode'),
      '#description' => $this->t('Checking the box enables development mode'),
      '#default_value' => $config->get('development_mode'),
    );
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);
    // Set variables based on form values.
    $development_mode = $form_state->getValue('development_mode');
    // Get the config object.
    $config = \Drupal::service('config.factory')
      ->getEditable('pdb_ng8.settings');
    // Set the values the user submitted in the form.
    $config->set('development_mode', $development_mode);
    $config->save();
  }

}
