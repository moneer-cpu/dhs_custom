{
    'name': 'DHS Res Partner Custom',
    'version': '1.0',
    'summary': 'Add Nphies, Contract Number, CCHI fields for customers ',
    'depends': ['base','l10n_din5008', 'l10n_sa_edi'],
    'data': [
        'views/res_partner_views.xml',
        'views/customer_invoice_views.xml',
        'report/customer_invoice_arabic_body.xml',
        'report/template_header.xml',
        'views/partner_search_view.xml',
    ],
    'assets': {
        'web.report_assets_common': [
            'dhs_res_partner_custom/static/src/img/header_graphic.png',
            'dhs_res_partner_custom/static/src/img/heartbeat_footer.png',
            'dhs_res_partner_custom/static/src/css/report_invoice.css',
        ],
    },

    'license': 'LGPL-3',
    'installable': True,
    'application': False,
}
