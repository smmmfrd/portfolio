class HTMLNode:
    def __init__(self, tag, text, children):
        self.tag = tag
        self.text = text
        self.children = children

    def to_html(self):
        print("Not defined")

    def __repr__(self):
        return f"HTMLNode (tag={self.tag}, value={self.value}, children={self.children})"

# No children, inline
class LeafNode:
    def __init__(self, tag, text):
        super().__init__(tag, text, None)
    
    def to_html(self):

        return f"<{self.tag}>{self.text}</{self.tag}>"

# Have children
class ParentNode:
    def __init__(self, tag, text, children):
        super().__init__(tag, text, children)
    
    def to_html(self):
        res = f"<{self.tag}>"

        for child in self.children:
            res += child.to_html()
        
        res += f"</{self.tag}>"

        return res