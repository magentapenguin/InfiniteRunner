"""A "Simple" program to convert images to coin patterns"""

import os

import PIL

import guizero as ui

IMGFILE = None
IMG=None
IMGTHUMB = None

app = ui.App(title="Coin Pattern Generator")
app.icon = "./assets/pickups/coin2.png"

ERROR=True

def imagetolist(im: PIL.Image.Image):
    """Convert an image to list containing the image colors"""
    out = []
    data = list(im.getdata())
    for i in range(im.height):
        out.append(data[(im.width*i-1)+1:(im.width*i)+im.width])
    return out

def select_img():
    """Select the img to convert"""
    global IMGFILE, IMG, IMGTHUMB, ERROR
    IMGFILE=app.select_file("Select image", filetypes=[["PNG files", "*.png"]])
    if IMGFILE == '':
        select_img.text="Select Image"
        ERROR=True
        IMGFILE = None
        IMG = None
        box.hide()
        image_error.hide()
        image_size_error.hide()
    else:
        ERROR=False
        select_img.text = "Select Image (Selected: "+os.path.split(IMGFILE)[1]+")"
        IMG = PIL.Image.open(IMGFILE, formats=("PNG",))
        print(IMGFILE)
        IMGTHUMB = IMG.copy()
        IMGTHUMB.thumbnail((64, 64))
        box.show()
        preview_pic.resize(IMGTHUMB.width, IMGTHUMB.height)
        preview_pic.image = IMGTHUMB
        if IMG.width >= 20 or IMG.height >= 20:
            ERROR=True
            image_size_error.show()
        button.enabled = not ERROR

def make():
    """Make the coin pattern"""
    button.enabled = not ERROR
    if not ERROR:
        data = imagetolist(IMG.rotate(180))
        name = os.path.split(IMG.filename)[1].split(".")[0]
        name = name if name_in.value == "" else name_in.value
        out = []
        height = (len(data)/2)-0.5
        for yi, y in enumerate(data):
            a = []
            for xi, x in enumerate(y):
                pixel_data = [xi, int(yi-height)]
                if x[3] == 255:
                    a.append(pixel_data)
            out.append(a)
        out= f"""let {name} = {[out]};
game.coinspawner.pattern({name}, {spacing_inp.value}, {value_inp.value});"""
        output.show()
        output.value = out


select_img = ui.PushButton(app, command=select_img, text="Select Image")
box = ui.Box(app,layout="grid")
preview_txt = ui.Text(box, text="Img Preview: ",grid = [0,0])
preview_pic = ui.Picture(box, image=PIL.Image.new("RGBA",(1,1)), grid = [1,0])
image_error = ui.Text(app, text="Unknown Error", color="red")
image_size_error = ui.Text(app, text="Error: Image too large", color="red")
image_error.hide()
image_size_error.hide()

title_box = ui.TitleBox(app, "Settings", layout="grid")

spacing_txt = ui.Text(title_box, text="Spacing:",grid = [0,0])
spacing_inp = ui.TextBox(title_box, text=50, grid = [1,0],width=30)

value_txt = ui.Text(title_box, text="Coin Value:",grid = [0,1])
value_inp = ui.TextBox(title_box, text=1, grid = [1,1],width=30)

name_txt = ui.Text(title_box, text="Override Name (Leave Blank for Default):",grid = [0,2])
name_in = ui.TextBox(title_box, text="", grid = [1,2],width=30)

button = ui.PushButton(app, command=make, text="Make Pattern")
button.enabled = False
output = ui.TextBox(app, visible=False, text = "hi", multiline=True)
output.tk.config(relief= "flat")
output.resize(100, 4)
box.hide()

app.display()
