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
        # 'views/header_template.xml',
        'views/home.xml',
        'views/pages.xml',
        # 'views/footer_template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'dhs/static/src/css/style.css',
            'dhs/static/src/css/bootstrap.min.css',
            'dhs/static/src/css/fontawesome.min.css',
            'dhs/static/src/css/swiper-bundle.min.css',
            'dhs/static/src/js/main.js',
        ],
    },

    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
