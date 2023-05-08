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
                <IconItem key={icon.id} name={icon.id}>
                    <Icon name={icon.id} />
                </IconItem>
            ))}
        </IconGallery >
    );
};

export default IconGalleryMapped;