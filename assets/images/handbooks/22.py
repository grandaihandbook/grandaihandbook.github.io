import os
import random

def randomly_rename_files(folder_path):
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]

    # Shuffle the file list
    random.shuffle(files)

    # Temporary renaming to avoid name collisions
    temp_names = {}
    for idx, file in enumerate(files):
        ext = os.path.splitext(file)[1]
        temp_name = f"__tempfile_{idx}{ext}"
        os.rename(os.path.join(folder_path, file), os.path.join(folder_path, temp_name))
        temp_names[temp_name] = ext

    # Final renaming
    for idx, temp_file in enumerate(sorted(temp_names.keys())):
        new_name = f"{idx + 1}{temp_names[temp_file]}"
        os.rename(os.path.join(folder_path, temp_file), os.path.join(folder_path, new_name))

    print("Renaming completed.")
    
randomly_rename_files(r"C:\Users\Hp\Desktop\mldev\2025\grandaihandbook\grandaihandbook.github.io\assets\images\handbooks")
