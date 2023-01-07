import PIL.Image
data = {'\u25A1':[[], [[0, -1], [1, -1], [2, -1]], [[0, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], []], 'a': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [2, 4]]], 'b': [[[0, 0], [1, 0], [2, 0]], [[1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[1, 3], [2, 3]], [[1, 4], [2, 4]]], 'c': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [1, 3]], [[0, 4], [1, 4], [2, 4]]], 'd': [[[0, 0], [1, 0]], [[0, 1], [2, 1]], [[0, 2], [1, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4]]], 'e': [[[0, 0]], [[1, 1], [2, 1]], [[0, 2], [2, 2]], [[1, 3], [2, 3]], [[0, 4]]], 'f': [[[2, 0]], [[0, 1], [1, 1]], [[1, 2]], [[0, 3], [1, 3]], [[2, 4]]], 'g': [[[1, 0], [2, 0]], [[0, 1]], [[0, 2]], [[0, 3]], [[1, 4], [2, 4]]], 'h': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[2, 2]], [[2, 3]], [[0, 4], [1, 4], [2, 4]]], 'i': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[1, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], 'j': [[[0, 0], [1, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4]]], 'k': [[[0, 0], [2, 0]], [[1, 1], [2, 1]], [[1, 2], [2, 2]], [[1, 3], [2, 3]], [[0, 4], [2, 4]]], 'l': [[[1, 0], [2, 0]], [[0, 1], [1, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [1, 3]], [[1, 4], [2, 4]]], 'm': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3]], [[0, 4], [1, 4], [2, 4]]], 'n': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[0, 2], [1, 2], [2, 2]], [[2, 3]], [[0, 4], [1, 4], [2, 4]]], 'o': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[0, 2], [1, 2], [2, 2]], [[1, 3]], [[0, 4], [1, 4]]], 'p': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3]], [[0, 4]]], 'q': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[0, 2], [1, 2], [2, 2]], [[2, 3]], [[2, 4]]], 'r': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[0, 2], [1, 2]], [[1, 3]], [[1, 4], [2, 4]]], 's': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 't': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[1, 2], [2, 2]], [[1, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 'u': [[[0, 0], [1, 0]], [[1, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [1, 3]], [[0, 4], [1, 4]]], 'v': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [2, 4]]], 'w': [[[1, 0], [2, 0]], [[1, 1]], [[0, 2], [1, 2]], [[1, 3]], [[1, 4], [2, 4]]], 'x': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 'y': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[1, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], 'z': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2]], [[0, 3]], [[0, 4], [1, 4], [2, 4]]], 'A': [[[0, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], []], 'B': [[[1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[1, 2], [2, 2]], [[1, 3], [2, 3]], [[2, 4]]], 'C': [[[0, 0], [1, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], 'D': [[[0, 0], [2, 0]], [[0, 1], [1, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3]], [[0, 4]]], 'E': [[[1, 0], [2, 0]], [[0, 1], [2, 1]], [[1, 2], [2, 2]], [[0, 3]], []], 'F': [[[0, 0], [1, 0]], [[1, 1]], [[0, 2], [1, 2]], [[2, 3]], []], 'G': [[[0, 0]], [[0, 1]], [[0, 2]], [[1, 3], [2, 3]], []], 'H': [[[2, 0]], [[2, 1]], [[2, 2]], [[0, 3], [1, 3], [2, 3]], []], 'I': [[[1, 0]], [[1, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], []], 'J': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3]], [[2, 4]]], 'K': [[[1, 0], [2, 0]], [[1, 1], [2, 1]], [[1, 2], [2, 2]], [[0, 3], [2, 3]], [[1, 4]]], 'L': [[[0, 0], [1, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2]], [[1, 3], [2, 3]], [[0, 4], [2, 4]]], 'M': [[[0, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], 'N': [[[2, 0]], [[0, 1], [1, 1], [2, 1]], [[2, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4]]], 'O': [[[1, 0]], [[0, 1], [1, 1], [2, 1]], [[1, 2]], [[0, 3], [1, 3]], [[2, 4]]], 'P': [[[0, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2]], [[0, 3]], [[1, 4], [2, 4]]], 'Q': [[[2, 0]], [[0, 1], [1, 1], [2, 1]], [[2, 2]], [[2, 3]], [[0, 4], [1, 4]]], 'R': [[[1, 0]], [[0, 1], [1, 1]], [[1, 2]], [[1, 3], [2, 3]], [[0, 4], [2, 4]]], 'S': [[[0, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4], [2, 4]]], 'T': [[[2, 0]], [[1, 1], [2, 1]], [[1, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 'U': [[[1, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2]], [[0, 3], [1, 3]], [[0, 4], [1, 4]]], 'V': [[[0, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4]]], 'W': [[[1, 0]], [[0, 1], [1, 1]], [[1, 2]], [[1, 3], [2, 3]], []], 'X': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[2, 4]]], 'Y': [[[1, 0]], [[1, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], 'Z': [[[0, 0]], [[0, 1]], [[0, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4]]], "'": [[[0, 0], [1, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], '.': [[[0, 0], [1, 0]], [[1, 1], [2, 1]], [[1, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], '!': [[[0, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], '?': [[[1, 0]], [[0, 1], [1, 1]], [[1, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], '"': [[[0, 0], [2, 0]], [[0, 1]], [[0, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], ')': [[[1, 0], [2, 0]], [], [[2, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], '(': [[[0, 0], [1, 0]], [[2, 1]], [[1, 2]], [[0, 3]], [[0, 4], [1, 4], [2, 4]]], '[': [[[0, 0], [2, 0]], [[1, 1]], [[0, 2]], [], [[0, 4], [1, 4], [2, 4]]], ']': [[[1, 0], [2, 0]], [[0, 1]], [[2, 2]], [], [[0, 4], [1, 4], [2, 4]]], ',': [[[0, 0], [2, 0]], [[1, 1], [2, 1]], [[0, 2], [2, 2]], [[1, 3]], [[0, 4]]], ':': [[[0, 0], [1, 0]], [[2, 1]], [[1, 2]], [[2, 3]], [[0, 4], [1, 4]]], '0': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], '1': [[[1, 0], [2, 0]], [[1, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4]]], '2': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], []], '3': [[[0, 0], [1, 0]], [[1, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], [[2, 4]]], '4': [[[0, 0]], [[0, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], '5': [[], [[2, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4], [2, 4]]], '6': [[[2, 0]], [[1, 1]], [[0, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4], [2, 4]]], '7': [[[1, 0]], [[0, 1]], [], [[0, 3], [1, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], '8': [[[0, 0]], [[2, 1]], [], [[0, 3], [1, 3], [2, 3]], [[0, 4], [1, 4]]], '9': [[[2, 0]], [[1, 1]], [[2, 2]], [[0, 3], [1, 3]], [[0, 4], [2, 4]]], ' ': [[[1, 0], [2, 0]], [[0, 1], [2, 1]], [[1, 2]], [[0, 3]], [[1, 4]]]}
letterdata = {'a': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [2, 4]]], 'b': [[[0, 0], [1, 0], [2, 0]], [[1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[1, 3], [2, 3]], [[1, 4], [2, 4]]], 'c': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [1, 3]], [[0, 4], [1, 4], [2, 4]]], 'd': [[[0, 0], [1, 0]], [[0, 1], [2, 1]], [[0, 2], [1, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4]]], 'e': [[[0, 0]], [[1, 1], [2, 1]], [[0, 2], [2, 2]], [[1, 3], [2, 3]], [[0, 4]]], 'f': [[[2, 0]], [[0, 1], [1, 1]], [[1, 2]], [[0, 3], [1, 3]], [[2, 4]]], 'g': [[[1, 0], [2, 0]], [[0, 1]], [[0, 2]], [[0, 3]], [[1, 4], [2, 4]]], 'h': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[2, 2]], [[2, 3]], [[0, 4], [1, 4], [2, 4]]], 'i': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[1, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], 'j': [[[0, 0], [1, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4]]], 'k': [[[0, 0], [2, 0]], [[1, 1], [2, 1]], [[1, 2], [2, 2]], [[1, 3], [2, 3]], [[0, 4], [2, 4]]], 'l': [[[1, 0], [2, 0]], [[0, 1], [1, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [1, 3]], [[1, 4], [2, 4]]], 'm': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3]], [[0, 4], [1, 4], [2, 4]]], 'n': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[0, 2], [1, 2], [2, 2]], [[2, 3]], [[0, 4], [1, 4], [2, 4]]], 'o': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[0, 2], [1, 2], [2, 2]], [[1, 3]], [[0, 4], [1, 4]]], 'p': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3]], [[0, 4]]], 'q': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[0, 2], [1, 2], [2, 2]], [[2, 3]], [[2, 4]]], 'r': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[0, 2], [1, 2]], [[1, 3]], [[1, 4], [2, 4]]], 's': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 't': [[[0, 0], [1, 0], [2, 0]], [[2, 1]], [[1, 2], [2, 2]], [[1, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 'u': [[[0, 0], [1, 0]], [[1, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [1, 3]], [[0, 4], [1, 4]]], 'v': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [2, 4]]], 'w': [[[1, 0], [2, 0]], [[1, 1]], [[0, 2], [1, 2]], [[1, 3]], [[1, 4], [2, 4]]], 'x': [[[0, 0], [1, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 'y': [[[0, 0], [1, 0], [2, 0]], [[1, 1]], [[1, 2]], [[1, 3]], [[0, 4], [1, 4], [2, 4]]], 'z': [[[0, 0], [1, 0], [2, 0]], [[0, 1]], [[0, 2]], [[0, 3]], [[0, 4], [1, 4], [2, 4]]], 'A': [[[0, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], []], 'B': [[[1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[1, 2], [2, 2]], [[1, 3], [2, 3]], [[2, 4]]], 'C': [[[0, 0], [1, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], 'D': [[[0, 0], [2, 0]], [[0, 1], [1, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3]], [[0, 4]]], 'E': [[[1, 0], [2, 0]], [[0, 1], [2, 1]], [[1, 2], [2, 2]], [[0, 3]], []], 'F': [[[0, 0], [1, 0]], [[1, 1]], [[0, 2], [1, 2]], [[2, 3]], []], 'G': [[[0, 0]], [[0, 1]], [[0, 2]], [[1, 3], [2, 3]], []], 'H': [[[2, 0]], [[2, 1]], [[2, 2]], [[0, 3], [1, 3], [2, 3]], []], 'I': [[[1, 0]], [[1, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], []], 'J': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3]], [[2, 4]]], 'K': [[[1, 0], [2, 0]], [[1, 1], [2, 1]], [[1, 2], [2, 2]], [[0, 3], [2, 3]], [[1, 4]]], 'L': [[[0, 0], [1, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2]], [[1, 3], [2, 3]], [[0, 4], [2, 4]]], 'M': [[[0, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], 'N': [[[2, 0]], [[0, 1], [1, 1], [2, 1]], [[2, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4]]], 'O': [[[1, 0]], [[0, 1], [1, 1], [2, 1]], [[1, 2]], [[0, 3], [1, 3]], [[2, 4]]], 'P': [[[0, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2]], [[0, 3]], [[1, 4], [2, 4]]], 'Q': [[[2, 0]], [[0, 1], [1, 1], [2, 1]], [[2, 2]], [[2, 3]], [[0, 4], [1, 4]]], 'R': [[[1, 0]], [[0, 1], [1, 1]], [[1, 2]], [[1, 3], [2, 3]], [[0, 4], [2, 4]]], 'S': [[[0, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4], [2, 4]]], 'T': [[[2, 0]], [[1, 1], [2, 1]], [[1, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4], [1, 4], [2, 4]]], 'U': [[[1, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2]], [[0, 3], [1, 3]], [[0, 4], [1, 4]]], 'V': [[[0, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [2, 3]], [[0, 4]]], 'W': [[[1, 0]], [[0, 1], [1, 1]], [[1, 2]], [[1, 3], [2, 3]], []], 'X': [[[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]], [[0, 3], [1, 3], [2, 3]], [[2, 4]]], 'Y': [[[1, 0]], [[1, 1]], [[1, 2]], [[0, 3], [1, 3], [2, 3]], [[1, 4]]], 'Z': [[[0, 0]], [[0, 1]], [[0, 2]], [[0, 3], [1, 3], [2, 3]], [[0, 4]]]}
def get(s):
    o=[]
    for l in list(s):
        o.append(letterdata[l if l in list(data.keys()) else '\u25A1'])
    return o

def gen():
    size=(3,5)
    im = PIL.Image.open("./coinfont/full.png")
    def ab(xi, yi):
        if yi == 0:
            cl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\u25A1\u1F600"
        else:
            cl = "abcdefghijklmnopjrstuvwxyz'.!?\")([], "
        return list(cl)[xi]
    
    def imagetolist(im: PIL.Image.Image):
        """Convert an image to 2D list containing the image colors"""
        out = []
        data = list(im.getdata())
        for i in range(im.height):
            out.append(data[(im.width*i-1)+1:(im.width*i)+im.width])
        return out
    
    def t(d):
        out = []
        height = (len(d)/2)-0.5
        for yi, y in enumerate(d):
            a = []
            for xi, x in enumerate(y):
                pixel_data = [xi, int(yi-height)]
                if x[3] == 255:
                    a.append(pixel_data)
            out.append(a)
        return out
    a, b = (im.width / size[0], im.height / size[1])
    out={}
    for i in range(int(b)):
        for h in range(int(a)):
            imh = im.crop((h,i,h+size[0],i+size[1]))
            out[ab(i,h)]=t(imagetolist(imh))
    im.close()
    return out
    
print(gen())
