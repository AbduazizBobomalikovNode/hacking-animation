# 🤝 Contributing to Hacking Animation

Thank you for your interest in contributing to Hacking Animation! This document provides guidelines for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

## 📜 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/hacking-animation.git
   cd hacking-animation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Process

### Making Changes

1. **Create a feature branch** from `main`
2. **Make your changes** following the style guidelines
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Commit your changes** with descriptive messages

### Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build the application
npm run build
```

## 📝 Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code has been performed
- [ ] Code has been commented, particularly in hard-to-understand areas
- [ ] Tests have been added/updated
- [ ] Documentation has been updated
- [ ] No new warnings or errors

### PR Guidelines

1. **Clear title** describing the change
2. **Detailed description** of what was changed and why
3. **Link to related issues** if applicable
4. **Screenshots** for UI changes
5. **Test instructions** for reviewers

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🎨 Style Guidelines

### JavaScript/TypeScript

```javascript
// Use const/let instead of var
const myVariable = 'value';

// Use arrow functions for callbacks
array.map(item => item.value);

// Use template literals
const message = `Hello ${name}`;

// Use meaningful variable names
const userEmail = getUserEmail();
```

### CSS

```css
/* Use CSS custom properties */
:root {
  --primary-color: #ff7b00;
}

/* Use consistent naming */
.component-name {
  property: value;
}

/* Use comments for complex sections */
/* Animation keyframes */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
```

### HTML

```html
<!-- Use semantic HTML -->
<main>
  <section>
    <h2>Section Title</h2>
    <p>Content</p>
  </section>
</main>

<!-- Use meaningful class names -->
<div class="animation-container">
  <div class="hacking-animation"></div>
</div>
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected vs actual behavior**
4. **Environment details** (OS, Node.js version, etc.)
5. **Screenshots** if applicable
6. **Console errors** if any

## ✨ Feature Requests

When suggesting features:

1. **Clear description** of the feature
2. **Use case** and motivation
3. **Proposed implementation** (if you have ideas)
4. **Alternatives considered**

## 📚 Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new functions
- Update API documentation if applicable
- Include examples for new features

## 🏷️ Labels

We use the following labels:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested

## 📞 Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Use GitHub Issues for bug reports and feature requests
- **Discord**: Join our Discord server (if available)

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Hacking Animation! 🚀
