const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const narrativeData = [
	{
		keyword: 'ROS:',
		type: 'template',
		texts: [
			{
				rank: 0,
				text: `(HIGHLIGHT POSITIVE ONLY)
CONSTITUTIONAL: FEVER, CHILLS, WEIGHT LOSS/GAIN, WEAKNESS GENERAL

EYES: BLURRED VISION, SECRETIONS, REDNESS, ITCHING, GLAUCOMA, CATARACTS

E.N.T.: EARACHE, NASAL DISCHARGE, NOSE ITCHY/RUNNY/BLOODY, SORE THROAT, POSTNASAL DRIP, HOARSENESS, SINUS PAIN

RESPIRATORY: COUGH (DRY PRODUCTIVE), SOB, WHEEZING, SOB: WITH EFFORT/ LYING

CARDIOVASCULAR: CHEST PAIN/ PRESSURE/ TIGHTNESS, PALPITATIONS, EDEMA LOWER EXTREMITIES, LEG CRAMPS

GASTROINTESTINAL: NAUSEA, VOMITING, BLOATING, HEARTBURN, DIARRHEA, BLACK/BLOODY STOOLS, CONSTIPATION, HEMORRHOIDS  

GEITOUINARY: BURNING, BLOODY, DARK, FOUL SMELL, STONES, LOSS OF LIBIDO, ED, DRIBBLING, NOCTURIA, INCONTENENCE STRESS/FULL

HEMATOL/LYMPH: BRUISING, BLEEDING, SWOLLEN LYMPH NODES, Hx of ANEMIA/Gastric Bypass Status, NIGHT SWEATS

ENDOCRINE: HOT FLASHES, COLD/HEAT INTOLERANCE, POLYDYPSIA, POLYURIA, POLYPHAGIA, DIABETES MELLITUS, HYPOTHYROIDISM

INTEGUMENTARY: RASH, ITCHING, CYANOSIS, DRYNESS, ACNE, SCARS

ALLERGIC/IMMUNE: FATIGUE, SNEEZING, SINUS CONGESTION, FREQUENT URI’s

MUSCULOSKELETAL: BACKACHE, MUSCLE ACHES, CRAMPS, JOINT PAIN/SWELLING, DIFFICULTY WALKING, FALLS

NEUROLOGICAL: LOC, SEIZURES, CVA, TREMORS, NUMBNESS, LOCALIZED WEAKNESS, UNSTEADY GAIT

PSYCHIATRIC: DEPRESSION, ANXIETY, ANGRY, CRYING, LOSS OF INTEREST, LOSS OF MEMORY: RECENT/REMOTE, SUICIDAL THOUGHTS/PLANS`
			}
		]
	},
	{
		keyword: 'fluids',
		type: 'keyword',
		texts: [
			{
				rank: 0,
				text: `Take oral re-hydration fluids to prevent dehydration.`
			},
			{
				rank: 1,
				text: `Perscribed IV fluids to prevent dehydration.`
			}
		]
	}
];

app.use(bodyParser.json());

app.use(cors());

app.get('/narrativeData', (req, res) => {
	res.send(narrativeData);
});

app.post('/new-keyword', (req, res) => {
	narrativeData.push(req.body);
	res.send(narrativeData);
});

app.put('/update-keyword', (req, res) => {
	const index = req.body.index;
	narrativeData[index] = req.body.update;
	res.send(narrativeData);
});

app.delete('/delete-keyword', (req, res) => {
	const index = req.body.index;
	narrativeData.splice(index, 1);
	res.send(narrativeData);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});