import pathlib
from datetime import datetime

def screenshot_path(name: str) -> str:
   
    out_dir = pathlib.Path("reports") / "screenshots"
    out_dir.mkdir(parents=True, exist_ok=True)  # Crea la carpeta si no existe

    # Timestamp en formato YYYYMMDD_HHMMSS
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Construye la ruta final del archivo
    return str(out_dir / f"{timestamp}_{name}.png")
