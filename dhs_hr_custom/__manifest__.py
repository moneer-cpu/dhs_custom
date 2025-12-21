# __manifest__.py
{
    "name": "HR Employee Customizations (EG)",
    "version": "18.0.0.0.0",
    "category": "Human Resources",
    "summary": "Employee code, kinship, religion, and label updates",
    "author": "Your Company",
    "license": "LGPL-3",
    "depends": ["hr"],
    "data": [
        "views/hr_employee_view.xml",
    ],
    "application": False,
    "installable": True,
}
