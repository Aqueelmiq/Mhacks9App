import urllib.request
import re

def totalSearch(meme):
    extension = '-'.join(word.lower() for word in meme.split())
    url = 'http://knowyourmeme.com/memes/{}'.format(extension)
    regexp = r"<a href=\\'\/memes\/{}\\' rel=\\'nofollow\\'>(\d*,?\d*,?\d+)<\/a>".format(extension)

    with urllib.request.urlopen(url) as w:
        html = w.read()
        find = re.search(regexp, str(html))
        if find:
            numparts = find.group(1).split(',')
            return int(''.join(numparts))
        else:  #error handling can be improved
            print("Not found")
            return None

if __name__ == '__main__':  #for debugging purposes
    print(totalSearch("me gusta"))
