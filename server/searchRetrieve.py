import urllib.request
import re

with urllib.request.urlopen('http://knowyourmeme.com/memes/forever-alone') as w:
    html = w.read()
    regexp = r"<a href=\\'\/memes\/forever-alone\\' rel=\\'nofollow\\'>(\d*,?\d*,?\d+)<\/a>"
    print("regexp:",regexp)
    #with open("text.txt", 'w') as f:
     #   f.write(str(html))
    print(html[:1000])
    find = re.search(regexp, str(html))
    if find:
        print()
        #print(find.group(0))
        print(find.group(1))
        print(find)
    else:
        print("Not found")
