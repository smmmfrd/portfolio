import re
from enum import Enum

from src.htmlnode import LeafNode
# from src.parse_inline import text_to_textnodes

class TextType(Enum):
    PLAIN_TEXT = "plain"
    BOLD_TEXT = "bold"
    ITALIC_TEXT = "italic"
    CODE_TEXT = "code"
    LINK_TEXT = "link"
    IMAGE_TEXT = "image"


class TextNode:
    def __init__(self, text, text_type: TextType, url=""):
        self.text = text
        self.text_type = text_type
        self.url = url

    def __eq__(self, value):
        return (
            self.text == value.text
            and self.text_type == value.text_type
            and self.url == value.url
        )

    def __repr__(self):
        return f"TextNode({self.text}, {self.text_type.value}, {self.url})"


def text_to_children(text):
    text_nodes = text_to_textnodes(text)
    html_nodes = []
    for text_node in text_nodes:
        html_nodes.append(text_node_to_html_node(text_node))
    return html_nodes

def text_node_to_html_node(text_node: TextNode):
    tag = None
    value = text_node.text
    props = None

    if text_node.text_type is TextType.PLAIN_TEXT:
        tag = None
    elif text_node.text_type is TextType.BOLD_TEXT:
        tag = "b"
    elif text_node.text_type is TextType.ITALIC_TEXT:
        tag = "i"
    elif text_node.text_type is TextType.CODE_TEXT:
        tag = "code"
    elif text_node.text_type is TextType.LINK_TEXT:
        tag = "a"
        props = {"href": text_node.url, "target": "_blank"}
    elif text_node.text_type is TextType.IMAGE_TEXT:
        tag = "img"
        value = text_node.text
        props = {"src": text_node.url, "alt": text_node.text}

    return LeafNode(tag, value, props)


delimiters = [
    (TextType.BOLD_TEXT, "**"),
    (TextType.ITALIC_TEXT, "_"),
    (TextType.CODE_TEXT, "`"),
    (TextType.IMAGE_TEXT, ""),
    (TextType.LINK_TEXT, ""),
]


def text_to_textnodes(text):
    new_nodes = [TextNode(text, TextType.PLAIN_TEXT)]

    for d in delimiters:
        if d[0] is TextType.LINK_TEXT:
            new_nodes = split_nodes_link(new_nodes)
        elif d[0] is TextType.IMAGE_TEXT:
            new_nodes = split_nodes_image(new_nodes)
        else:
            new_nodes = split_nodes_delimiter(new_nodes, d[1], d[0])

    return new_nodes


def split_node(old_node: TextNode, delimiter, text_type):
    if old_node.text_type != TextType.PLAIN_TEXT:
        return [old_node]

    divided = old_node.text.split(delimiter)

    if len(divided) % 2 != 1:
        raise Exception("Unenclosed markdown detected")

    new_nodes = [TextNode(divided[0], TextType.PLAIN_TEXT)]
    for i in range(1, len(divided)):
        type = text_type if i % 2 == 1 else TextType.PLAIN_TEXT

        new_nodes.append(TextNode(divided[i], type))

    return new_nodes


def split_nodes_delimiter(old_nodes, delimiter, text_type):
    new_nodes = []
    for node in old_nodes:
        new_nodes.extend(split_node(node, delimiter, text_type))

    return new_nodes


def split_nodes_link(old_nodes):
    new_nodes = []
    for node in old_nodes:
        if node.text_type is not TextType.PLAIN_TEXT:
            new_nodes.append(node)
            continue

        text = node.text

        matches = extract_markdown_links(text)

        for match in matches:
            (link_text, link) = match
            sections = text.split(f"[{link_text}]({link})", 1)
            new_nodes.append(TextNode(sections[0], TextType.PLAIN_TEXT))
            new_nodes.append(TextNode(link_text, TextType.LINK_TEXT, link))
            text = sections[1]

        if len(text) > 0:
            new_nodes.append(TextNode(text=text, text_type=TextType.PLAIN_TEXT))

    return new_nodes


def split_nodes_image(old_nodes):
    new_nodes = []
    for node in old_nodes:
        if node.text_type is not TextType.PLAIN_TEXT:
            new_nodes.append(node)
            continue

        text = node.text

        matches = extract_markdown_images(text)

        for match in matches:
            (image_alt, image_link) = match
            sections = text.split(f"![{image_alt}]({image_link})", 1)
            new_nodes.append(TextNode(sections[0], TextType.PLAIN_TEXT))
            new_nodes.append(TextNode(image_alt, TextType.IMAGE_TEXT, image_link))
            text = sections[1]

        if len(text) > 0:
            new_nodes.append(TextNode(text=text, text_type=TextType.PLAIN_TEXT))

    return new_nodes


def extract_markdown_images(text):
    matches = re.findall(r"!\[(.*?)\]\((.*?)\)", text)
    return matches


def extract_markdown_links(text):
    matches = re.findall(r"\[(.*?)\]\((.*?)\)", text)
    return matches


# Boot.dev ones (instead of capturing all characters (.*?), it caputes all but brackets ([^\[\]]*))
# images
# r"!\[([^\[\]]*)\]\(([^\(\)]*)\)"

# regular links
# r"(?<!!)\[([^\[\]]*)\]\(([^\(\)]*)\)"