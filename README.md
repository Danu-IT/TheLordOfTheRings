## Команды

- запуск клиента - `npm run start`
- запуск ceрвера - `npm run start`
- запуск storybook - `npm run storybook`

### 1 уровень (необходимый минимум)

- React

  - Пишем функциональные компоненты c хуками в приоритете над классовыми. ✅
  - Есть разделение на [умные](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/General/Home/components/Filters/Filters.tsx#L9) и [глупые](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/UI/Button/Button.tsx#L14) компоненты. ✅
  - Есть рендеринг списков - [Cards](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/General/Home/Home.tsx#L104), [Favorites](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/Private/Favorite/Favorite.tsx#L18), [History](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/Private/History/History.tsx#L54). ✅
  - Реализована хотя бы одна форма. Используется специальная библиотека построения форм React Hook Form - [Login](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/Public/Login/Login.tsx#L27), [Register](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/Public/Register/Register.tsx#L17), [Reset](https://github.com/Danu-IT/thelordoftherings/blob/main/src/pages/Public/Register/Register.tsx#L17). ✅
  - Есть применение Контекст API - [Создание](https://github.com/Danu-IT/thelordoftherings/blob/main/src/context/index.ts), [Использование](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/Card/Card.tsx#L28). ✅
  - Есть применение предохранителя - [Создание](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/ErrorBoundary/ErrorBoundary.tsx#L13), [Использование](https://github.com/Danu-IT/thelordoftherings/blob/main/src/index.tsx#L20). ✅
  - Есть хотя бы один кастомный хук - [useAppContext](https://github.com/Danu-IT/thelordoftherings/blob/main/src/hooks/useAppContext.ts). ✅
  - Хотя бы несколько компонентов используют PropTypes - [Like](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/Like/Like.jsx#L17), [Filter](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/Filter/Filter.jsx#L36). ✅
  - Есть применение lazy + Suspense - [routes](https://github.com/Danu-IT/thelordoftherings/blob/main/src/routes/index.ts#L3), [router](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/Router/Router.tsx#L13). ✅

- Redux
  - Использую Modern Redux with Redux Toolkit - [store](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/index.ts). ✅
  - Используем слайсы - [auth](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/slices/auth.ts#L22), [speciesSlice](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/slices/speciesSlice.ts#L18). ✅
  - Есть хотя бы одна кастомная мидлвара - [cooperationWithFirebase](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/middleware/cooperationWithFirebase.tsx#L5C14-L5C37). ✅
  - Используется RTK Query - [ringsAPI](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/services/RingsService.ts#L7), [Использование](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/services/RingsService.ts). ✅
  - Используется Transforming Responses - [transformResponse](https://github.com/Danu-IT/thelordoftherings/blob/main/src/store/services/RingsService.ts#L24), [Функции конвертации](https://github.com/Danu-IT/thelordoftherings/blob/main/src/utils/converter.ts#L2). ✅

### 2 уровень (необязательный)

- Использование TypeScript. ✅
- Подключен storybook и созданы несколько сторисов - [Button](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/UI/Button/Button.stories.tsx), [Input](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/UI/Input/Input.stories.tsx). ✅
- Feature Flags - [server](https://github.com/Danu-IT/thelordoftherings/blob/main/server/index.js), [react context](https://github.com/Danu-IT/thelordoftherings/blob/main/src/App/App.tsx#L42), [реализация](https://github.com/Danu-IT/thelordoftherings/blob/main/src/components/Card/Card.tsx#L28). ✅
- Использование Firebase для учетных записей пользователей и их Избранного и Истории поиска - [config](https://github.com/Danu-IT/thelordoftherings/blob/main/src/firebase/index.ts), [function](https://github.com/Danu-IT/thelordoftherings/blob/main/src/firebase/change.ts). ✅
