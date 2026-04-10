(() => {
  function getBasePath() {
    return "../照片与视频/"
  }

  function makeFigure(item) {
    const figure = document.createElement("figure")
    const button = document.createElement("button")
    button.type = "button"
    button.className = "album-item"
    button.dataset.src = `${getBasePath()}${item.src}`

    if (item.type === "video") {
      button.dataset.type = "video"
      const video = document.createElement("video")
      video.src = `${getBasePath()}${item.src}`
      video.preload = "metadata"
      video.muted = true
      video.playsInline = true
      button.appendChild(video)
    } else {
      const image = document.createElement("img")
      image.src = `${getBasePath()}${item.src}`
      image.loading = "lazy"
      image.alt = item.title
      button.appendChild(image)
    }

    const caption = document.createElement("figcaption")
    caption.textContent = item.title

    figure.append(button, caption)
    return figure
  }

  function renderAlbum() {
    const albumData = window.__amuAlbumData
    if (!albumData) return

    document.querySelectorAll("[data-album-section]").forEach((section) => {
      const sectionKey = section.getAttribute("data-album-section") || ""
      const items = albumData[sectionKey] || []
      section.replaceChildren(...items.map(makeFigure))
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAlbum, { once: true })
  } else {
    renderAlbum()
  }

  document.addEventListener("nav", renderAlbum)
})()
