class HTMLNode:
    def __init__(self, tag, text, children, props):
        self.tag = tag
        self.text = text
        self.children = children
        self.props = props

    def to_html(self):
        print("Not defined")
    
    def props_to_html(self):
        if "href" in self.props:
            if "target" in self.props:
                return f' href="{self.props["href"]}" target="{self.props["target"]}" '
            else:
                return f' href="{self.props["href"]}" '

        elif "src" in self.props:
            return f' src="{self.props["src"]}" alt="{self.props["alt"]}" '
        return f"Not implemented"


    def __repr__(self):
        return f"HTMLNode (tag={self.tag}, value={self.value}, children={self.children})"

# No children, inline
class LeafNode(HTMLNode):
    def __init__(self, tag, text, props=None):
        super().__init__(tag, text, None, props)
    
    def to_html(self):
        if self.tag is None:
            return f"{self.text}"
        
        self.props = "" if self.props is None else self.props_to_html()
        
        return f"<{self.tag}{self.props}>{self.text}</{self.tag}>"

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