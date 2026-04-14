import os
import shutil

from src.parse_markdown import extract_title, extract_content

# Where the server will serve from.
dir_path_public = "public"
dir_path_content = "content"

template_path = "./template.html"

def main():
    dir_base = "/"
    print(f"Creating {dir_path_public} directory")

    if os.path.exists(dir_base + dir_path_public):
        shutil.rmtree(dir_base + dir_path_public)

    generate_content_recursive(dir_path_content, template_path, dir_path_public, dir_base)


def generate_content_recursive(content_path, template_path, dest_path, base_path):
    if not os.path.exists(content_path):
        return
    
    for path in os.listdir(content_path):
        from_path = os.path.join(content_path, path)
        target_path = os.path.join(dest_path, path)

        if os.path.isfile(from_path):
            file_name, file_type = os.path.splitext(from_path)

            if file_type == ".md":
                file_name += ".html"
                target_path = target_path.removesuffix(".md") + ".html"
                generate_html(from_path, template_path, target_path, base_path)
            else:
                copy_file(from_path, target_path, dest_path)
        else:
            generate_content_recursive(from_path, template_path, target_path, base_path)


# This is for copying static files over, like CSS or images.
def copy_file(from_path, target_path, dest_path):
    print(dest_path)
    if not os.path.exists(dest_path):
        os.mkdir(dest_path)
    
    print(f"* {from_path} -> {target_path}")

    if os.path.isfile(from_path):
        shutil.copy(from_path, target_path)


def generate_html(from_path, template, dest_path, base_path):
    print(f"{from_path} -> {dest_path}")

    with open(from_path) as md_file:
        md = md_file.read()

        with open(template_path) as template_file:
            template = template_file.read()
            
            title = extract_title(md)
            template = template.replace("{{ Title }}", title)

            content = extract_content(md)
            template = template.replace("{{ Content }}", content)

            template = template.replace('href="/', f'href="{base_path}')
            template = template.replace('src="/', f'src="{base_path}')

            want_path = os.path.dirname(dest_path)
            
            if want_path != "":
                os.makedirs(want_path, exist_ok=True)
            
            to_file = open(dest_path, "w")
            to_file.write(template)



if __name__ == "__main__":
    main()