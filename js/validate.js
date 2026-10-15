function initValidation(form, successBoxId) {
  const fields = Array.from(form.querySelectorAll('input.form-control, textarea.form-control, select.form-select'));
  const groups = Array.from(form.querySelectorAll('.radio-group'));
  const success = document.getElementById(successBoxId);
  const pass = form.querySelector('#password');
  const confirm = form.querySelector('#confirmPassword');

  function getMessage(el) {
    if (el.validity.valueMissing) return el.dataset.required || 'This field is required';
    if (el.validity.customError) return el.validationMessage;
    return el.dataset.invalid || el.validationMessage;
  }

  function checkField(el) {
    if (confirm && el === confirm) {
      confirm.setCustomValidity(confirm.value !== pass.value ? 'Passwords do not match' : '');
    }

    const ok = el.checkValidity();

    el.classList.toggle('is-valid', ok);
    el.classList.toggle('is-invalid', !ok);

        const feedback = el.parentElement.querySelector('.invalid-feedback');

    if (feedback) {
      feedback.textContent = ok ? '' : getMessage(el);
    }

    return ok;
  }

  function checkGroup(group) {
    const ok = !!group.querySelector('input:checked');

    group.querySelectorAll('input').forEach(i => i.classList.toggle('is-invalid', !ok));
    group.querySelector('.invalid-feedback').classList.toggle('d-block', !ok);

    return ok;
  }

  fields.forEach(el => {
    el.addEventListener('input', () => {
      checkField(el);
      if (confirm && el === pass && confirm.value) checkField(confirm);
    });

    el.addEventListener('change', () => checkField(el));
  });

  groups.forEach(g => g.addEventListener('change', () => checkGroup(g)));

  form.addEventListener('submit', e => {
    e.preventDefault();

    let allValid = true;

    fields.forEach(f => { if (!checkField(f)) allValid = false; });
    groups.forEach(g => { if (!checkGroup(g)) allValid = false; });

    success.classList.toggle('d-none', !allValid);

    if (!allValid) {
      const first = form.querySelector('.is-invalid');
      if (first) first.focus();
    }
  });

  form.addEventListener('reset', () => {
    setTimeout(() => {
      form.querySelectorAll('.is-valid, .is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
      form.querySelectorAll('.radio-group .invalid-feedback').forEach(el => el.classList.remove('d-block'));

      if (confirm) confirm.setCustomValidity('');

      success.classList.add('d-none');
    }, 0);
  });
}