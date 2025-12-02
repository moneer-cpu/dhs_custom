{
    'name': 'DHS Res Partner Custom',
    'version': '1.0',
    'summary': 'Add Nphies, Contract Number, CCHI fields for customers ',
    'depends': ['l10n_sa_edi'],
    'data': [
        'views/res_partner_views.xml',
        'views/customer_invoice_views.xml',
        'report/report_invoice_inherit.xml',
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': False,
}
