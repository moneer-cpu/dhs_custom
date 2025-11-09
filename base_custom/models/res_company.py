from odoo import models, fields

class ResCompany(models.Model):
    _inherit = "res.company"

    stamp = fields.Binary(string="Stamp", attachment=True)
