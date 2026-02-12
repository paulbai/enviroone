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
                sponsor: 'Nicholas & Harrison Nastasi',
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
                sponsor: 'Nicholas & Harrison Nastasi',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/masoila_prayer.jpg', caption: 'Community Prayer Gathering' },
                    // Milestone 2: Construction
                    { src: '/projects/masoila_construction_1.jpg', caption: 'Well Construction Work' },
                    { src: '/projects/masoila_construction_2.jpg', caption: 'Depth Measurement & Testing' },
                    { src: '/projects/masoila_construction_3.jpg', caption: 'Pump Installation' },
                    { src: '/projects/masoila_construction_4.jpg', caption: 'Project Signage & Completion' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/masoila_celebration.jpg', caption: 'Community Celebration & First Water' }
                ],
                videoId: undefined
            },
            {
                id: 'tombobana-1',
                name: 'Tombobana Water Well - 1',
                sponsor: 'Richard & Nancy Stetson, New Jersey USA',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tombobana_1_prayer.jpg', caption: 'Community Prayer & Blessing' },
                    // Milestone 2: Construction
                    { src: '/projects/tombobana_1_construction_1.jpg', caption: 'Well Excavation Work' },
                    { src: '/projects/tombobana_1_construction_2.jpg', caption: 'Project Signage Installation' },
                    { src: '/projects/tombobana_1_construction_3.jpg', caption: 'Pump Testing & Installation' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tombobana_1_celebration.jpg', caption: 'Official Dedication Ceremony' }
                ],
                videoId: 'NWImYHhSWco'
            },
            {
                id: 'tombobana-2',
                name: 'Tombobana Water Well - 2',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tombobana_2_prayer.jpg', caption: 'Community Prayer Session' },
                    // Milestone 2: Construction
                    { src: '/projects/tombobana_2_construction_1.jpg', caption: 'Foundation & Signage Work' },
                    { src: '/projects/tombobana_2_construction_2.jpg', caption: 'Pump Installation Process' },
                    { src: '/projects/tombobana_2_construction_3.jpg', caption: 'Well Testing & Inspection' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tombobana_2_celebration.jpg', caption: 'Community Handover Ceremony' }
                ],
                videoId: undefined
            },
            {
                id: 'tombolol',
                name: 'Tombolol Water Well',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tombolol_prayer.jpg', caption: 'Community Prayer & Blessing' },
                    // Milestone 2: Construction
                    { src: '/projects/tombolol_construction_1.jpg', caption: 'Well Structure Construction' },
                    { src: '/projects/tombolol_construction_2.jpg', caption: 'Well Depth & Interior Work' },
                    { src: '/projects/tombolol_construction_3.jpg', caption: 'Project Signage & Completion' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tombolol_celebration.jpg', caption: 'Community Celebration & First Water' }
                ],
                videoId: undefined
            },
            {
                id: 'tulun',
                name: 'Tulun Water Well',
                sponsor: 'Bill & Dawn Fitcraft',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/tulun_prayer.jpg', caption: 'Community Prayer & Blessing' },
                    // Milestone 2: Construction
                    { src: '/projects/tulun_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/tulun_construction_2.jpg', caption: 'Well Structure & Signage' },
                    { src: '/projects/tulun_construction_3.jpg', caption: 'Well Depth & Interior' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/tulun_celebration.jpg', caption: 'Community Celebration & First Water' }
                ],
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/rocfolla_1_prayer.jpg', caption: 'Community Prayer & Blessing' },
                    // Milestone 2: Construction
                    { src: '/projects/rocfolla_1_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/rocfolla_1_construction_2.jpg', caption: 'Well Structure & Signage' },
                    { src: '/projects/rocfolla_1_construction_3.jpg', caption: 'Well Depth & Integration' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/rocfolla_1_celebration.jpg', caption: 'Community Celebration & Hand-over' }
                ],
                videoId: undefined
            },
            {
                id: 'rocfolla-2',
                name: 'RocFolla Water Well - 2',
                sponsor: 'Trinity United Methodist Church, Mullica Hill NJ USA',
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/rocfolla_2_prayer.jpg', caption: 'Community Prayer & Dedication' },
                    // Milestone 2: Construction
                    { src: '/projects/rocfolla_2_construction_3.jpg', caption: 'Well Construction in Progress' }, // Moved from pos 4 to 2 (Yellow bucket)
                    { src: '/projects/rocfolla_2_construction_1.jpg', caption: 'Well Depth & Integration' },    // Moved from pos 2 to 3 (Blue pipe)
                    { src: '/projects/rocfolla_2_celebration.jpg', caption: 'Well Structure & Signage' },        // Moved from pos 5 to 4 (Signage)
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/rocfolla_2_construction_2.jpg', caption: 'Community Celebration & Hand-over' } // Moved from pos 3 to 5 (Crowd)
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
                    { src: '/projects/makomp_prayer.jpg', caption: 'Community Prayer & Dedication' },
                    // Milestone 2: Construction
                    { src: '/projects/makomp_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/makomp_construction_3.jpg', caption: 'Well Depth & Completion' },        // Moved to pos 3
                    { src: '/projects/makomp_construction_2.jpg', caption: 'Well Structure Construction' },    // Moved to pos 4
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/makomp_celebration.jpg', caption: 'Community Celebration & Hand-over' }
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
                    { src: '/projects/mamunta_prayer.jpg', caption: 'Community Prayer & Dedication' },
                    // Milestone 2: Construction
                    { src: '/projects/mamunta_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/mamunta_construction_2.jpg', caption: 'Well Structure Construction' },
                    { src: '/projects/mamunta_construction_3.jpg', caption: 'Well Signage & Completion' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/mamunta_celebration.jpg', caption: 'Community Celebration & Hand-over' }
                ],
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/marunia_prayer.jpg', caption: 'Community Prayer & Dedication' },
                    // Milestone 2: Construction
                    { src: '/projects/marunia_construction_3.jpg', caption: 'Well Depth & Completion' },
                    { src: '/projects/marunia_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/marunia_construction_2.jpg', caption: 'Well Structure Construction' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/marunia_celebration.jpg', caption: 'Community Celebration & Hand-over' }
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
                    { src: '/projects/masabong_prayer.jpg', caption: 'Community Prayer & Dedication' },
                    // Milestone 2: Construction
                    { src: '/projects/masabong_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/masabong_construction_2.jpg', caption: 'Well Structure Construction' },
                    { src: '/projects/masabong_construction_3.jpg', caption: 'Well Depth & Completion' },
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/masabong_celebration.jpg', caption: 'Community Celebration & Hand-over' }
                ],
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
                photos: [
                    // Milestone 1: Prayer
                    { src: '/projects/waterloo_prayer.jpg', caption: 'Community Prayer & Dedication' },
                    // Milestone 2: Construction
                    { src: '/projects/waterloo_construction_1.jpg', caption: 'Well Construction in Progress' },
                    { src: '/projects/waterloo_celebration.png', caption: 'Well Structure Construction' },      // Moved from pos 5, new caption
                    { src: '/projects/waterloo_construction_3.jpg', caption: 'Well Completion' },               // New caption
                    // Milestone 3: Celebration & Handing Over
                    { src: '/projects/waterloo_construction_2.jpg', caption: 'Community Celebration & Hand-over' } // Moved from pos 3, new caption
                ],
                videoId: undefined
            }
        ]
    }
];
