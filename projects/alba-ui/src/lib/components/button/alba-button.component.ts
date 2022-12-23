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
        class="
          btn 
          btn{{ outlineClass }}{{ variantClass }} 
          btn{{ sizeClass }} 
          {{ disabledClass }} 
          {{ blockClass }}
        "
      >
        <ng-container [ngTemplateOutlet]="buttonContent"></ng-container>
      </button>
    </ng-container>
    <ng-container *ngIf="href !== undefined">
    <a
      [href]="href" 
      class="
        btn 
        btn{{ outlineClass }}{{ variantClass }} 
        btn{{ sizeClass }} 
        {{ disabledClass }} 
        {{ linkClass }} 
        {{ blockClass }}
      "
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
  @Input() loading = false;

  disabledClass: string = "";
  variantClass: string = "";
  outlineClass: string = "";
  sizeClass: string = "";
  linkClass: string = "";
  blockClass: string = "";

  ngOnInit() {

    if ( this.disabled !== undefined || this.disabled === true) {
      this.disabledClass = 'disabled';
    }

    if ( this.outline !== undefined || this.outline === true) {
      this.outlineClass = '-outline';
    }

    if ( this.block !== undefined || this.block === true) {
      this.blockClass = 'btn-block';
    }

    if ( this.size == 'small' ) {
      this.sizeClass = '-sm';
    } else if ( this.size == 'large' ) {
      this.sizeClass = '-lg';
    }

    if (this.href !== undefined) {
      this.linkClass = "btn-link"
    }

    this.variantClass = "-" + this.variant;
    

  }

 }
