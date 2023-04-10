import styles from '@/styles/modules/DetailProps.module.scss';
const Tab = (props: any) => {
  return (
    <>
      {props.isActive && (
        <div className={styles['tech-specs__container']}>{props.children}</div>
      )}
    </>
  );
};

export default Tab;
