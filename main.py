import os
import shutil

from src.parse_markdown import extract_title, extract_content

# Where the server will serve from.
dir_path_public = "public"
dir_path_content = "content"

template_path = "./template.html"

def main():
    dir_base = "./"
    print(f"Creating {dir_path_public} directory")

    if os.path.exists(dir_base + dir_path_public):
        shutil.rmtree(dir_base + dir_path_public)
    

    # copy_file('template.html', dir_base, dir_base + dir_path_public)
    # generate_html(f"./{dir_path_content}/index.md", template_path, f"./{dir_path_public}/index.html")

    generate_content_recursive(dir_path_content, template_path, dir_path_public, dir_base)


def generate_content_recursive(content_path, template_path, dest_path, basepath):
    if not os.path.exists(content_path):
        return
    
    for path in os.listdir(content_path):
        from_path = os.path.join(content_path, path)
        target_path = os.path.join(dest_path, path)

        if os.path.isfile(from_path):
            file_name, file_type = os.path.splitext(from_path)
            print(f"{from_path} -> {target_path}")
            print(f"{from_path} is a {file_type}")

            if file_type == ".md":
                print("we need to make html of this")
                file_name += ".html"
                target_path = target_path.removesuffix(".md") + ".html"
                generate_html(from_path, template_path, target_path)
        else:
            print("we need to copy this.")


# This is for copying static files over, like CSS or images.
def copy_file(filename, source_path, target_path):
    if not os.path.exists(target_path):
        os.mkdir(target_path)
    
    from_path = os.path.join(source_path, filename)
    dest_path = os.path.join(target_path, filename)
    print(f"* {from_path} -> {dest_path}")

    if os.path.isfile(from_path):
        shutil.copy(from_path, dest_path)


def generate_html(from_path, template, dest_path):
    print(f"Making html from {from_path} to {dest_path}")

    with open(from_path) as md_file:
        md = md_file.read()

        with open(template_path) as template_file:
            template = template_file.read()
            
            title = extract_title(md)
            template = template.replace("{{ Title }}", title)

            content = extract_content(md)
            template = template.replace("{{ Content }}", content)

            want_path = os.path.dirname(dest_path)
            
            if want_path != "":
                os.makedirs(want_path, exist_ok=True)
            
            to_file = open(dest_path, "w")
            to_file.write(template)



if __name__ == "__main__":
    main()