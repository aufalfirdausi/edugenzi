from PIL import Image

img = Image.open("/Users/aufaalfirdausi/Downloads/PNG/hero-section.png")
print("Size:", img.size)
print("Top-left pixel:", img.getpixel((0, 0)))
print("Top-right pixel:", img.getpixel((img.width - 1, 0)))
