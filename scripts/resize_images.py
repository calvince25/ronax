from PIL import Image
import os

sizes = {
    'favicon-16x16.png': (16, 16),
    'favicon-32x32.png': (32, 32),
    'apple-touch-icon.png': (180, 180),
    'android-chrome-192x192.png': (192, 192),
    'android-chrome-512x512.png': (512, 512),
}

input_image_path = 'c:\\Users\\PC\\Desktop\\Ronax\\public\\WhatsApp_Image_2026-05-04_at_10_54_23.jpeg'
output_dir = 'c:\\Users\\PC\\Desktop\\Ronax\\public'

try:
    img = Image.open(input_image_path)
    
    # Ensure it's in RGBA to allow any transparency, but actually user said: "Keep the black background on the logo — do not make it transparent."
    img = img.convert("RGBA")
    
    # Create an opaque black background image of the same size
    bg = Image.new('RGBA', img.size, (0,0,0,255))
    
    # Composite the image onto the black background (if it has alpha)
    img = Image.alpha_composite(bg, img)
    
    # Convert to RGB to remove alpha channel since it's going to have a black background
    img = img.convert("RGB")

    for filename, size in sizes.items():
        # Use high quality downsampling
        resized = img.resize(size, Image.Resampling.LANCZOS)
        resized.save(os.path.join(output_dir, filename), 'PNG')
    
    # Save the favicon.ico (16x16, 32x32, 48x48)
    favicon_sizes = [(16, 16), (32, 32), (48, 48)]
    img.save(os.path.join(output_dir, 'favicon.ico'), format='ICO', sizes=favicon_sizes)
    print("Images generated successfully!")

except Exception as e:
    print(f"Error: {e}")
