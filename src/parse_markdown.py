from enum import Enum

from src.htmlnode import ParentNode
from src.parse_text import text_node_to_html_node, text_to_children, TextNode, TextType

class BlockType(Enum):
    PARAGRAPH = "paragraph"
    HEADING = "heading"
    CODE = "code"
    QUOTE = "quote"
    UNORDERED_LIST = "unordered_list"
    ORDERED_LIST = "ordered_list"

def extract_title(md):
    blocks = markdown_to_blocks(md)
    for block in blocks:
        if block.startswith("# "):
            return block[1:].strip()

def extract_content(md):
    blocks = markdown_to_blocks(md)
    body = ParentNode(tag="body", children=[])

    for block in blocks:
        html = block_to_html_node(block)
        body.children.append(html)

    return body.to_html()

def markdown_to_blocks(md):
    blocks = md.split("\n\n")

    blocks = list(map(lambda block: block.strip(), blocks))
    blocks = list(filter(lambda block: len(block) > 0, blocks))

    return blocks


def block_to_block_type(block: str):
    lines = block.split("\n")

    if block.startswith(("# ", "## ", "### ", "#### ", "##### ", "###### ")):
        return BlockType.HEADING

    if len(lines) > 1 and lines[0].startswith("```") and lines[-1].startswith("```"):
        return BlockType.CODE

    if block.startswith(">"):
        for line in lines:
            if not line.startswith(">"):
                return BlockType.PARAGRAPH
        return BlockType.QUOTE

    if block.startswith("- "):
        for line in lines:
            if not line.startswith("- "):
                return BlockType.PARAGRAPH
        return BlockType.UNORDERED_LIST

    if block.startswith("1. "):
        i = 1
        for line in lines:
            if not line.startswith(f"{i}. "):
                return BlockType.PARAGRAPH
            i += 1
        return BlockType.ORDERED_LIST
    
    return BlockType.PARAGRAPH


def block_to_html_node(block):
    block_type = block_to_block_type(block)
    if block_type is BlockType.PARAGRAPH:
        return paragraph_to_html_nodes(block)
    elif block_type is BlockType.HEADING:
        return heading_to_html_node(block)
    elif block_type is BlockType.CODE:
        return code_to_html_node(block)
    elif block_type is BlockType.QUOTE:
        return quote_to_html_node(block)
    elif block_type is BlockType.UNORDERED_LIST:
        return list_to_html_node(block, False)
    elif block_type is BlockType.ORDERED_LIST:
        return list_to_html_node(block, True)


def paragraph_to_html_nodes(block):
    lines = block.split("\n")
    paragraph = " ".join(lines)
    children = text_to_children(paragraph)
    return ParentNode("p", children)


def heading_to_html_node(block):
    level = 0
    for char in block:
        if char == "#":
            level += 1
        else:
            break
    
    if level + 1 > len(block):
        raise ValueError(f"invalid heading level: {level}")

    text = block[level + 1 :]
    children = text_to_children(text)
    return ParentNode(f"h{level}", children)


def code_to_html_node(block):
    new_html_node = text_node_to_html_node(
        TextNode(block[4:-3].strip(), TextType.PLAIN_TEXT)
    )
    child = ParentNode("code", [new_html_node])
    parent_node = ParentNode("pre", [child])
    return parent_node


def quote_to_html_node(block):
    lines = block.split("\n")
    new_lines = []

    for line in lines:
        if not line.startswith(">"):
            raise ValueError("invalid quote block")
        new_lines.append(line.lstrip(">").strip())

    content = " ".join(new_lines)
    children = text_to_children(content)
    return ParentNode("blockquote", children)


def list_to_html_node(block, ordered):
    lines = block.split("\n")
    html_lines = []
    for item in lines:
        text = item[3 if ordered else 2 :]
        children = text_to_children(text)
        html_lines.append(ParentNode("li", children))

    return ParentNode("ol" if ordered else "ul", html_lines)
