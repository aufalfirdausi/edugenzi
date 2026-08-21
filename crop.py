from PIL import Image

def crop_image(input_path, output_path, target_ratio):
    img = Image.open(input_path)
    w, h = img.size
    
    target_w = w
    target_h = int(w / target_ratio)
    
    if target_h > h:
        target_h = h
        target_w = int(h * target_ratio)
        
    left = (w - target_w) / 2
    top = 0  # Top aligned
    right = (w + target_w) / 2
    bottom = target_h
    
    img_cropped = img.crop((left, top, right, bottom))
    img_cropped.save(output_path)
    print(f"Cropped {input_path} to {output_path} with size {img_cropped.size}")

crop_image("/Users/aufaalfirdausi/Downloads/PNG/hero-section.png", "./public/hero-section.png", 3368 / 2360)
