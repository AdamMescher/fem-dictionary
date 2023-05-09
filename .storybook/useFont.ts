import { useEffect, useGlobals } from '@storybook/addons';

export const useFont = (StoryFn) => {
    const [{ font }] = useGlobals();

    useEffect(() => {
        document.body.setAttribute('data-font', font);
    }, [font]);

    return StoryFn();
};