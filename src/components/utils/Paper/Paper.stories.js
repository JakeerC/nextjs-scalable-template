import Paper from './Paper.component';
import { mockPaperProps } from './Paper.mock';
const metaData = {
  title: 'utils/Paper',
  component: Paper,
  children: 'sample default text',
  className: '',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
export default metaData;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Paper {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPaperProps.base,
};
