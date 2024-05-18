function toggleIcon(element, iconClass) {
    element.classList.toggle('far'); // Toggle outline class
    element.classList.toggle('fas'); // Toggle filled class
  }
  
  const posts = [
    {
        videoSrc: "/video/Documentary on Women Empowerment in Bangladesh.mp4",
        thumbnailSrc: "/img/fifth.jpg",
        gender: {
          en: "<b>Female</b>",
          bn: "<b>মহিলা</b>"
        },
        description: {
          en: "Documentary on Women Empowerment in Bangladesh.",
          bn: "বাংলাদেশে নারীর ক্ষমতায়নের উপর ডকুমেন্টারি"
        }
      },
    {
      videoSrc: "/video/Rural Women Entrepreneurs.mp4",
      thumbnailSrc: "/img/second_video.jpg",
      gender: {
        en: "<b>Female</b>",
        bn: "<b>মহিলা</b>"
      },
      description: {
        en: "Rural Women Entrepreneurs",
        bn: "গ্রামীণ নারী উদ্যোক্তা"
      }
    },
    {
        videoSrc: "/video/Women Empowerment.mp4",
        thumbnailSrc: "/img/third_video.jpg",
        gender: {
            en: "<b>Male</b>",
            bn: "<b>পুরুষ</b>"
        },
        description: {
          en: "Women Empowerment",
          bn: "নারীর ক্ষমতায়ন"
        }
      },
      {
        videoSrc: "/video/নারীর ক্ষমতায়ন - Empowerment of women _ দশ উদ্দ্যোগ.mp4",
        thumbnailSrc: "/img/first_video_thumbnail.jpg",
        gender: {
          en: "<b>Male</b>",
          bn: "<b>পুরুষ</b>"
        },
        description: {
          en: "Empowerment of women.",
          bn: "নারীর ক্ষমতায়ন"
        }
      }
    // Add more posts as needed
  ];
  
  let currentLang = 'en'; // Default language
  
  function renderPosts() {
    const container = document.querySelector('.row'); // Assuming you have a div with class 'row' for the posts
  
    container.innerHTML = ''; // Clear existing posts to re-render
  
    posts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.className = 'post-card';
  
      const postHeader = document.createElement('div');
      postHeader.className = 'post-header';
      postHeader.innerHTML = `
        <i class="fa-solid fa-user alvi" style="font-size: 1.5rem;"></i>
        <span class="gender">${post.gender[currentLang]}</span>
      `;
  
      const videoElement = document.createElement('video');
      videoElement.className = 'img-fluid';
      videoElement.controls = true;
      videoElement.poster = post.thumbnailSrc; // Set video thumbnail
      const sourceElement = document.createElement('source');
      sourceElement.src = post.videoSrc;
      sourceElement.type = 'video/mp4';
      videoElement.appendChild(sourceElement);
      videoElement.innerHTML += 'Your browser does not support the video tag.';
  
      // Add event listener to pause other videos when this video plays
      videoElement.addEventListener('play', () => {
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(vid => {
          if (vid !== videoElement) {
            vid.pause();
          }
        });
      });
  
      const descriptionParagraph = document.createElement('p');
      descriptionParagraph.textContent = post.description[currentLang];
  
      const postIcons = document.createElement('div');
      postIcons.className = 'post-icons';
      postIcons.innerHTML = `
        <i class="far fa-heart" onclick="toggleIcon(this, 'fa-heart')"></i>
        <i class="far fa-comment" onclick="toggleIcon(this, 'fa-comment')"></i>
        <i class="far fa-share-square" onclick="toggleIcon(this, 'fa-share-square')"></i>
        <i class="far fa-bookmark" onclick="toggleIcon(this, 'fa-bookmark')"></i>
      `;
  
      // Append all parts to the post card
      postCard.appendChild(postHeader);
      postCard.appendChild(videoElement);
      postCard.appendChild(descriptionParagraph);
      postCard.appendChild(postIcons);
  
      // Append the post card to the container
      container.appendChild(postCard);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderPosts); // Render posts when the document is ready
  
  document.getElementById('lang-toggle').addEventListener('change', function() {
    currentLang = this.checked ? 'bn' : 'en';
    renderPosts(); // Re-render posts with the new language
  });
  
  // Get the modal
  var modal = document.getElementById('uploadModal');
  
  // Get the button that opens the modal
  var uploadBtn = document.querySelector('.upload-icon'); // Target the upload icon specifically
  
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the upload button, open the modal 
  uploadBtn.onclick = function() {
      modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  // Handle form submission
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const fileInput = document.getElementById('videoFile');
      const thumbnailInput = document.getElementById('thumbnailFile');
      const descriptionInputEn = document.getElementById('videoDescriptionEn');
      const descriptionInputBn = document.getElementById('videoDescriptionBn');
      const genderSelect = document.getElementById('genderSelect');

      const newPost = {
          videoSrc: URL.createObjectURL(fileInput.files[0]),
          thumbnailSrc: URL.createObjectURL(thumbnailInput.files[0]),
          description: {
              en: descriptionInputEn.value,
              bn: descriptionInputBn.value
          },
          gender: {
              en: genderSelect.value,
              bn: genderSelect.value === "Male" ? "পুরুষ" : genderSelect.value === "Female" ? "মহিলা" : "উল্লেখ নেই"
          }
      };
      posts.push(newPost);
      renderPosts(); // Re-render posts to include the new one
      modal.style.display = "none"; // Close the modal
  });
  
  document.querySelector('.fa-question-circle').addEventListener('click', function() {
    window.location.href = 'ngo_talk.html';
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('notification-icon').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.location.href = 'notification.html'; // Redirect to notification.html
    });
});

document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    window.location.href = 'profile.html'; // Redirect to the profile page
});


document.addEventListener('DOMContentLoaded', function() {
    lottie.loadAnimation({
        container: document.getElementById('profileIconAnimation'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animation - 1715983481614.json' // the path to your animation file
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('news-icon').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.location.href = 'news.html'; // Redirect to news.html
    });
});