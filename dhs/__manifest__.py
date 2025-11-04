# -*- coding: utf-8 -*-
{
    'name': 'dhs',
    'version': '1.0',
    'summary': 'Brief description of the module',
    'description': '''
        Detailed description of the module
    ''',
    'category': 'Theme',
    'author': 'Abdelaziz Azzam',
    'company': 'Time Solution',
    'maintainer': '',
    'website': 'https://',
    'depends': ['website'],
    'data': [
        # 'views/header.xml',
        'views/home.xml',
        # 'views/about.xml',
        'views/about_page.xml',
        'views/appointment_page.xml',
        'views/contact_custom_page.xml',
        'views/blog_page.xml',
        'views/blog-details.xml',
        'views/services_page.xml',
        'views/service_details.xml',
        # 'views/pages.xml',
        'views/footer_template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'dhs/static/src/lib/swiper.js',
            # 'dhs/static/src/js/swiper_loader.js',
            'dhs/static/src/css/style.css',
            'dhs/static/src/css/bootstrap.min.css',
            'dhs/static/src/css/fontawesome.min.css',
            'dhs/static/src/css/swiper-bundle.min.css',
            'dhs/static/src/js/main.js',
            'dhs/static/src/js/jquery.js',
        ],
    },

    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
