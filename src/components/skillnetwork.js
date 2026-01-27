import { useEffect, useRef } from "react";
// import "./SkillsNetwork.css";
import "./skillnetwork.css"

export default function SkillsNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const BOUNDS = { width: 0, height: 0 };

    let isMobile = false;

    function resizeCanvas() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      BOUNDS.width = Math.min(canvas.width, window.innerWidth);
      BOUNDS.height = canvas.height;
      isMobile = window.innerWidth < 768;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let isDragging = false;
    let draggedNode = null;

    window.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      nodes.forEach((node) => {
        const r = node.getRadius();
        const dist = Math.hypot(x - node.x, y - node.y);
        if (dist < r + 10) {
          isDragging = true;
          draggedNode = node;
        }
      });
    });

    // Touch events
    window.addEventListener("touchstart", (e) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      nodes.forEach((node) => {
        const r = node.getRadius();
        const dist = Math.hypot(x - node.x, y - node.y);
        if (dist < r + 10) {
          isDragging = true;
          draggedNode = node;
        }
      });
    }, { passive: false });

    window.addEventListener("mouseup", () => {
      isDragging = false;
      draggedNode = null;
    });

    window.addEventListener("touchend", () => {
      isDragging = false;
      draggedNode = null;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging || !draggedNode) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const r = draggedNode.getRadius();
      draggedNode.targetX = Math.min(
        Math.max(x, r),
        BOUNDS.width - r
      );
      draggedNode.targetY = Math.min(
        Math.max(y, r),
        BOUNDS.height - r
      );
    });

    window.addEventListener("touchmove", (e) => {
      if (!isDragging || !draggedNode) return;
      e.preventDefault(); // Prevent scrolling while dragging
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const r = draggedNode.getRadius();
      draggedNode.targetX = Math.min(
        Math.max(x, r),
        BOUNDS.width - r
      );
      draggedNode.targetY = Math.min(
        Math.max(y, r),
        BOUNDS.height - r
      );
    }, { passive: false });

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    class Node {
      constructor(x, y, radius, color, text, logoUrl) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        // this.radius = radius; // Size is now dynamic
        this.color = color;
        this.text = text;
        this.logo = new Image();
        this.logo.src = logoUrl;

        this.dx = (Math.random() - 0.5) * 1.1;
        this.dy = (Math.random() - 0.5) * 1.1;

        this.opacity = 0;
        this.delay = Math.random() * 60;
      }
      
      getRadius() {
          return isMobile ? 18 : 28;
      }

      draw() {
        const r = this.getRadius();
        
        ctx.save();
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.closePath();

        if (this.logo.complete) {
          const size = r * 1.1;
          ctx.drawImage(
            this.logo,
            this.x - size / 2.2,
            this.y - size / 2.2,
            size * 0.8,
            size * 0.8
          );
        }

        ctx.shadowBlur = 0;
        ctx.fillStyle = "#fff";
        
        if (isMobile) {
            ctx.font = "12px Poppins";
            ctx.textAlign = "center";
            ctx.fillText(this.text, this.x, this.y + r + 15);
        } else {
            ctx.font = "15px Poppins";
            ctx.textAlign = "left";
            ctx.fillText(this.text, this.x + r + 14, this.y + 5);
        }

        ctx.restore();
      }

      update() {
        if (this.delay > 0) {
          this.delay -= 1;
        } else {
          this.opacity = Math.min(this.opacity + 0.02, 1);
        }

        const r = this.getRadius();

        if (!isDragging || draggedNode !== this) {
          this.targetX += this.dx;
          this.targetY += this.dy;

          const textWidth = ctx.measureText(this.text).width;
          const safetyMargin = 20; // Increased global margin

          // Boundary Checks
          let minX, maxX, minY, maxY;

          if (isMobile) {
            // Text is below and centered
            minX = safetyMargin + textWidth / 2;
            maxX = BOUNDS.width - safetyMargin - textWidth / 2;
            minY = safetyMargin + r;
            maxY = BOUNDS.height - safetyMargin - r - 20;
          } else {
            // Text is to the right
            minX = safetyMargin + r;
            maxX = BOUNDS.width - safetyMargin - r - 14 - textWidth;
            minY = safetyMargin + r;
            maxY = BOUNDS.height - safetyMargin - r;
          }
          
          // Force Constraint if screen is too narrow
          if (maxX < minX) {
              const mid = BOUNDS.width / 2;
              minX = mid - 1;
              maxX = mid + 1;
          }

          if (this.targetX > maxX || this.targetX < minX) this.dx = -this.dx;
          if (this.targetY > maxY || this.targetY < minY) this.dy = -this.dy;
          
          // Clamp checks to prevent getting stuck
          if (this.targetX < minX) this.targetX = minX + 1;
          if (this.targetX > maxX) this.targetX = maxX - 1;
          if (this.targetY < minY) this.targetY = minY + 1;
          if (this.targetY > maxY) this.targetY = maxY - 1;
        }

        this.x = lerp(this.x, this.targetX, 0.1);
        this.y = lerp(this.y, this.targetY, 0.1);

        this.draw();
      }
    }

    const logoBase = "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/";

    const skills = [
      { color: "#ff6f00", text: "HTML5", logo: "html5.svg" },
      { color: "#2965f1", text: "CSS3", logo: "css3.svg" },
      { color: "#7952b3", text: "Bootstrap", logo: "bootstrap.svg" },
      { color: "#f7df1e", text: "JavaScript", logo: "javascript.svg" },
      { color: "#61dafb", text: "ReactJs", logo: "react.svg" },
      { color: "#ffffff", text: "Next.js", logo: "nextdotjs.svg" },
      { color: "#777bb4", text: "Python", logo: "python.svg" },
      { color: "#2ba977", text: "Django", logo: "django.svg" },
      { color: "#00758f", text: "MySQL", logo: "mysql.svg" },
      { color: "#f05033", text: "Git", logo: "git.svg" },
      { color: "#ffffff", text: "GitHub", logo: "github.svg" },
      { color: "#a259ff", text: "Figma", logo: "figma.svg" }
    ];

    const centerX = BOUNDS.width / 2;
    const centerY = BOUNDS.height / 2;
    // const spread = 250;
    const spread = Math.min(BOUNDS.width, BOUNDS.height) / 3;

    let nodes = skills.map((s, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * spread * (0.7 + Math.random() * 0.6);
      const y = centerY + Math.sin(angle) * spread * (0.7 + Math.random() * 0.6);
      return new Node(x, y, 28, s.color, s.text, `${logoBase}${s.logo}`);
    });

    const groups = [
      {
        name: "Web",
        nodes: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "ReactJs", "Next.js"],
        lineStyle: { width: 2, dash: [], color: "rgba(255,255,255,0.2)", round: true }
      },
      {
        name: "Backend",
        nodes: [ "MySQL", "Python", "Django"],
        lineStyle: { width: 1.5, dash: [5, 5], color: "rgba(0,255,255,0.15)", round: true }
      },
      {
        name: "VCS",
        nodes: ["Git", "GitHub"],
        lineStyle: { width: 3, dash: [], color: "rgba(255,100,100,0.25)", round: true }
      },
      {
        name: "Design",
        nodes: ["Figma"],
        lineStyle: { width: 2, dash: [4, 4], color: "rgba(162,89,255,0.2)", round: true }
      }
    ];

    function getGroup(node) {
      return groups.find((g) => g.nodes.includes(node.text));
    }

    function connectNodes() {
      for (let a = 0; a < nodes.length; a++) {
        for (let b = a + 1; b < nodes.length; b++) {
          const groupA = getGroup(nodes[a]);
          const groupB = getGroup(nodes[b]);
          const dx = nodes[a].x - nodes[b].x;
          const dy = nodes[a].y - nodes[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (groupA && groupA === groupB && distance < 280) {
            ctx.beginPath();
            ctx.strokeStyle = groupA.lineStyle.color;
            ctx.lineWidth = groupA.lineStyle.width;
            ctx.setLineDash(groupA.lineStyle.dash);
            ctx.lineCap = groupA.lineStyle.round ? "round" : "butt";
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }
    }



    function animate() {
      ctx.clearRect(0, 0, BOUNDS.width, BOUNDS.height);
      connectNodes();
      nodes.forEach((node) => node.update());
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="skill-section">
      <canvas ref={canvasRef} id="network"></canvas>
    </section>
  );
}
