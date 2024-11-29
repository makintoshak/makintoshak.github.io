let answers = [];

        function nextQuestion(answer) {
            answers.push(answer);
            const currentQuestion = document.querySelector('.question.active');
            currentQuestion.classList.remove('active');
            const nextQuestion = currentQuestion.nextElementSibling;
            if (nextQuestion) {
                nextQuestion.classList.add('active');
            } else {
                showResult();
            }
        }

        function showResult() {
            document.querySelector('#result').classList.add('active');
            document.getElementById('resultText').innerText = analyzeResults();
        }

        function analyzeResults() {
            const breedSuggestions = {
                'small': 'Чихуахуа',
                'medium': 'Цвергшнауцер',
                'large': 'Немецкий дог',
                'low': '',
                'mediumActivity': 'Вельш-корги',
                'high': '',
                'long': 'Мальтийская болонка',
                'short': 'Боксёр',
                'fluffy': 'Золотистый ретривер',
                'single': '',
                'withKids': 'Лабрадор',
                'otherPets': '',
                'littleTime': 'Той-терьер',
                'moderateTime': 'Кокер-спаниель',
                'aLotOfTime': '',
                'noProtection': 'Французский бульдог',
                'someProtection': 'Американский стаффордширский терьер',
                'strongProtection': '',
                'cold': 'Сибирский хаски',
                'moderate': '',
                'warm': 'Китайская хохлатая собака',
                'noExperience': 'Шпиц',
                'willingToTrain': '',
                'seriousTraining': 'Немецкая овчарка',
                'minimum': 'Мопс',
                'mediumCare': 'Бультерьер',
                'maximum': 'Колли',
                'calm': 'Цвергшнауцер',
                'active': '',
                'protective': 'Ротвейлер'
            };

            const results = {};
            answers.forEach(answer => {
                if (breedSuggestions[answer]) {
                    results[breedSuggestions[answer]] = (results[breedSuggestions[answer]] || 0) + 1;
                }
            });

            const suggestedBreeds = Object.keys(results).sort((a, b) => results[b] - results[a]).slice(0, 3).join(', ');
            return 'Вам подходят: ' + suggestedBreeds;
        }

        function restartTest() {
            answers = [];
            document.querySelector('#result').classList.remove('active');
            document.getElementById('resultText').innerText = '';
            const firstQuestion = document.getElementById('question1');
            firstQuestion.classList.add('active');
        }
    