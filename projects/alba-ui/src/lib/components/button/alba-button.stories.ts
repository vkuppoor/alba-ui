import { AlbaButtonComponent } from "../../../public-api";
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions'

const testClick = (): void => {
  console.log("test click");
}

// Stories to test variant property

storiesOf('Alba Button/Variant', module)
  .add('Primary', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button (click)="onClick()" >Primary</alba-button>
  `,
  props: {
    onClick: action('Button Clicked')
  }
}));

storiesOf('Alba Button/Variant', module)
  .add('Secondary', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button variant="secondary">Secondary</alba-button>
  `
}));

storiesOf('Alba Button/Variant', module)
.add('Success', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="success">Success</alba-button>
  `
}));

storiesOf('Alba Button/Variant', module)
.add('Info', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="info">Info</alba-button>
  `
}));

storiesOf('Alba Button/Variant', module)
.add('Warning', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="warning">Warning</alba-button>
  `
}));

storiesOf('Alba Button/Variant', module)
.add('Danger', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="danger">Danger</alba-button>
  `
}));

storiesOf('Alba Button/Variant', module)
.add('Light', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="light">Light</alba-button>
  `
}));

storiesOf('Alba Button/Variant', module)
.add('Dark', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="dark">Dark</alba-button>
  `
}));

// Stories to test disabled property

storiesOf('Alba Button/Disabled', module)
  .add('Primary Disabled', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button disabled >Primary Button</alba-button>
  `,
  argTypes: { onClick: { action: 'clicked' } },
}));

storiesOf('Alba Button/Disabled', module)
  .add('Secondary Disabled', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button disabled variant="secondary">Secondary</alba-button>
  `
}));

storiesOf('Alba Button/Disabled', module)
.add('Success Disabled', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="success" disabled >Success</alba-button>
  `
}));

// Stories to test size property

storiesOf('Alba Button/Size', module)
  .add('Large', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button size="large" >Large</alba-button>
  `,
  argTypes: { onClick: { action: 'clicked' } },
}));

storiesOf('Alba Button/Size', module)
  .add('Normal', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button >Normal</alba-button>
  `,
  argTypes: { onClick: { action: 'clicked' } },
}));

storiesOf('Alba Button/Size', module)
  .add('Small', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button size="small">Small</alba-button>
  `
}));

// Stories to test outline property

storiesOf('Alba Button/Outline', module)
  .add('Primary', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button outline (click)="onClick()" >Primary Outline</alba-button>
  `,
  props: {
    onClick: action('Button Clicked')
  }
}));

storiesOf('Alba Button/Outline', module)
  .add('Secondary', () => ({
  component: AlbaButtonComponent,
  template: `
    <alba-button outline variant="secondary">Secondary Outline</alba-button>
  `
}));

storiesOf('Alba Button/Outline', module)
.add('Success Outline', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button outline variant="success">Success Outline</alba-button>
  `
}));

storiesOf('Alba Button/Outline', module)
.add('Info Outline', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button outline variant="info">Info Outline</alba-button>
  `
}));

storiesOf('Alba Button/Outline', module)
.add('Warning Outline', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button outline variant="warning">Warning Outline</alba-button>
  `
}));

storiesOf('Alba Button/Outline', module)
.add('Danger Outline', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button variant="danger" outline >Danger Outline</alba-button>
  `
}));

storiesOf('Alba Button/Outline', module)
.add('Light Outline', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button outline variant="light" >Light Outline</alba-button>
  `
}));

storiesOf('Alba Button/Outline', module)
.add('Dark Outline', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button outline variant="dark" >Dark Outline</alba-button>
  `
}));

// Stories to test href property

storiesOf('Alba Button/Link', module)
.add('Google Link', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button href="https://www.google.com/">Google</alba-button>
  `
}));

storiesOf('Alba Button/Link', module)
.add('Bing Link', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button href="https://www.bing.com/" >Bing</alba-button>
  `
}));

// Stories to test block property

storiesOf('Alba Button/Block', module)
.add('Block', () => ({
  component: AlbaButtonComponent,
  template: `
  <alba-button block>Block</alba-button>
  `
}));

