import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './data';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
