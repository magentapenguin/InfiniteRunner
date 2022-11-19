import guizero as ui
import PIL, os
imgfile = None
app = ui.App(title="Coin Pattern Generator")
def select_img():
    global imgfile
    imgfile=app.select_file("Select image", filetypes=[["PNG files", "*.png"]])
    if imgfile == '':
        button.text="Select Image"
    else:
        button.text = "Select Image (Selected: "+os.path.split(imgfile)[1]+")"

    
button = ui.PushButton(app, command=select_img, text="Select Image")
app.display()
