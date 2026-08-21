from PIL import Image

def process_image():
    input_path = "/Users/aufaalfirdausi/Downloads/PNG/hero-section.png"
    output_path = "./public/hero-section.png"
    
    img = Image.open(input_path)
    
    # We want a 4:3 image containing the person from y=400 to y=2800
    top = 400
    bottom = 2800
    height = bottom - top
    width = int(height * (3368 / 2360)) # Use exact mascot ratio: ~1.427
    
    # Crop the horizontal slice from the original image
    slice_img = img.crop((0, top, img.width, bottom))
    
    # Create new transparent canvas
    new_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    
    # Paste the slice into the center of the canvas
    x_offset = (width - img.width) // 2
    new_img.paste(slice_img, (x_offset, 0))
    
    new_img.save(output_path)
    print(f"Saved half-body image to {output_path} with size {new_img.size}")

process_image()
