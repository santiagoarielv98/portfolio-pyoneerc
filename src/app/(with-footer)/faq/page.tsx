import React from 'react';
import styles from './page.module.css';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
import Link from 'next/link';
import TextDecorator from '~/components/TextDecorator/TextDecorator';

export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Preguntas personales para reflexionar, y practicar para entrevistas de trabajo.',
};

const FAQ = () => {
  return (
    <>
      <div className={styles.container}>
        <ScrollToTopButton />

        <h1 className={styles.title}>FAQ - Preguntas Frecuentes</h1>

        <Link className={styles.goHomeLink} href="/">
          ← Volver a la página principal
        </Link>

        <Link className={styles.goHomeLink} href="/blog">
          ← Ir al Blog
        </Link>

        <section className={styles.section}>
          <h2 className={styles.title}>Recorrido en Programación</h2>
          <p className={styles.paragraph}>
            Mi camino en la programación comenzó en 2021, impulsado por mi interés por los videojuegos. Empecé con
            cursos
            básicos y bootcamps de desarollo web, y consolidé mi entusiasmo al colaborar en la aplicación de Android
            "War Report for
            Clash of Clans". Esta experiencia reforzó mi decisión de seguir una carrera en programación.
          </p>
          <p className={styles.paragraph}>
            Actualmente, estoy cursando el segundo semestre de la carrera de Desarrollo de Juegos, con un enfoque
            particular en gráficos por computadora y backend. Mi objetivo es colaborar con personas que compartan
            intereses similares, inspirar a otros y contribuir de manera positiva al mundo a través de la tecnología.
            Tengo 19 años, pero ya estoy dedicado al aprendizaje continuo y en busca de oportunidades para mejorar y
            colaborar en proyectos significativos.
          </p>
        </section>

        <br />

        <section className={styles.section}>
          <h2 className={styles.title}>Motivaciones para Estudiar Programación</h2>
          <p className={styles.paragraph}>
            Siempre me ha fascinado transformar ideas abstractas en soluciones prácticas mediante la programación, un
            campo donde la técnica se fusiona con la creatividad.
            <br/><br/>
              Mi temprana fascinación por los juegos y su desarrollo me ha llevado a dedicarme a la creación de
              software, donde encuentro una profunda satisfacción al desarrollar soluciones tecnológicas que satisfacen
              necesidades concretas.

          </p>
          <p className={styles.paragraph}>
            La constante evolución de la tecnología ofrece oportunidades únicas para contribuir a proyectos innovadores,
            y valoro profundamente el carácter colaborativo de la comunidad de desarrolladores,
            que no solo enriquece mi aprendizaje continuo sino que también fortalece conexiones con colegas generosos y solidarios.
          </p>

        </section>

        <br />

        <section className={styles.section}>
          <h2 className={styles.title}>¿Frontend o Backend?</h2>
          <p className={styles.paragraph}>
            Me especializo en el desarrollo backend, aunque también tengo la capacidad de trabajar en frontend cuando es
            necesario.
          </p>
          <p className={styles.paragraph}>
            Disfruto particularmente del desarrollo del lado del servidor, donde enfrento problemas complejos con un
            enfoque en la eficiencia y la seguridad. La gestión de bases de datos, el diseño y mantenimiento de APIs, y
            la mejora continua del rendimiento son aspectos que encuentro cruciales, ya que contribuyen a la creación
            de aplicaciones robustas y escalables.
          </p>
        </section>

        <br />

        <section className={styles.section}>
          <h2 className={styles.title}>¿Cómo te Ves en 5 Años?</h2>
          <p className={styles.paragraph}>
            En cinco años, me visualizo como un experto en backend y desarrollo de juegos, liderando equipos de alto
            rendimiento y compartiendo mi conocimiento como mentor. Aspiro a contribuir al avance de tecnologías de
            vanguardia, optimizar procesos complejos y desarrollar soluciones escalables y seguras.
          </p>
          <p className={styles.paragraph}>
            En lo personal, busco mantener un equilibrio saludable entre mi vida profesional y personal, disfrutando de
            mis pasatiempos y participando en proyectos innovadores que generen un impacto positivo en la sociedad.
          </p>
        </section>

        <br />

        <section className={styles.section}>
          <h2 className={styles.title}>¿Qué Buscas en un Nuevo Trabajo?</h2>
          <p className={styles.paragraph}>
            Busco un entorno colaborativo donde pueda trabajar junto a profesionales competentes y comprometidos.
          </p>
          <p className={styles.paragraph}>
            Me interesa participar en proyectos que aprovechen al máximo mis habilidades y conocimientos. Valoro
            especialmente los lugares que promuevan el crecimiento personal y profesional, respaldados por una
            comunicación efectiva y un sólido apoyo mutuo.
          </p>
          <p className={styles.paragraph}>
            Estoy entusiasmado por asumir nuevos desafíos y responsabilidades en un entorno que favorezca el aprendizaje
            continuo y la evolución profesional.
          </p>
        </section>

        <br />

        <section className={styles.section}>
          <h2 className={styles.title}>¿Qué Aprendiste Recientemente?</h2>
          <p className={styles.paragraph}>
            Recientemente, he estado explorando la creación de páginas web con Next.js y React, y he profundizado en
            el desarrollo de APIs RESTful con Node.js y Express.
          </p>
          <p className={styles.paragraph}>
            Además, he estado practicando la resolución de problemas con algoritmos y estructuras de datos en LeetCode,
            y he
            mejorado mi habilidad para trabajar en equipo y comunicarme de manera efectiva.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Recursos Educativos Recomendados</h2>
          <ul>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "18px" }}
              >
                <a href="https://gist.github.com/pyoneerC/423ec3e9371fae255091d703e5dcc86c" target="_blank"
                   rel="noopener noreferrer">
                  Recursos de gráficos por computadora
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "18px" }}
              >
                <a href="https://www.bigocheatsheet.com" target="_blank" rel="noopener noreferrer">
                  Hoja de Referencia de Notación Big O
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  Repositorios de Código Abierto en GitHub
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "18px" }}
              >
                <a href={"https://gist.github.com/pyoneerC/a9f9132ce2a57db5331a8cd95ca45b8e"} target="_blank"
                   rel="noopener noreferrer">
                  Comunidades de Discord
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                Wikipedia y Libros
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "18px" }}
              >
                <a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">
                  Fullstack Open
                </a>
              </TextDecorator>
            </li>
            <li><TextDecorator
              color="skyblue"
              isUnderlined={true} style={{ fontSize: "16px" }}
            >
              <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer">Microsoft Learn</a>
            </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                Khan Academy
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "18px" }}
              >
                <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">
                  Roadmap.sh
                </a>
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "18px" }}
              >
                <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer">
                  Learn CPP
                </a>
              </TextDecorator>
            </li>

            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "16px" }}
              >
                <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">
                  Perplexity
                </a>
              </TextDecorator>
            </li>

            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={false}
                style={{ fontSize: "16px" }}
              >
                draw.io
              </TextDecorator>
            </li>
            <li>
              <TextDecorator
                color="skyblue"
                isUnderlined={true}
                style={{ fontSize: "16px" }}
              >
                <a href="https://trello.com" target="_blank" rel="noopener noreferrer">
                  Trello
                </a>
              </TextDecorator>
            </li>
          </ul>
        </section>

        <br /><br />
        <section className={styles.section}>
          <h2 className={styles.title}>Mantenerse Actualizado</h2>
          <p className={styles.paragraph}>
            Para estar al tanto de las últimas tendencias y tecnologías sigo canales como
            <TextDecorator color="skyblue" isUnderlined={true}>
              <a href="https://m.youtube.com/@midulive" target="_blank" rel="noopener noreferrer">Midudev</a>
          </TextDecorator>,
          <TextDecorator color="skyblue" isUnderlined={true}>
            <a href="https://m.youtube.com/@Fireship" target="_blank" rel="noopener noreferrer">Fireship</a>
          </TextDecorator>,
          <TextDecorator color="skyblue" isUnderlined={true}>
            <a href="https://m.youtube.com/@unity" target="_blank" rel="noopener noreferrer">Unity</a>
          </TextDecorator> y
          <TextDecorator color="skyblue" isUnderlined={true}>
            <a href="https://m.youtube.com/@unrealengine" target="_blank" rel="noopener noreferrer">Unreal Engine</a>
          </TextDecorator> para avances en gráficos por computadora y desarrollo de juegos.
        </p>
        <p className={styles.paragraph}>
          A la vez reviso repositorios tendencia en GitHub y consulto Product Hunt para novedades tecnológicas.
        </p>
        <p className={styles.paragraph}>
          Finalmente, le doy una mirada a <TextDecorator color="skyblue"
                                                         isUnderlined={false}>Discord</TextDecorator> y <TextDecorator
          color="skyblue" isUnderlined={false}>Reddit</TextDecorator> para ver de que se habla en la comunidad de
          desarrollo.
        </p>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.title}>Hobbies y Pasatiempos</h2>
        <p className={styles.paragraph}>
          En mi tiempo libre, me dedico a desarrollar proyectos y colaborar activamente con la comunidad de desarrollo.
          Disfruto correr, caminar, ver videos de análisis de videojuegos, actualidad, y películas animadas.
        </p>
        <p className={styles.paragraph}>
          Además, me apasiona jugar a juegos de creadores independientes en Steam. Valoro la experiencia de andar en
          moto, explorar lugares abandonados para disfrutar de asados en la montaña y descubrir nueva música.
          A veces, utilizo FL Studio para componer música.
        </p>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.title}>Preguntas Conductuales</h2>
        <ul className={styles.paragraph}>
          <li><strong>Lo más innovador que ha hecho y por qué lo considera innovador?</strong></li>
          <p>
            Definitivamente, la creación de la aplicación <TextDecorator color="skyblue" isUnderlined={true}>
            <a href="https://maxcomperatore.store" target="_blank" rel="noopener noreferrer">Mercado Libre Price
              Chart</a>

          </TextDecorator> es uno de los proyectos más innovadores que he realizado.
            <br /><br />
            Esta solución aborda una problemática recurrente entre los usuarios de Mercado Libre en Argentina:
            la incertidumbre sobre el valor real de los productos en un contexto económico volátil.
          </p>
          <br />
          <li><strong>Un momento en el que no sabías qué hacer o cómo resolver un problema difícil. ¿Cómo lo
            resolviste?</strong></li>
          <p>
            Durante el desarrollo de este portafolio, enfrenté el desafío de traducir todo el contenido manualmente a inglés.
            <br /><br />
            Gracias a la orientación de Santiago Ariel, aprendí a implementar las traducciones utilizando Next.js y React-i18n.
          </p>
          <br />
          <li><strong>Un momento en el que tuviste que aprender algo nuevo rápidamente?</strong></li>
          <p>
            Quería crear una API para obtener el precio actualizado de dólares en Argentina, utilizando web scrapers y
            con el objetivo de aprender. Al principio, no sabía cómo hacerlo, pero con Python, FASTAPI y dedicando
            tiempo a leer la documentación, logré desarrollarla con éxito.
          </p>
          <br />
          <p>
            Esta API, llamada <TextDecorator color="skyblue" isUnderlined={true}>
            <a href="https://github.com/pyoneerC/monedas-api" target="_blank" rel="noopener noreferrer">Monedas-API</a>

          </TextDecorator>
            , logra en solo 400 líneas de Python lo que otros proyectos realizan en miles.
          </p>
          <br />
          <p>
            Actualmente, es consumida por mi otro proyecto, <TextDecorator color="skyblue" isUnderlined={true}>
            <a href="https://maxcomperatore.store" target="_blank" rel="noopener noreferrer">Mercado Libre Price
              Chart</a>

          </TextDecorator>.
          </p>
          <br />
          <li><strong>Proyectos que te gustaría hacer en el futuro?</strong></li>
          <blockquote>
            <ul>
              <li>Una red neuronal compleja para hacer simulaciones en motores gráficos.</li>
              <li>Una APIs del precio del combustible y relacionadas a Argentina.</li>
              <li>Una página web en formato de librería virtual, donde los usuarios puedan compartir libros,
                portfolios, y más.
              </li>
              <li>Un juego de autos a control remoto en Unreal Engine.</li>
              <li>Un motor de juegos propio, en DX12.</li>
              <li>Un bot de Discord versátil y complejo.</li>
              <li>Contribuir a proyectos de código abierto.</li>
            </ul>
          </blockquote>
          <br />
          <li><strong>Una ocasión en la que apoyó o capacitó a otra persona de su equipo para mejorar su
            rendimiento</strong></li>
          <p>
            Durante una game jam, un compañero no sabía muy bien como hacer cierta funcionalidad con el scripting de
            Unreal Engine.
          </p>
          <br />
          <p>
            Le enseñé varias funcionalidades clave, recomendé recursos útiles y juntos revisamos su código. Al final,
            logramos terminar el proyecto a tiempo y con éxito.
          </p>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>Mentores y Colaboradores</h2>
        <p className={styles.paragraph}>
          Colin Schmale, Franco Yudica y Enzo Notario han sido claves en mi carrera, brindándome consejos,
          orientación y apoyo constante.
        </p>
        <p className={styles.paragraph}>
          Quiero agradecer a mis compañeros de equipo en proyectos de la Universidad, quienes me han enseñado y apoyado
          en todo momento.
        </p>
        <p className={styles.paragraph}>
          Finalmente, agradezco a los usuarios de varios servidores de Discord de programación en español, siempre
          dispuestos a ayudar, apoyar y dar su opinión.
        </p>
        <p className={styles.paragraph}>
          Aspiro a seguir el ejemplo de estos individuos y a ayudar a otros de la misma manera en que ellos me ayudaron
          a mí.
        </p>
      </section>
      <br />
      <section className={styles.section}>
        <h2 className={styles.title}>Canciones Favoritas</h2>
        <ul>
          <li>Runaway (U & I) - Galantis</li>
          <li>Good 4 Me - Vindata</li>
          <li>Cutting Shapes - Don Diablo</li>
          <li>Play - Tokyo Machine</li>
          <li>The Nights - Avicii</li>
          <li>She Wants Me Dead - CAZZETTE</li>
          <li>Sillhouette (Feed Me Remix)</li>
          <li>Overkill - RIOT</li>
        </ul>
      </section>
      <br /><img
      src="https://cdn2.unrealengine.com/hlod-water-support-in-unreal-engine-5-1-1920x1080-e402b5c30a87.jpg?resize=1&w=1920"
      alt="Max Comperatore" /><br /><p className={styles.paragraph} style={{ textAlign: "center" }}>
      Gracias por leer! Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
    </p>
    </div>
  </>
  );
};

export default FAQ;