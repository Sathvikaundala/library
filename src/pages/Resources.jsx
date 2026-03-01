import ResourceCard from "../components/ResourceCard";

function Resources() {
  return (
    <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", minHeight: "100vh", paddingTop: "60px" }}>
      <div className="container py-5">
        <div className="text-white mb-5">
          <h1 className="display-4 fw-bold mb-2">📚 Available Resources</h1>
          <p className="fs-5" style={{ opacity: 0.95 }}>Explore our curated collection of educational materials</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <ResourceCard
              icon="📖"
              title="DBMS Notes"
              category="Textbook"
              description="Complete database management system notes covering normalization, SQL, transactions, and more"
              downloads="1,234"
              rating="4.8"
            />
          </div>

          <div className="col-lg-4">
            <ResourceCard
              icon="🔬"
              title="Machine Learning Paper"
              category="Research Paper"
              description="Comprehensive overview of modern ML techniques including deep learning and neural networks"
              downloads="856"
              rating="4.9"
            />
          </div>

          <div className="col-lg-4">
            <ResourceCard
              icon="⚙️"
              title="Operating Systems Guide"
              category="Study Guide"
              description="In-depth guide covering processes, memory management, and CPU scheduling algorithms"
              downloads="2,103"
              rating="4.7"
            />
          </div>

          <div className="col-lg-4">
            <ResourceCard
              icon="💻"
              title="Web Development Bootcamp"
              category="Lecture Notes"
              description="Complete notes from web development course covering HTML, CSS, JavaScript, and React"
              downloads="3,456"
              rating="4.9"
            />
          </div>

          <div className="col-lg-4">
            <ResourceCard
              icon="🧮"
              title="Algorithms & Data Structures"
              category="Textbook"
              description="Advanced algorithms guide with complexity analysis and implementation examples"
              downloads="2,789"
              rating="4.8"
            />
          </div>

          <div className="col-lg-4">
            <ResourceCard
              icon="🔐"
              title="Cybersecurity Essentials"
              category="Research Paper"
              description="Overview of modern cybersecurity threats, prevention techniques, and best practices"
              downloads="1,567"
              rating="4.6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;