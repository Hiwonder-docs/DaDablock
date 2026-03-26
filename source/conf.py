# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import re

def replace_gfm_callouts(app, docname, source):
    text = source[0]

    # 匹配 > [!NOTE] 风格的块，多行捕获
    def repl(match):
        kind = match.group(1).lower()
        body = re.sub(r'^>\s?', '', match.group(2), flags=re.MULTILINE)
        return f"```{{{kind}}}\n{body}\n```"

    text = re.sub(
        r'> \[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\n((?:>.*\n?)+)',
        repl,
        text,
        flags=re.IGNORECASE
    )

    source[0] = text

def setup(app):
    app.connect("source-read", replace_gfm_callouts)

project = 'Test'
copyright = '2025, Hiwonder'
author = 'Hiwonder'
release = 'v1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['sphinx_markdown_tables','myst_parser','sphinx_copybutton']

templates_path = ['_templates']
exclude_patterns = []

# The name of the Pygments (syntax highlighting) style to use.
pygments_style = "sphinx"  # 或者其他主题，如 'friendly', 'monokai'
html_codeblock_linenos_style = 'table'  # 推荐的样式

myst_enable_extensions = [
    "attrs_block",
    "colon_fence",
    "substitution",
    "amsmath",
    "dollarmath",
]


html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
html_css_files = ['style.css']
html_js_files = ['custom.js']
html_theme_options = {
    'style_nav_header_background': '#f98800',
}