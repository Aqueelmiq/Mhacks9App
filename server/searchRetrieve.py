import urllib.request
import re

def getExtension(meme):
    return '-'.join(word.lower() for word in meme.split())

def cap(meme):  #total amount of searches
    extension = getExtension(meme)
    url = 'http://knowyourmeme.com/memes/{}'.format(extension)
    regexp = r"<a href=\\'\/memes\/{}\\' rel=\\'nofollow\\'>(\d*,?\d*,?\d+)<\/a>".format(extension)

    try:
        with urllib.request.urlopen(url) as w:
            html = w.read()
            find = re.search(regexp, str(html))
            if find:
                numparts = find.group(1).split(',')
                return int(''.join(numparts))
            else:  #error handling can be improved
                return None
    except urllib.error.HTTPError:
        print("Meme not in the repository")
        return None
                
def img_url(meme):
    extension = getExtension(meme)
    url = 'http://knowyourmeme.com/memes/{}'.format(extension)
    regexp = r'<a href=\"(http:\/\/i\d\.kym-cdn\.com.+)\" class=\"photo left\">'

    try:
        with urllib.request.urlopen(url) as w:
            html = w.read()
            find = re.search(regexp, str(html))
            if find:
                return find.group(1)
            else:  #error handling can be improved
                return None
    except urllib.error.HTTPError:
        print("Meme not in the repository")
        return None

if __name__ == '__main__':  #for debugging purposes
    memes = ['harambe the gorilla', 'pepe the frog', 'forever alone', 'me gusta']
    for meme in memes:
        print('-->',meme)
        print(cap(meme))
        print(img_url(meme))
