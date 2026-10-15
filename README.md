# FORME. Assignment #4: Forms and Validation

**Student:** Mumina Mukazhan
**Group:** SE-2530
**Live site:** 
**Repository:** 

## Description

FORME is a small multi-page website for Assignment #4. It shows how to build user-friendly forms with HTML, style them with Bootstrap form components and validate them with HTML5 rules and Bootstrap validation classes.

A navbar on every page links to all parts of the assignment, so each task is on its own page. The design is a clean black and white style with soft gray cards, rounded corners and black pill buttons.

## Pages and tasks

| Page | Task | What it contains |
|------|------|------------------|
| `index.html` | Home | Short intro and cards that link to every task |
| `task0.html` | Task 0. Simple Contact Form | Name (text), Email (email), Message (textarea) and a submit button. Every field has a `<label>` connected with `for` and `id` |
| `task1.html` | Task 1. Form with HTML5 Validation | `required`, `type="email"`, `type="tel"` with `pattern`, `type="number"` with `min` and `max`, `minlength`, `maxlength`, a required checkbox and a live character counter. The browser enforces the rules |
| `task2.html` | Task 2. Bootstrap Form Styling | The contact form rebuilt with `form-label`, `form-control`, `form-select` and `form-check`. Fields are arranged with the Bootstrap grid (`row`, `col-md-6`). Placeholders and `form-text` helper text are included |
| `task3.html` | Task 3. Bootstrap Validation Styles | `is-valid` and `is-invalid` classes with `valid-feedback` ("Looks good!") and `invalid-feedback` ("Email is required", etc.). A static example shows both classes. The form is checked live and on submit |
| `task4.html` | Task 4. Registration Form | First name, last name, email, password and confirm password, gender (radio buttons), hobbies (checkboxes), country (select), Submit and Reset buttons. Responsive Bootstrap grid, HTML5 validation (password minimum 8 characters with a letter and a digit) and Bootstrap feedback messages |

## Project structure

```
project/
├── index.html
├── task0.html
├── task1.html
├── task2.html
├── task3.html
├── task4.html
├── css/
│   └── style.css
├── js/
│   └── validate.js
└── README.md
```

## Technologies

- HTML5
- CSS3 (custom styles in `css/style.css`)
- Bootstrap 5.3.3 (loaded from the jsDelivr CDN)
- Vanilla JavaScript (`js/validate.js`)
- Inter font (Google Fonts)

## How to run locally

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Use the navbar to move between the tasks.

No installation or build step is needed. Bootstrap and the font are loaded from a CDN, so an internet connection is required.

## How to publish with GitHub Pages

1. Create a new repository on GitHub and upload all project files. Keep `index.html` in the root of the repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then press **Save**.
5. After about a minute the site is available at `https://USERNAME.github.io/REPOSITORY/`.

Netlify also works: drag the project folder to https://app.netlify.com/drop.

## How validation works

- **HTML5 validation.** Rules are written directly as attributes: `required`, `type`, `minlength`, `maxlength`, `pattern`, `min`, `max`. In Task 1 the browser itself blocks the form and shows its own messages.
- **Bootstrap validation.** Tasks 3 and 4 use `novalidate` on the form, so the browser bubbles are turned off. The rules still work through `checkValidity()`, and Bootstrap shows the result with `is-valid` and `is-invalid` classes and feedback messages.
- **`js/validate.js`.** One shared function, `initValidation(form, successBoxId)`:
  - checks each field with `checkValidity()` while the user types and on submit;
  - adds `is-valid` or `is-invalid` and writes the error text under the field;
  - checks that at least one gender radio button is selected;
  - checks that Confirm password matches Password with `setCustomValidity()`;
  - shows a success message when all fields are valid;
  - clears all validation styles when the Reset button is pressed.
- The forms are demos. They do not send data to a server.

## Testing

| Task | What to try | Expected result |
|------|-------------|-----------------|
| 1 | Submit an empty form | The browser shows "fill out this field" |
| 1 | Type `abc` in Email | The browser says the email format is wrong |
| 1 | Type a phone number without `+7` | The browser shows the format hint |
| 3 | Leave Email empty and submit | Red field and "Email is required" |
| 3 | Enter a valid name | Green field and "Looks good!" |
| 4 | Enter a password shorter than 8 characters | Red field with the password rule |
| 4 | Enter different passwords | "Passwords do not match" |
| 4 | Skip Gender and Country | Error messages under both fields |
| 4 | Fill everything correctly and press Register | Green success message |
| 4 | Press Reset | All fields and validation styles are cleared |

## Resources

- [Bootstrap 5.3 Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [Bootstrap 5.3 Validation](https://getbootstrap.com/docs/5.3/forms/validation/)
- [MDN: Web forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- [W3Schools: HTML form attributes](https://www.w3schools.com/html/html_form_attributes.asp)
