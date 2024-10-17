# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Тестовое задание для Mindbox

### Стек

- React
- Redux
- CRA
- Typescript
- CSS

#### App

За приложение отвечает компонент App, который рендерит основные компоненты

#### TodoForm | TodoFormUI

Компонент отвечает за добавление новой задачи. С помощью экшена addTodo мы добавляем в стор новую задачу
Также компонент отображает визуальный компонент TodoFormUi

#### TodosCategories | TodosCategoriesUI

Компонент отвечает за отображение визуального компонента TodoFormUi, в котором размещены три кнопки.
Кнопки позволяют фильтровать список задач по категориям: All | Active | Completed - с помощью экшена filterTodos

#### TodoList | TodoListUI

Компонент отвечает за отображение списка задач. Он получает данные из стора через селектор todosSelector.
В визуальном компоненте TodoFormUI рассчитывается кол-во страниц задач на основе длины массива и отображается по 5 задач на страницу, а так же описана логика пагинации

#### Todo | TodoUI

Компонент отвечает за отображение одной задачи. Компонент состоит из чекбокса, который позволяет менять состояние задачи (isCompleted | !isCompleted), текста задачи и кнопки удаления.
В компоненте применяются экшены toggleTodo, removeTodo.
Так же, реализована логика редактирования задачи, если она не отмечена, что выполнена - открывается модальное окно с инпутом, где можно задачу отредактировать. За это отвечает экшн editTodo.
При удалении задачи так же всплывает модальное окно с подтверждением удаления задачи

#### TodosManagement

В компоненте отображается информация о кол-ве незавершенных задач, а так же расположена кнопка 'удалить завершенные задачи', с помощью экшна resetCompletedTodos

#### todoSlice

todoSlice — это часть состояния Redux, которая управляет списком задач (todos), обрабатывая такие операции, как добавление, удаление, редактирование и фильтрация задач

initialState (начальное состояние) todoSlice имеет следующую структуру:

type TodosState = {
todos: TTodoList; // Массив всех задач
filteredTodos: TTodoList; // Массив отфильтрованных задач (например, выполненные или активные)
loading: boolean; // Флаг загрузки
error: string | null; // Сообщение об ошибке (если есть)
};

const initialState: TodosState = {
todos: tempTodos, // Список начальных задач
filteredTodos: tempTodos, // Изначально отфильтрованные задачи совпадают с полным списком задач
loading: false, // По умолчанию загрузки нет
error: null // Ошибок изначально нет
};

##### Редьюсеры

todoSlice содержит несколько редьюсеров для управления задачами:

1.	addTodo
•	Добавляет новую задачу в список и обновляет отфильтрованные задачи.


2.	removeTodo
•	Удаляет задачу по её идентификатору (ID) и обновляет отфильтрованные задачи.

3.	toggleTodo
•	Переключает статус выполнения (completed) задачи и обновляет отфильтрованные задачи.

4.	editTodo
•	Редактирует текст задачи и обновляет отфильтрованные задачи.

5.	filterTodos
•	Фильтрует задачи по их статусу выполнения (выполненные или активные). Если фильтр не указан (null), показываются все задачи.

6.	resetCompletedTodos
•	Удаляет все завершённые задачи из списка.

##### Экспортируемые экшены и селекторы

	•	Экшены — это действия, которые можно диспатчить, чтобы изменять состояние:
	•	addTodo — добавление задачи;
	•	removeTodo — удаление задачи;
	•	toggleTodo — изменение статуса выполнения задачи;
	•	editTodo — редактирование текста задачи;
	•	filterTodos — фильтрация задач по статусу;
	•	resetCompletedTodos — сброс выполненных задач.
	•	Селектор todoSelector позволяет получить список задач из глобального состояния приложения.