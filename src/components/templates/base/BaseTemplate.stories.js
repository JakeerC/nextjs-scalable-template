import BaseTemplate from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mock';
const metaData = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
export default metaData;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <BaseTemplate {...args} />;

export const Base = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
};
Primary.args = {
  ...mockBaseTemplateProps.primary,
};
Secondary.args = {
  ...mockBaseTemplateProps.secondary,
};
