class HTMLNode:
    def __init__(self, tag, text, children, props):
        self.tag = tag
        self.text = text
        self.children = children
        self.props = props

    def to_html(self):
        print("Not defined")

    def __repr__(self):
        return f"HTMLNode (tag={self.tag}, value={self.value}, children={self.children})"

# No children, inline
class LeafNode(HTMLNode):
    def __init__(self, tag, text, props=None):
        super().__init__(tag, text, None, props)
    
    def to_html(self):
        if self.tag is None:
            return f"{self.text}"
        
        return f"<{self.tag}>{self.text}</{self.tag}>"

# Has children
class ParentNode(HTMLNode):
    def __init__(self, tag, children, props=None):
        super().__init__(tag, None, children, props)
    
    def to_html(self):
        res = f"<{self.tag}>"

        for child in self.children:
            res += child.to_html()
        
        res += f"</{self.tag}>"

        return res