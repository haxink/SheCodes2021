export interface Menu {
    title: string;
    route: string;
    options?: {};
}

export const sideMenu: Menu[] = [
    {
        title: 'Jobs',
        route: './jobs',
    },
    {
        title: 'Companies',
        route: './companies',
    },
    {
        title: 'Salary',
        route: './salary',
        options: {
            future: true,
        }
    },
    {
        title: 'News feed',
        route: './feed',
    },
    {
        title: 'Account',
        route: './account',
    },
];
