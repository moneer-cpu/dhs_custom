{
    'name': 'DHS Res Partner Custom',
    'version': '1.0',
    'summary': 'Add Nphies, Contract Number, CCHI fields for customers only',
    'depends': ['sale'],
    'data': [
        'views/res_partner_views.xml',
        'views/customer_invoice_views.xml',
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': False,
}
