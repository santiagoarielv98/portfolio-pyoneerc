import React from 'react';
import styles from './page.module.css';
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Frequently Asked Questions about Max Comperatore\'s career, interests, and experiences in programming and game development.',
};

const FAQ = () => {
  const t = useTranslations('FAQ');

  return (
    <div className={styles.container}>
      <ScrollToTopButton />

      <h1 className={styles.title}>{t('title')}</h1>

      <Link className={styles.goHomeLink} href="/">
        {t('goHomeLink')}
      </Link>

      <Link className={styles.goHomeLink} href="/">
        {t('goBlogLink')}
      </Link>

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section1.title')}</h2>
        <p className={styles.paragraph}>
          {t('section1.paragraph1')}
        </p>
        <p className={styles.paragraph}>
          {t('section1.paragraph2')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('section2.title')}</h2>
        <p className={styles.paragraph}>
          {t('section2.paragraph')}
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Frontend o Backend?</h2>
        <p className={styles.paragraph}>
          Me especializo en backend, aunque también puedo trabajar en frontend si es necesario. Prefiero el desarrollo
          del lado del servidor, relacionado con la programación de juegos y la gestión de bases de datos. Me gusta
          resolver problemas técnicos detrás de escena y optimizar el rendimiento. El backend me permite trabajar con
          tecnologías como bases de datos, APIs y servicios en la nube, ampliando mis habilidades. Valoro la
          colaboración con otros desarrolladores para garantizar la calidad del producto final.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Cómo te Ves en 5 Años?</h2>
        <p className={styles.paragraph}>
          En cinco años, me veo como un experto en backend y desarrollo de juegos, liderando equipos y compartiendo mi
          conocimiento como tutor. Aspiro a contribuir a tecnologías de vanguardia, optimizar procesos y desarrollar
          soluciones escalables y seguras. Me gustaría profundizar en inteligencia artificial y aprendizaje automático,
          integrando estas tecnologías en el desarrollo de juegos y aplicaciones backend. También quiero ser un mentor,
          participando en comunidades de programación y ofreciendo talleres y charlas. En lo personal, busco equilibrar
          mi vida profesional y personal, disfrutando de mis hobbies y contribuyendo a proyectos innovadores.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>¿Qué Buscas en un Nuevo Trabajo?</h2>
        <p className={styles.paragraph}>
          Busco un entorno colaborativo con personas capaces y agradables para convertir ideas en realidad y aprender de
          los errores. Me interesa trabajar en proyectos que utilicen mis habilidades y aprender de mentores
          experimentados. Valoro un lugar que ofrezca oportunidades de crecimiento personal y profesional, con una
          comunicación efectiva y apoyo mutuo. Estoy entusiasmado por asumir nuevos desafíos y responsabilidades en un
          entorno de aprendizaje continuo.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Desafíos y Soluciones</h2>
        <ul>
          <li>
            <h3>{t('section6.list.0.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section6.list.0.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section6.list.0.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section6.list.0.result')}
            </p>
            <p>
              <strong>{t('reflection')}</strong> {t('section6.list.0.reflection')}
            </p>
          </li>
          <li>
            <h3>{t('section6.list.1.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section6.list.1.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section6.list.1.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section6.list.1.result')}
            </p>
            <p>
              <strong>{t('reflection')}</strong> {t('section6.list.1.reflection')}
            </p>
          </li>
          <li>
            <h3>{t('section6.list.2.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section6.list.2.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section6.list.2.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section6.list.2.result')}
            </p>
            <p>
              <strong>{t('reflection')}</strong> {t('section6.list.2.reflection')}
            </p>
          </li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Recursos Educativos Recomendados</h2>
        <ul>
          <li><a href="https://gist.github.com/pyoneerC/423ec3e9371fae255091d703e5dcc86c" target="_blank"
                 rel="noopener noreferrer">{t('section7.list.0')}</a></li>
          <li><a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">{t('section7.list.1')}</a></li>
          <li>{t('section7.list.2')}</li>
          <li>{t('section7.list.3')}</li>
          <li>{t('section7.list.4')}</li>
          <li><a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer">{t('section7.list.5')}</a></li>
          <li><a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer">{t('section7.list.6')}</a></li>
          <li><a href="https://www.bigocheatsheet.com" target="_blank" rel="noopener noreferrer">{t('section7.list.7')}</a>
          </li>
          <li><a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer">{t('section7.list.8')}</a></li>
          <li>{t('section7.list.9')}</li>
          <li>{t('section7.list.10')}</li>
          <li>{t('section7.list.11')}</li>
          <li>{t('section7.list.12')}</li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">{t('section7.list.13')}</a></li>
          <li><a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer">{t('section7.list.14')}</a></li>
          <li><a href="https://trello.com" target="_blank" rel="noopener noreferrer">{t('section7.list.15')}</a></li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Mantenerse Actualizado</h2>
        <p className={styles.paragraph}>
          Para estar al tanto de las últimas tendencias y tecnologías, sigo blogs de tecnología, tutoriales, y
          comunidades en Discord y Reddit. Sigo canales como Midudev y Fireship, y los canales oficiales de Unity y
          Unreal para avances en gráficos. También sigo a personas relevantes en LinkedIn y asisto a conferencias como
          la GDC y Microsoft Build. Reviso repositorios en GitHub y consulto Product Hunt para novedades tecnológicas.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Hobbies y Pasatiempos</h2>
        <p className={styles.paragraph}>
          En mi tiempo libre, disfruto desarrollando proyectos y colaborando con la comunidad de desarrollo. Me gusta
          correr, ver videos de bromas en YouTube, comer y ver películas animadas. Escucho música variada, incluyendo
          EDM, salsa y rap urbano. Andar en moto y explorar lugares abandonados para disfrutar de asados en la montaña
          son pasatiempos que valoro. Descubrir nueva música es uno de mis pasatiempos favoritos.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Mentores y Colaboradores</h2>
        <p className={styles.paragraph}>
          Colin Schemale, Franco Yudica y Enzo Notario han sido fundamentales en mi carrera, brindándome consejos y
          orientación. Aspiro a ser mentor para otros, compartiendo mi experiencia y ayudando a cultivar futuros
          innovadores.
        </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2>Experiencias Clave</h2>
        <ul>
          <li>
            <h3>{t('section11.list.0.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section11.list.0.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section11.list.0.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section11.list.0.result')}
            </p>
          </li>
          <li>
            <h3>{t('section11.list.1.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section11.list.1.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section11.list.1.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section11.list.1.result')}
            </p>
          </li>
          <li>
            <h3>{t('section11.list.2.title')}</h3>
            <p>
              <strong>{t('situation')}</strong> {t('section11.list.2.situation')}
            </p>
            <p>
              <strong>{t('action')}</strong> {t('section11.list.2.action')}
            </p>
            <p>
              <strong>{t('result')}</strong> {t('section11.list.2.result')}
            </p>
          </li>
        </ul>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Innovación en Proyectos</h2>
        <p>
          <strong>{t('situation')}</strong> {t('section12.paragraph')}
        </p>
        <p>
          <strong>{t('result')}</strong> {t('section12.result')}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Adaptabilidad y Aprendizaje</h2>
        <p className={styles.paragraph}>
          <strong>Situación:</strong> Decidimos usar Unity en lugar de Unreal Engine en un proyecto de equipo.
        </p>
        <p className={styles.paragraph}>
          <strong>Acción:</strong> Acepté la decisión y aprendí más sobre Unity.
        </p>
        <p className={styles.paragraph}>
          <strong>Resultado:</strong> Contribuí entusiastamente al proyecto.
        </p>
        <p className={styles.paragraph}>
          <strong>Reflexión:</strong> Adaptarse a decisiones del grupo y aprender nuevas herramientas es beneficioso
          para el proyecto y el desarrollo personal.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Logros Destacados</h2>
        <p className={styles.paragraph}> WIP </p>
      </section>

      <br />

      <section className={styles.section}>
        <h2 className={styles.title}>Canciones Favoritas</h2>
        <ul>
          <li>{t('section15.list.0')}</li>
          <li>{t('section15.list.1')}</li>
          <li>{t('section15.list.2')}</li>
          <li>{t('section15.list.3')}</li>
          <li>{t('section15.list.4')}</li>
          <li>{t('section15.list.5')}</li>
          <li>{t('section15.list.6')}</li>
          <li>{t('section15.list.7')}</li>
        </ul>
      </section>
    </div>
  );
  };

export default FAQ;