
jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ children, href }) => (
        <children.type {...children.props} href={href} />
    )
}));
