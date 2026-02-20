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
                sponsor: 'Irene Gerbrick',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/lungi_airport_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/lungi_airport_construction_1.png', caption: 'Construction' },
                    { src: '/projects/lungi_airport_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/lungi_airport_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/lungi_airport_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: 'myeXYnH-niI'
            },
            {
                id: 'kasonha',
                name: 'Kasonha Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/kasonha_prayer.png', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/kasonha_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/kasonha_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/kasonha_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/kasonha_celebration.png', caption: 'Celebration & Handing over' }
                ],
                videoId: undefined
            },
            {
                id: 'maloko',
                name: 'Maloko Water Well',
                sponsor: 'Nicholas & Harrison Nastasi',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/maloko_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/maloko_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/maloko_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/maloko_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/maloko_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: undefined
            },
            {
                id: 'masoila',
                name: 'Masoila Water Well',
                sponsor: 'Nicholas & Harrison Nastasi',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/masoila_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/masoila_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/masoila_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/masoila_construction_3.jpg', caption: 'Construction' },
                    { src: '/projects/masoila_construction_4.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/masoila_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: undefined
            },
            {
                id: 'tombobana-1',
                name: 'Tombobana Water Well - 1',
                sponsor: 'Richard & Nancy Stetson, New Jersey USA',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tombobana_1_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/tombobana_1_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/tombobana_1_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/tombobana_1_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tombobana_1_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: 'NWImYHhSWco'
            },
            {
                id: 'tombobana-2',
                name: 'Tombobana Water Well - 2',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tombobana_2_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/tombobana_2_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/tombobana_2_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/tombobana_2_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tombobana_2_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: undefined
            },
            {
                id: 'tombolol',
                name: 'Tombolol Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tombolol_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/tombolol_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/tombolol_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/tombolol_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tombolol_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: undefined
            },
            {
                id: 'tulun',
                name: 'Tulun Water Well',
                sponsor: 'Bill & Dawn Fitcraft',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tulun_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/tulun_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/tulun_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/tulun_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tulun_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: 'PY7-B8jWkSE'
            }
        ]
    },
    {
        id: 'makeni',
        name: 'Makeni Rocfolla',
        displayName: 'Makeni Community',
        heroImage: '/projects/makeni_hero_final.jpg',
        projectCount: 2,
        projects: [
            {
                id: 'rocfolla-1',
                name: 'RocFolla Water Well - 1',
                sponsor: 'Lisa Borgese, New Jersey USA',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/rocfolla_2_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/rocfolla_1_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/rocfolla_2_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/rocfolla_2_celebration.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/rocfolla_2_construction_2.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: undefined
            },
            {
                id: 'rocfolla-2',
                name: 'RocFolla Water Well - 2',
                sponsor: 'Trinity United Methodist Church, Mullica Hill NJ USA',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/rocfolla_1_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/rocfolla_2_construction_3.jpg', caption: 'Construction' },
                    { src: '/projects/rocfolla_1_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/rocfolla_1_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/rocfolla_1_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/makomp_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/makomp_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/makomp_construction_3.jpg', caption: 'Construction' },
                    { src: '/projects/makomp_construction_2.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/makomp_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/mamunta_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/mamunta_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/mamunta_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/mamunta_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/mamunta_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: 'RRMQSRSJYOY'
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/marunia_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/marunia_construction_3.jpg', caption: 'Construction' },
                    { src: '/projects/marunia_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/marunia_construction_2.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/marunia_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/masabong_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/masabong_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/masabong_construction_2.jpg', caption: 'Construction' },
                    { src: '/projects/masabong_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/masabong_celebration.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: 'lS7tLhf-gbw'
            }
        ]
    },
    {
        id: 'waterloo',
        name: 'Waterloo',
        displayName: 'Waterloo Community',
        heroImage: '/projects/waterloo_hero_final.png',
        projectCount: 1,
        projects: [
            {
                id: 'waterloo-main',
                name: 'Waterloo Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/waterloo_prayer.jpg', caption: 'Prayers' },
                    // Milestone 2: Construction
                    { src: '/projects/waterloo_construction_1.jpg', caption: 'Construction' },
                    { src: '/projects/waterloo_celebration.png', caption: 'Construction' },
                    { src: '/projects/waterloo_construction_3.jpg', caption: 'Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/waterloo_construction_2.jpg', caption: 'Celebration & Handing over' }
                ],
                videoId: '2EcKP2ZU0rs'
            }
        ]
    }
];
