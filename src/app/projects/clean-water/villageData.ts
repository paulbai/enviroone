export interface Project {
    id: string;
    name: string;
    sponsor?: string;
    videoId?: string;
    photos: { src: string; caption: string; }[];
}

export interface Village {
    id: string;
    name: string;
    displayName: string;
    heroImage: string;
    projectCount: number;
    projects: Project[];
}

export const villages: Village[] = [
    {
        id: 'lungi',
        name: 'Lungi',
        displayName: 'Lungi Community',
        heroImage: '/projects/clean_water_18.png', // Placeholder - will be replaced
        projectCount: 8,
        projects: [
            {
                id: 'lungi-airport',
                name: 'Lungi-Airport Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/lungi_airport_prayer.jpg', caption: 'Community Gathering for Prayer' },
                    // Milestone 2: Construction
                    { src: '/projects/lungi_airport_construction_1.png', caption: 'Well Depth Measurement' },
                    { src: '/projects/lungi_airport_construction_2.jpg', caption: 'Construction Phase' },
                    { src: '/projects/lungi_airport_construction_3.jpg', caption: 'Well Structure Complete' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/lungi_airport_celebration.jpg', caption: 'Community Celebration' }
                ],
                videoId: undefined
            },
            {
                id: 'kasonha',
                name: 'Kasonha Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/kasonha_prayer.png', caption: 'Initial Site Assessment & Prayer' },
                    // Milestone 2: Construction
                    { src: '/projects/kasonha_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/kasonha_construction_2.jpg', caption: 'Well Structure & Pump Installation' },
                    { src: '/projects/kasonha_construction_3.jpg', caption: 'Testing the Water Pump' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/kasonha_celebration.png', caption: 'Community Celebration & First Water' }
                ],
                videoId: undefined
            },
            {
                id: 'maloko',
                name: 'Maloko Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/maloko_prayer.jpg', caption: 'Community Prayer & Blessing' },
                    // Milestone 2: Construction
                    { src: '/projects/maloko_construction_1.jpg', caption: 'Well Foundation Construction' },
                    { src: '/projects/maloko_construction_2.jpg', caption: 'Pump Installation & Testing' },
                    { src: '/projects/maloko_construction_3.jpg', caption: 'Project Signage Installation' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/maloko_celebration.jpg', caption: 'Community Celebration & Dedication' }
                ],
                videoId: undefined
            },
            {
                id: 'masoila',
                name: 'Masoila Water Well',
                sponsor: 'Doug & Denise Brown, New Jersey USA',
                photos: [],
                videoId: undefined
            },
            {
                id: 'tombobana-1',
                name: 'Tombobana Water Well - 1',
                sponsor: 'Richard & Nancy Stetson, New Jersey USA',
                photos: [],
                videoId: 'NWImYHhSWco'
            },
            {
                id: 'tombobana-2',
                name: 'Tombobana Water Well - 2',
                photos: [],
                videoId: undefined
            },
            {
                id: 'tombolol',
                name: 'Tombolol Water Well',
                photos: [],
                videoId: undefined
            },
            {
                id: 'tulun',
                name: 'Tulun Water Well',
                photos: [],
                videoId: undefined
            }
        ]
    },
    {
        id: 'makeni',
        name: 'Makeni',
        displayName: 'Makeni Community',
        heroImage: '/projects/clean_water_makeni_grid.jpg',
        projectCount: 2,
        projects: [
            {
                id: 'rocfolla-1',
                name: 'RocFolla Water Well - 1',
                sponsor: 'Lisa Borgese, New Jersey USA',
                photos: [],
                videoId: undefined
            },
            {
                id: 'rocfolla-2',
                name: 'RocFolla Water Well - 2',
                sponsor: 'Trinity United Methodist Church, Mullica Hill NJ USA',
                photos: [],
                videoId: undefined
            }
        ]
    },
    {
        id: 'makomp',
        name: 'Makomp',
        displayName: 'Makomp Community',
        heroImage: '/projects/clean_water_makomp_grid.png',
        projectCount: 1,
        projects: [
            {
                id: 'makomp-main',
                name: 'Makomp Water Well',
                sponsor: 'Trinity United Methodist Church, Mullica Hill NJ USA',
                photos: [],
                videoId: undefined
            }
        ]
    },
    {
        id: 'mamunta',
        name: 'Mamunta',
        displayName: 'Mamunta Community',
        heroImage: '/projects/clean_water_1.png',
        projectCount: 1,
        projects: [
            {
                id: 'mamunta-main',
                name: 'Mamunta Water Well',
                photos: [],
                videoId: undefined
            }
        ]
    },
    {
        id: 'marunia',
        name: 'Marunia',
        displayName: 'Marunia Community',
        heroImage: '/projects/clean_water_marunia_grid.jpg',
        projectCount: 1,
        projects: [
            {
                id: 'marunia-main',
                name: 'Marunia Water Well',
                sponsor: 'PROVCO Ventures, Pennsylvania USA',
                photos: [],
                videoId: undefined
            }
        ]
    },
    {
        id: 'masabong',
        name: 'Masabong',
        displayName: 'Masabong Community',
        heroImage: '/projects/clean_water_2.png',
        projectCount: 1,
        projects: [
            {
                id: 'masabong-main',
                name: 'Masabong Water Well',
                photos: [],
                videoId: 'lS7tLhf-gbw'
            }
        ]
    },
    {
        id: 'waterloo',
        name: 'Waterloo',
        displayName: 'Waterloo Community',
        heroImage: '/projects/clean_water_kaffu_grid.jpg',
        projectCount: 1,
        projects: [
            {
                id: 'waterloo-main',
                name: 'Waterloo Water Well',
                photos: [],
                videoId: undefined
            }
        ]
    }
];
