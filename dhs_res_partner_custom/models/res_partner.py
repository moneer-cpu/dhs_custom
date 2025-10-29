from odoo import models, fields, api

class ResPartner(models.Model):
    _inherit = 'res.partner'

    nphies = fields.Char(string="Nphies Number")
    contract_no = fields.Char(string="Contract Number")
    cchi = fields.Char(string="CCHI")


