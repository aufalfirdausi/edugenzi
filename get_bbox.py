from PIL import Image

img = Image.open("/Users/aufaalfirdausi/Downloads/PNG/hero-section.png")
print("BBox:", img.getbbox())
