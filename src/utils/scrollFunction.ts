const scrollToTheComponent = (id: string) => {
  const componentById = document.getElementById(id);
  if (componentById) {
    componentById.scrollIntoView({ behavior: "smooth" });
  }
};

export default scrollToTheComponent;
