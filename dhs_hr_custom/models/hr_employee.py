# models/hr_employee.py
from odoo import api, fields, models

class HrEmployee(models.Model):
    _inherit = "hr.employee"

    # New fields
    employee_code = fields.Char(string="Employee Code")
    kinship = fields.Char(string="Kinship")
    religion = fields.Selection(
        selection=[
            ("islam", "Islam"),
            ("christianity", "Christianity"),
            ("other", "Other"),
        ],
        string="Religion",
    )

    # Overwrite existing labels and selection
    certificate = fields.Selection(
        selection=[
            # TODO: Paste the exact key/value pairs you use (keys must be stable, values are the Arabic labels)
            # Example placeholders:
            ("secondary", "Secondary"),
            ("bachelor", "Bachelor"),
            ("master", "Master"),
            ("phd", "Phd"),
            ("other", "Other"),
        ],
    )

