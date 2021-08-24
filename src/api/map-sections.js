export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (sections.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (sections.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (sections.__component === 'section.section-grid') {
      return mapSectionGrid(section);
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section) => {
  return section;
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};
