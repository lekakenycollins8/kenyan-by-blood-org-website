const { userAgent } = require("next/server");

/** @type import{('next-sitemap').Iconfig}. */
module.exports = {
    siteUrl: 'https://www.iamkenyanbyblood.org',
    generateRobotsTxt: true,
    exclude: ['/admin'],
    excludeIndex: true,
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000,
    trailingSlash: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: 'Googlebot', allow: '/', disallow: '/admin' },
            { userAgent: 'Other Bot', allow: '/', disallow: '/admin' },
        ],
    },
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
        };
    },
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://www.iamkenyanbyblood.org/sitemap.xml',
        ],
    },
    nextConfigPath: __dirname + '/next.config.js',
    ignoredPaths: ['admin'],
    pagesConfig: {
        '/': {
            priority: '0.7',
            changefreq: 'daily',
        },
        '/about': {
            priority: '0.5',
            changefreq: 'daily',
        },
        '/contact': {
            priority: '0.3',
            changefreq: 'daily',
        },
    },
};