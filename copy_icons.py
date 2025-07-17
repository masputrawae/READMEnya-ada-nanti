import os
import shutil

# Path ke file txt yang berisi daftar nama ikon
icon_list_file = './icon_list.txt'

# Path ke folder sumber ikon bootstrap
bootstrap_icons_dir = './node_modules/bootstrap-icons/icons'

# Path ke folder tujuan
destination_dir = './assets/icons'

# Buat folder tujuan jika belum ada
os.makedirs(destination_dir, exist_ok=True)

# Baca daftar ikon dari file txt
with open(icon_list_file, 'r') as f:
    icon_names = [line.strip() for line in f if line.strip()]

# Salin file ikon satu per satu
for icon_name in icon_names:
    src_file = os.path.join(bootstrap_icons_dir, f"{icon_name}.svg")
    dest_file = os.path.join(destination_dir, f"{icon_name}.svg")

    if os.path.exists(src_file):
        shutil.copy(src_file, dest_file)
        print(f"Copied: {icon_name}.svg")
    else:
        print(f"Icon not found: {icon_name}.svg")

print("Selesai.")