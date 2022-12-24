import { Component, Input, ViewEncapsulation } from '@angular/core';

export const AlbaButtonTypes = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark'

] as const;
export type AlbaButtonVariant = typeof AlbaButtonTypes[number];
export type AlbaButtonSize = 'small' | 'large' | undefined;
export type AlbaButtonType = 'button' | 'reset' | 'submit';

@Component({
  selector: 'alba-button',
  template: `
    <ng-container *ngIf="href === undefined">
      <button
        [ngClass]="[
          'btn',
          setBlockStyle(),
          setStyle(), 
          setSizeStyle(), 
          setDisabledStyle(), 
        ]"
      >
        <ng-container [ngTemplateOutlet]="buttonContent"></ng-container>
      </button>
    </ng-container>
    <ng-container *ngIf="href !== undefined">
    <a
      [href]="href" 
      [ngClass]="[
        'btn',
        setBlockStyle(),
        setStyle(), 
        setSizeStyle(), 
        setDisabledStyle(), 
        setLinkStyle()
      ]"
    >
      <ng-container [ngTemplateOutlet]="buttonContent"></ng-container>
    </a>
    </ng-container>
    <ng-template #buttonContent>
      <ng-content></ng-content>
    </ng-template>
    
  `,
  styleUrls: ['./alba-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlbaButtonComponent {

  @Input() variant: AlbaButtonVariant = 'primary';
  @Input() size: AlbaButtonSize;
  @Input() type: AlbaButtonType = 'button';
  @Input() disabled: boolean | undefined;
  @Input() outline: boolean | undefined;
  @Input() href: string | undefined;
  @Input() block: boolean | undefined;

  setStyle(): string {
    if ( this.outline !== undefined || this.outline === true) {
      return 'btn-outline-' + this.variant;
    }

    return 'btn-' + this.variant;
  }

  setDisabledStyle(): string {
    if ( this.disabled !== undefined || this.disabled === true) {
      return 'disabled';
    }
    return '';
  }

  setSizeStyle(): string {
    if ( this.size == 'small' ) {
      return 'btn-sm';
    } 
    
    if ( this.size == 'large' ) {
      return 'btn-lg';
    }

    return '';
  }

  setBlockStyle(): string {
    if ( this.block !== undefined || this.block === true) {
      return 'btn-block';
    }
    return '';
  }

  setLinkStyle(): string {
    if (this.href !== undefined) {
      return 'btn-link';
    }
    return '';
  }

 }
