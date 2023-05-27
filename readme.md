# Suuudokuuu
Sudoku game to help Ukraine win the war against Russia.

[Play now!](https://www.suuudokuuu.com/)

## TODO
### Features
- [ ] add mistakes purchasing through in-app purchases
    - [ ] donate to ZSU, add BE logic for this
    - [ ] add donation branding and description on main screen
- [ ] add gamification and percentage of completeness
- [ ] add game pausing? Can be exploited as a cheat to maximize scroll?
- [ ] best stats is confusing and not clear, especially time
  - [ ] add best time/score for each difficulty
  - [ ] add history screen?
  - [ ] add best run stats for each difficulty
- [ ] score row completing row/col/group

### Frontend
- [ ] add animations
    - [ ] add number flying to its stop?
    - [ ] add more fun to winner page(ZSU, Ukraine, donation CTA)
    - [ ] add more fun to looser page(ZSU, Ukraine, donation CTA)
- [ ] add successful run count and longest run count history on main screen?
- [ ] add donation CTA on main screen
- [x] add game logic:
  - [x] timer
  - [x] score and its calculation based on errors, timer, row/col/group finish
- [x] optimize rendering(why does it lag? =)

#### Web
- [ ] fix mobile version padding and field size
- [x] add pages titles
- [x] fix font issue

### Backend
- [ ] setup backend, app should still support full offline mode support
- [ ] add user creation and logic
- [ ] store user solved puzzle, add time, score, rank for same puzzle
- [ ] create leaderboards

### Overall
- [ ] fix ts error on app.json import
- [ ] add commitlint
- [ ] fix require cycles =)
- [ ] add husky
- [ ] migrate to monorepo
- [ ] setup github actions for releases and release management
- [ ] setup github actions for PRs, create web, expo previews
- [ ] add e2e tests(maestro)
- [ ] setup android build and deployment
- [ ] setup [eas submit](https://docs.expo.dev/submit/eas-json/) credentials and github action
- [x] refactor folder structure to modules(game, app-root, history)
- [x] setup eas
- [x] setup iphone deployment
- [x] add github actions
