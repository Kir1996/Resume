import './App.css';
import isaev from "./isaev.jpg"
function App() {
  return (
    <div className="App">
      <div className="box0">
        <img  src={isaev} alt="Кирилл Исаев"/>
        <div className="box1">
        <h1>Исаев Кирилл Анатольевич</h1>
        <p>Мужчина, 27 лет, родился 22 апреля 1996</p>
        <p>+7 (961) 2430345</p>
        <p>dexem@mail.ru</p>
        <p>Проживает: Санкт-Петербург</p>
        <p>Гражданство: Россия, есть разрешение на работу: Россия</p>
        <p>Не готов к переезду, готов к командировкам</p>
        </div>
      </div>
      <p>Желаемая должность и зарплата</p>
      <hr style={{margin:'15px  0'}}/> 
      <span className="box2" >
        <h3>Frontend разработчик(React)</h3>
        <p> от 60 000 ₽</p>
      </span>
      <p>
      Специализации: <br/> — Программист, разработчик<br/>Занятость: полная занятость<br/>График работы: полный день<br/>Желательное время в пути до работы: не имеет значения
      </p>
      <p>Образование</p>
      <hr style={{margin:'15px  0'}}/>
      <h4>Бакалавр</h4>
        <p>2018</p>
        <h4>Ивановский государственный энергетический университет им.
В.И. Ленина, Иваново (Ивановская область)
ТЭФ, ТЭС</h4>
      <p>Ключевые навыки</p>
      <hr style={{margin:'15px  0'}}/>
      <p>Знание языков Русский — Родной<br/>Английский — A2</p>
      <span className="box2">
        <p>Навыки</p>
      <span className="box3"><p>JavaScript</p><p>HTML5</p><p>Git</p><p>CSS3</p><p>React</p><p>Redux</p><p>TypeScript</p><p>ReactJS</p><p>API</p><p>SCSS</p><p>Formik</p><p>Sass</p><p>Figma</p><p>npm</p><p>БЭМ</p><p>Валидная верстка</p><p>Адаптивная верстка</p></span>
      </span>
      <p>Дополнительная информация</p>
      <hr style={{margin:'15px  0'}}/>
      <span className="box2">
        <p>Обо мне</p>
        <p>Окончил курсы компании ”Garpix”по направлению React разработчик, а так же HTML "Академию"</p>
      </span>
        <p>Ссылки на одни из работ:</p>
       <a href="https://kir1996.github.io/PostList/">https://kir1996.github.io/PostList/</a>
       <br/>
       <a href="https://kir1996.github.io/isaevcat/">https://kir1996.github.io/isaevcat/</a>
       <br/>
       <a href="https://kir1996.github.io/TestWork1">https://kir1996.github.io/TestWork1</a>
        <p>Ссылка на Github:</p> 
        <a href="https://github.com/Kir1996">https://github.com/Kir1996</a>
    </div>
  );
}

export default App;
