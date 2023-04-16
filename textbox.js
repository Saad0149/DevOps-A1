const filter = document.querySelector('#filter');
  const projectList = document.querySelector('#project-list');

  filter.addEventListener('keyup', () => {
    const term = filter.value.trim().toLowerCase();
    Array.from(projectList.children).forEach(project => {
      const title = project.textContent.trim().toLowerCase();
      if (title.includes(term)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });