module.exports = {
    projectName: 'Popcorn Time',
    projectUrl: 'https://popcorntime.sh',
    projectTwitter: 'popcorntimetv',
    projectFacebook: 'PopcornTimedotSh',
    projectGooglePlus: 'popcorntimeshplus',
    projectBlog: 'https://blog.popcorntime.sh/',
    projectForum: 'https://www.reddit.com/r/PopcornTime',

    statusUrl: 'http://status.popcorntime.sh',
    changelogUrl: 'https://github.com/popcorn-official/popcorn-desktop/commits/master',
    issuesUrl: 'https://github.com/popcorn-official/popcorn-desktop/issues',
    sourceUrl: 'https://github.com/popcorn-official/popcorn-desktop/',
    commitUrl: 'https://github.com/popcorn-official/popcorn-desktop/commit',
    updateEndpoint: {
        url: 'https://popcorntime.sh/',
        index: 0,
        proxies: [{
            url: 'https://popcorntime.sh/'
        }]
    },
    updateKey: '-----BEGIN PUBLIC KEY-----\n' +
        'MIIBtjCCASsGByqGSM44BAEwggEeAoGBAPNM5SX+yR8MJNrX9uCQIiy0t3IsyNHs\n' +
        'HWA180wDDd3S+DzQgIzDXBqlYVmcovclX+1wafshVDw3xFTJGuKuva7JS3yKnjds\n' +
        'NXbvM9CrJ2Jngfd0yQPmSh41qmJXHHSwZfPZBxQnspKjbcC5qypM5DqX9oDSJm2l\n' +
        'fM/weiUGnIf7AhUAgokTdF7G0USfpkUUOaBOmzx2RRkCgYAyy5WJDESLoU8vHbQc\n' +
        'rAMnPZrImUwjFD6Pa3CxhkZrulsAOUb/gmc7B0K9I6p+UlJoAvVPXOBMVG/MYeBJ\n' +
        '19/BH5UNeI1sGT5/Kg2k2rHVpuqzcvlS/qctIENgCNMo49l3LrkHbJPXKJ6bf+T2\n' +
        '8lFWRP2kVlrx/cHdqSi6aHoGTAOBhAACgYBTNeXBHbWDOxzSJcD6q4UDGTnHaHHP\n' +
        'JgeCrPkH6GBa9azUsZ+3MA98b46yhWO2QuRwmFQwPiME+Brim3tHlSuXbL1e5qKf\n' +
        'GOm3OxA3zKXG4cjy6TyEKajYlT45Q+tgt1L1HuGAJjWFRSA0PP9ctC6nH+2N3HmW\n' +
        'RTcms0CPio56gg==\n' +
        '-----END PUBLIC KEY-----\n',
    tabs: {
        movie: {
            order: 1,
            name: 'Movies',
            providers: ['MovieApi?&apiURL=https://movies-v2.api-fetch.website/,cloudflare+https://movies-v2.api-fetch.website/&lang=en&quality=720p']
        },
        tvshow: {
            order: 2,
            name: 'Series',
            providers: ['TVApi?&apiURL=https://tv-v2.api-fetch.website/,cloudflare+https://tv-v2.api-fetch.website/']
        },
        anime: {
            order: 3,
            name: 'Anime',
            providers: ['AnimeApi?&apiURL=https://anime.api-fetch.website/,cloudflare+https://anime.api-fetch.website/']
        },
        indie: {
            order: 4,
            name: 'Indie',
            providers: ['vodo']
        }
    },
    opensubtitles: {
        useragent: 'Popcorn Time NodeJS'
    },
    trakttv: {
        client_id: '647c69e4ed1ad13393bf6edd9d8f9fb6fe9faf405b44320a6b71ab960b4540a2',
        client_secret: 'f55b0a53c63af683588b47f6de94226b7572a6f83f40bd44c58a7c83fe1f2cb1'
    },
    tvshowtime: {
        client_id: 'iM2Vxlwr93imH7nwrTEZ',
        client_secret: 'ghmK6ueMJjQLHBwsaao1tw3HUF7JVp_GQTwDwhCn'
    },
    fanart: {
        api_key: '8104b601679c3ec23e7d3e4d93ddb46f'
    },
    tvdb: {
        api_key: '9845B685B799009C'
    },
    tmdb: {
        api_key: '1a83b1ecd56e3ac0e509b553b68c77a9'
    },
    httpApiUsername: 'popcorn',
    httpApiPassword: 'popcorn',
    activateVpn: false
}
