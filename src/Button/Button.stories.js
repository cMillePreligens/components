import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

function Template(args) {
  return (
    <Button {...args} />
  );
}

export const Default = Template.bind({});
Default.args = {
  children: "default button",
};

Default.storyName = 'Default';
