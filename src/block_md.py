def extract_title(md):
    blocks = markdown_to_blocks(md)
    for block in blocks:
        if block.startswith("# "):
            return block[1:].strip()

def extract_content(md):
    return md

def markdown_to_blocks(md):
    blocks = md.split("\n\n")

    blocks = list(map(lambda block: block.strip(), blocks))
    blocks = list(filter(lambda block: len(block) > 0, blocks))

    return blocks