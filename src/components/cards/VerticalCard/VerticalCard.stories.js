import VerticalCard from './VerticalCard.component';
import { mockVerticalCardProps } from './VerticalCard.mock';
const metaData = {
  title: 'cards/VerticalCard',
  component: VerticalCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
export default metaData;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <VerticalCard {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockVerticalCardProps.base,
};
