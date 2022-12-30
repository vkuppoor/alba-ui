import { AlbaButtonComponent } from "../../../public-api";
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions'

const testClick = (): void => {
  console.log("test click");
}

// Stories to test variant property

storiesOf('Alba Button', module)
  .add('Variant', () => ({
  component: AlbaButtonComponent,
  template: `
    <div style="display: flex; column-gap: .25rem;">
    <alba-button (click)="onClick()" >Primary</alba-button>
      <alba-button variant="secondary">Secondary</alba-button>
      <alba-button variant="success">Success</alba-button>
      <alba-button variant="info">Info</alba-button>
      <alba-button variant="warning">Warning</alba-button>
      <alba-button variant="danger">Danger</alba-button>
      <alba-button variant="light">Light</alba-button>
      <alba-button variant="dark">Dark</alba-button>
    </div>
  `,
  props: {
    onClick: action('Button Clicked')
  }
}));

storiesOf('Alba Button', module)
  .add('Disabled', () => ({
  component: AlbaButtonComponent,
  template: `
    <div style="display: flex; column-gap: .25rem;">
      <alba-button disabled >Primary Button</alba-button>
      <alba-button disabled variant="secondary">Secondary</alba-button>
      <alba-button variant="success" disabled >Success</alba-button>
    </div>
  `,
  argTypes: { onClick: { action: 'clicked' } },
}));

// Stories to test size property

storiesOf('Alba Button', module)
  .add('Size', () => ({
  component: AlbaButtonComponent,
  template: `
    <div style="display: flex; column-gap: .25rem;">
    <alba-button size="large" >Large</alba-button>
    <alba-button >Normal</alba-button>
      <alba-button size="small">Small</alba-button>
    </div>
  `,
  argTypes: { onClick: { action: 'clicked' } },
}));

// Stories to test outline property

storiesOf('Alba Button', module)
  .add('Outline', () => ({
  component: AlbaButtonComponent,
  template: `
    <div style="display: flex; column-gap: .25rem;">
    <alba-button outline (click)="onClick()" >Primary Outline</alba-button>
      <alba-button outline variant="secondary">Secondary Outline</alba-button>
      <alba-button outline variant="success">Success Outline</alba-button>
      <alba-button outline variant="info">Info Outline</alba-button>
      <alba-button outline variant="warning">Warning Outline</alba-button>
      <alba-button variant="danger" outline >Danger Outline</alba-button>
      <alba-button outline variant="light" >Light Outline</alba-button>
      <alba-button outline variant="dark" >Dark Outline</alba-button>
    </div>
  `,
  props: {
    onClick: action('Button Clicked')
  }
}));

// Stories to test href property

storiesOf('Alba Button', module)
.add('Link', () => ({
  component: AlbaButtonComponent,
  template: `
  <div style="display: flex; column-gap: .25rem;">
    <alba-button href="https://www.google.com/">Google</alba-button>
    <alba-button href="https://www.bing.com/" >Bing</alba-button>
  </div>
  `
}));

// Stories to test block property

storiesOf('Alba Button', module)
.add('Block', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button block>Block</alba-button>
  `
}));

