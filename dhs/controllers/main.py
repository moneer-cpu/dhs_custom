from odoo import http
from odoo.http import request

class CustomHomeController(http.Controller):

    @http.route('/', type='http', auth='public', website=True)
    def custom_home(self, **kw):
        return request.render('dhs.home_page_template')
