from odoo import models, fields, api

class ResPartner(models.Model):
    _inherit = 'res.partner'

    nphies = fields.Char(string="Nphies Number")
    contract_no = fields.Char(string="Contract Number")
    cchi = fields.Char(string="CCHI")
    provider_code = fields.Char(string="Provider Code")
    region = fields.Selection([
        ('central', 'Central region'),
        ('northern', 'Northern region'),
        ('western', 'Western region'),
        ('eastern', 'Eastern region'),
        ('southern', 'Southern Region'),
    ], string="Region")



