import * as React from 'react';
import { IconGallery, IconItem } from '@storybook/blocks';
import Icon from '@/components/Icon';

type Icon = {
    id: string;
    name: string;
}

type IconGalleryMappedProps = {
    icons: Icon[];
}

const IconGalleryMapped = ({
    icons,
}: IconGalleryMappedProps) => {
    return (
        <IconGallery>
            {icons.map(icon => (
                <IconItem name={icon.id}>
                    <Icon id={icon.id} />
                </IconItem>
            ))}
        </IconGallery >
    );
};

export default IconGalleryMapped;