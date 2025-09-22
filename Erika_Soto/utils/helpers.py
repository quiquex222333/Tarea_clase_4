import pathlib
from datetime import datetime
from time import sleep

def screenshot_path(name: str) -> str:
    out_dir = pathlib.Path("reports")/"screenshots"
    out_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return f"{out_dir}/{timestamp}.{name}.png"

def wait_for_2():
    sleep(2)

def wait_for_5():
    sleep(5)

def wait_for_10():
    sleep(10)