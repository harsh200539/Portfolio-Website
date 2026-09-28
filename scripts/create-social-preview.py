"""Create the Open Graph preview with the site's existing space palette."""
from PIL import Image, ImageDraw, ImageFont

image = Image.new("RGB", (1200, 630), "#0b0f1a")
draw = ImageDraw.Draw(image)
for y in range(630):
    shade = int(15 + y * 13 / 630)
    draw.line((0, y, 1199, y), fill=(11 + y // 100, shade, 26 + y // 23))
draw.ellipse((880, -150, 1270, 240), outline="#263d59", width=3)
draw.ellipse((970, 350, 1450, 830), outline="#463058", width=3)
draw.line((80, 120, 350, 120), fill="#4dd4e8", width=6)
regular = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
def label(x, y, value, size, color, font=regular):
    draw.text((x, y), value, font=ImageFont.truetype(font, size), fill=color)
label(80, 70, "PORTFOLIO", 30, "#4dd4e8", bold)
label(80, 215, "Harshvardhan Patil", 70, "#f0f4f8", bold)
label(80, 315, "Full Stack & Automation Developer", 35, "#4dd4e8")
label(80, 395, "React  |  Django  |  CRM  |  AI Automation", 27, "#c8d1df")
label(80, 525, "Vadodara, Gujarat  |  harshvardhanpatil.in", 24, "#c8d1df")
image.save("public/social-preview.png", optimize=True)
