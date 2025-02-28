# Xinqiao Zhang - Personal Website

This repository contains the source code for my personal website, hosted on GitHub Pages at [xinqiaozhang.github.io](https://xinqiaozhang.github.io).

## Website Structure

- `index.md`: Main landing page with about me, experience, and featured projects
- `projects.md`: Detailed information about research projects
- `publications.md`: Comprehensive list of publications organized by research area
- `_config.yml`: Site configuration settings
- `assets/css/style.scss`: Custom CSS styles
- `_layouts/default.html`: Custom layout template
- `images/`: Directory containing all images used on the site
- `pdf/`: Directory containing PDF documents (CV, papers, etc.)

## How to Update the Website

### Basic Content Updates

1. **Edit the main page**: Update `index.md` to change the content on the homepage
2. **Update projects**: Edit `projects.md` to add or modify project information
3. **Update publications**: Edit `publications.md` to add new publications or update existing ones

### Adding New Pages

1. Create a new Markdown file (e.g., `newpage.md`) in the root directory
2. Add the following front matter at the top of the file:
   ```
   ---
   layout: default
   title: Your Page Title
   ---
   ```
3. Add your content below the front matter using Markdown

### Adding Images

1. Add image files to the `images/` directory
2. Reference images in your Markdown files using:
   ```markdown
   ![Alt text](images/your-image.jpg?raw=true)
   ```

### Adding PDF Documents

1. Add PDF files to the `pdf/` directory
2. Link to PDFs in your Markdown files using:
   ```markdown
   [Link text](pdf/your-document.pdf)
   ```

## Local Development

To test the website locally before pushing changes:

1. Install [Jekyll](https://jekyllrb.com/docs/installation/)
2. Run `bundle install` to install dependencies
3. Run `bundle exec jekyll serve` to start a local server
4. Visit `http://localhost:4000` in your browser

## Deployment

The website is automatically built and deployed by GitHub Pages when changes are pushed to the main branch.

## License

This project is released into the public domain. See the [LICENSE](LICENSE) file for details.
