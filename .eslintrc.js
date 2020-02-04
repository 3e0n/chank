/**
 * setup instruction eslint typescript prettier
 *@see https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
 *@see https://habr.com/ru/company/dodopizzadev/blog/473648/
 */


module.exports = {
    root: true,
    // Настройки проекта
    env: {
		es6: true,
		// Добавляем возможности ES2017
		es2017: true,
		browser: true,
		node: true
    },
    extends: [
		// Базовый набор правил eslint
		"eslint:recommended",
		// Отключаем правила из базового набора
		"plugin:@typescript-eslint/eslint-recommended",
		// Базовые правила для TypeScript
		"plugin:@typescript-eslint/recommended",
		 // Правила TS, требующие инфо о типах
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react/recommended",
		// Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
		// Make sure this is always the last configuration in the extends array.
		'plugin:prettier/recommended',
	],
	// Движок парсинга
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// Движку нужен проект TS для правил с типами
		project: "tsconfig.json",
		tsconfigRootDir: ".",
		ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
		sourceType:  'module',  // Allows for the use of imports
	},
	// Плагин с наборами правил для TypeScript
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off"
	}
}