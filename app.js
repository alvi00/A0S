const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



const langData = {
  en: {
    signInTitle: "Sign in",
    signUpTitle: "Sign up",
    newUser: "New here?",
    newUserDesc: "Welcome to our platform! Here, we are dedicated to educating and empowering men about gender equality. Join us to explore resources, engage in discussions, and contribute to building a more equitable society.",
    existingUser: "One of us?",
    existingUserDesc: "Already a member? Dive back into our discussions and continue your journey towards understanding and promoting gender equality with us.",
    usernamePlaceholder: "Username",
    passwordPlaceholder: "Password",
    forgotPassword: "Forgot Password?",
    signInWith: "Or Sign in with social platforms",
    signUpWith: "Or Sign up with social platforms",
    usernameRequired: "Fill up the username",
    passwordRequired: "Fill up the password",
    emailRequired: "Fill up the email"
  },
  bn: {
    signInTitle: "প্রবেশ করুন",
    signUpTitle: "নিবন্ধন করুন",
    newUser: "নতুন এখানে?",
    newUserDesc: "আমাদের প্ল্যাটফর্মে স্বাগতম! এখানে, আমরা লিঙ্গ সমতার বিষয়ে শিক্ষা দেওয়া এবং পুরুষদের ক্ষমতায়নে নিবেদিত। সম্পদ অন্বেষণ করুন, আলোচনায় যোগ দিন, এবং একটি আরও সমতামূলক সমাজ গড়ে তুলতে অবদান রাখুন।",
    existingUser: "আমাদের একজন?",
    existingUserDesc: "ইতিমধ্যে সদস্য? আমাদের আলোচনায় ফিরে আসুন এবং লিঙ্গ সমতার বোঝাপড়া এবং প্রচারের পথে আপনার যাত্রা অব্যাহত রাখুন।",
    usernamePlaceholder: "ব্যবহারকারীর নাম",
    passwordPlaceholder: "পাসওয়ার্ড",
    forgotPassword: "পাসওয়ার্ড ভুলে গছেন?",
    signInWith: "অথবা সামাজিক প্ল্যাটফর্মের মাধ্যমে প্রবেশ করুন",
    signUpWith: "অথবা সামাজিক প্ল্যাটফর্মের মাধ্যমে নিবন্ধন  করুন",
    usernameRequired: "ব্যবহারকারীর নাম পূরণ করুন",
    passwordRequired: "পাসওয়ার্ড পূরণ করুন",
    emailRequired: "ইমেইল পূরণ করুন"
  }
};

let currentLang = 'en'; // Default language

function switchLanguage(lang) {
  currentLang = lang; // Update current language
  // Titles
  document.querySelector('.sign-in-form .title').textContent = langData[lang].signInTitle;
  document.querySelector('.sign-up-form .title').textContent = langData[lang].signUpTitle;

  // Descriptions
  document.querySelector('.panel.left-panel .content h3').textContent = langData[lang].newUser;
  document.querySelector('.panel.left-panel .content p').textContent = langData[lang].newUserDesc;
  document.querySelector('.panel.right-panel .content h3').textContent = langData[lang].existingUser;
  document.querySelector('.panel.right-panel .content p').textContent = langData[lang].existingUserDesc;

  // Input placeholders
  document.querySelectorAll('.input-field input')[0].placeholder = langData[lang].usernamePlaceholder;
  document.querySelectorAll('.input-field input')[1].placeholder = langData[lang].passwordPlaceholder;

  // Links and buttons
  document.querySelector('.forgot-password').textContent = langData[lang].forgotPassword;
  document.querySelector('.sign-in-form .social-text').textContent = langData[lang].signInWith;
  document.querySelector('.sign-up-form .social-text').textContent = langData[lang].signUpWith;

  // Button texts by ID
  document.querySelector('#sign-up-btn').textContent = lang === 'bn' ? 'নিবন্ধন করুন' : 'Sign up';
  document.querySelector('#sign-in-btn').textContent = lang === 'bn' ? 'প্রবেশ করুন' : 'Sign in';
}

document.getElementById('lang-toggle').addEventListener('change', function() {
  if(this.checked) {
    switchLanguage('bn'); // Switch to Bangla
  } else {
    switchLanguage('en'); // Switch to English
  }
});

document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const usernameInput = document.querySelector('.sign-in-form input[type="text"]');
  const passwordInput = document.querySelector('.sign-in-form input[type="password"]');
  let allFieldsFilled = true;

  if (!usernameInput.value) {
    usernameInput.placeholder = langData[currentLang].usernameRequired;
    allFieldsFilled = false;
  }

  if (!passwordInput.value) {
    passwordInput.placeholder = langData[currentLang].passwordRequired;
    allFieldsFilled = false;
  }

  if (allFieldsFilled) {
    window.location.href = 'main_page.html'; // Redirect to main page
  }
});

document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const usernameInput = document.querySelector('.sign-up-form input[type="text"]');
  const emailInput = document.querySelector('.sign-up-form input[type="email"]');
  const passwordInput = document.querySelector('.sign-up-form input[type="password"]');
  let allFieldsFilled = true;

  if (!usernameInput.value) {
    usernameInput.placeholder = langData[currentLang].usernameRequired;
    allFieldsFilled = false;
  }

  if (!emailInput.value) {
    emailInput.placeholder = langData[currentLang].emailRequired;
    allFieldsFilled = false;
  }

  if (!passwordInput.value) {
    passwordInput.placeholder = langData[currentLang].passwordRequired;
    allFieldsFilled = false;
  }

  if (allFieldsFilled) {
    window.location.href = 'main_page.html'; // Redirect to main page
  }
});
