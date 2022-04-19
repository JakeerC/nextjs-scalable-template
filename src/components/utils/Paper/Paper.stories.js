import Paper from './Paper.component';
import { mockPaperProps } from './Paper.mock';
const metaData = {
  title: 'templates/Paper',
  component: Paper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
export default metaData;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Paper {...args} />;

export const Base = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPaperProps.base,
};
Primary.args = {
  ...mockPaperProps.primary,
};
Secondary.args = {
  ...mockPaperProps.secondary,
};
