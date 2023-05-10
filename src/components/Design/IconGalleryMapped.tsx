import * as React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import Icon from '@/components/Icon';

type Icon = {
  id: string;
  name: string;
};

type IconGalleryMappedProps = {
  icons: Icon[];
};

const IconGalleryMapped = ({ icons }: IconGalleryMappedProps) => {
  return (
    <IconGallery>
      {icons.map((icon) => (
        <IconItem key={icon.name} name={icon.name}>
          <Icon name={icon.name} />
        </IconItem>
      ))}
    </IconGallery>
  );
};

export default IconGalleryMapped;
