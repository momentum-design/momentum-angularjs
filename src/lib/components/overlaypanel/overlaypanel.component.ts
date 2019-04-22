/** @component overlay-panel */
import * as angular from 'angular';

export class OverlayPanel implements ng.IComponentOptions {
  /**

      */
  public controller = angular.noop;
  public controllerAs = 'op';
  public transclude = true;
  public bindings = {
    overlayTitle: '@',
    close: '&',
    closeAriaLabel: '@',
  };
  public template = `
    <div class="md-modal__backdrop fade in">
      <div
        role="dialog"
        class="md-modal md-modal--full in"
        tabindex="-1">
        <div class="md-modal__content">
          <div class="md-modal__header">
            <h2 class="title">{{ op.overlayTitle }}</h2>
            <button
              class="md-close md-modal__close"
              data-dismiss="modal"
              ng-click="op.close()"
              id="close-panel"
              aria-label="{{ op.closeAriaLabel }}">
            </button>
          </div>
          <div class="md-modal__body" ng-transclude>
          </div>
        </div>
      </div>
    </div>
  `;
}
/**
* @component overlay-panel
* @section default
*
* @html
* <md-overlay-panel></md-overlay-panel>
*
* @param overlayTitle - The title dispayed in the panel header
* @param close - function for close icon to execute
* @param closeAriaLabel - translated aria label for close button
*/