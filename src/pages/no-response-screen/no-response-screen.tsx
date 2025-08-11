import styles from './data-loading-error-screen.module.css';

function NoResponseErrorScreen(): JSX.Element {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.errorCode}>500</div>
          <h1 className={styles.title}>Ошибка загрузки данных</h1>
          <p className={styles.description}>
            Произошла ошибка при загрузке данных.
            <br />
            Пожалуйста, перезагрузите страницу.
          </p>
          <button onClick={handleReload} className={styles.reloadButton}>
            Перезагрузить страницу
          </button>
        </div>
      </main>
    </div>
  );
}

export default NoResponseErrorScreen;
