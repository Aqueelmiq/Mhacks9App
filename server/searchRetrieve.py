from flask import Flask, request, jsonify
import urllib.request
import re

app = Flask(__name__)

def getExtension(meme):
    return '-'.join(word.lower() for word in meme.split())

### INFO RETRIEVAL ###
info = ['cap','img_url']
def cap(meme):  #total amount of searches
    #meme is in extension form (hyphenated)
    url = 'http://knowyourmeme.com/memes/{}'.format(meme)
    regexp = r"<a href=\\'\/memes\/{}\\' rel=\\'nofollow\\'>(\d*,?\d*,?\d+)<\/a>".format(meme)

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
    url = 'http://knowyourmeme.com/memes/{}'.format(meme)
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

@app.route("/meme")
def meme2json():
    memename = request.args['name']
    extension = getExtension(memename)
    json_dict = { f: eval('{}(\'{}\')'.format(f,extension)) for f in info }
    json_dict['name'] = memename
    return jsonify(json_dict)

if __name__ == '__main__':
    app.run()
    '''  #for debugging purposes
    memes = ['harambe the gorilla', 'pepe the frog', 'forever alone', 'me gusta']
    for meme in memes:
        print('-->',meme)
        print(meme2json(meme))
    '''
