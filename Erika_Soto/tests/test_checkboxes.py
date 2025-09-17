import pytest
from pages.checkboxes_page import CheckboxesPage  # ← Import correcto
from utils.config import BASE_URL
from utils.helpers import wait_for_2


def test_checkboxes_interaction_flow(page):
    checkboxes_page = CheckboxesPage(page)  # ← Usar el nombre correcto

    checkboxes_page.goto(f"{BASE_URL}/checkboxes")
    wait_for_2()

    assert not checkboxes_page.is_checkbox_selected(0)
    assert checkboxes_page.is_checkbox_selected(1)

    checkboxes_page.click_checkbox(0)
    checkboxes_page.click_checkbox(1)
    wait_for_2()

    assert checkboxes_page.is_checkbox_selected(0)
    assert not checkboxes_page.is_checkbox_selected(1)