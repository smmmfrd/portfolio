import os
import shutil

# Where the server will serve from.
dir_path_public = "public"

def main():
    dir_base = "./"
    print(f"Creating {dir_path_public} directory")

    if os.path.exists(dir_base + dir_path_public):
        shutil.rmtree(dir_base + dir_path_public)
    
    copy_file('index.html', dir_base, dir_base + dir_path_public)


def copy_file(filename, source_path, target_path):
    if not os.path.exists(target_path):
        os.mkdir(target_path)
    
    from_path = os.path.join(source_path, filename)
    dest_path = os.path.join(target_path, filename)
    print(f"* {from_path} -> {dest_path}")

    if os.path.isfile(from_path):
        shutil.copy(from_path, dest_path)

if __name__ == "__main__":
    main()