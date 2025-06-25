const youtubeIds = [
      "SUavcwCCLN8", "g0hkeyMb45U", "JeO3pC8DW3Y", "P-AFAfFWams",
      "e6FigV2fLC8", "i6Oi-YtXnAU", "KlbL-8CEjN0", "DQjZyHwci-0",
      "EBIY9HJnhXk", "oZH572imWdQ", "GDFD7nq6IGg", "5rRx2XZkW8c",
      "p1qW5AUJ4l0", "VxOcemtP5SA", "1eMy4bZ3KfM", "r11FflkQqJs"
    ];

    const videosContainer = document.getElementById("videos");

    function criarCardDeVideo(youtubeId, index) {
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow overflow-hidden";
      card.innerHTML = `
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/${youtubeId}"
          title="Vídeo ${index + 1}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `;
      return card;
    }

    youtubeIds.forEach((id, index) => {
      const videoCard = criarCardDeVideo(id, index);
      videosContainer.appendChild(videoCard);
    });
