{
    'name': 'DHS Customer Invoice Custom',
    'version': '1.0',
    'summary': 'Add Nphies, Contract Number, CCHI fields for customers ',
    'depends': ['dhs_res_partner_custom','l10n_din5008', 'l10n_sa_edi'],
    'data': [
        'report/customer_invoice_arabic_body.xml',
        'report/template_header.xml',
    ],
    'assets': { 'web.report_assets_common': [
        # Images
        'dhs_invoice_custom/static/src/img/header_graphic.png',
        'dhs_invoice_custom/static/src/img/heartbeat_footer.png',
        # Your SCSS
        'dhs_invoice_custom/static/src/css/report_invoice.scss',
    ],
    },

    'license': 'LGPL-3',
    'installable': True,
    'application': False,
}
