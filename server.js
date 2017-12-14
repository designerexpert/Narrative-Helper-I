const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const narrativeData = [
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

const divisionDescription = 'divisionDescription';
const SoapDescription = 'SoapDescription';
const SoapSelection = 'SoapSelection';
const innerDivDesc = 'innerDivDesc';

const ros = [
	{
		divDesc: 'ROS',
		divContent: [
			{
				subDivDesc: 'CONSITUTIONAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'FEVER',
					},
					{
						type: SoapSelection,
						text: 'CHILLS',
					},
					{
						type: innerDivDesc,
						text: 'WEIGHT:',
						content: [
							{
								type: SoapSelection,
								text: 'LOSS',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'GAIN',
							},
						]
					},
					{
						type: SoapSelection,
						text: 'WEAKNESS GENERAL',
					},
				]
			},
			{
				subDivDesc: 'EYES:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BLURRED VISION',
					},
					{
						type: SoapSelection,
						text: 'SECRETIONS',
					},
					{
						type: SoapSelection,
						text: 'REDNESS',
					},
					{
						type: SoapSelection,
						text: 'REDNESS',
					},
					{
						type: SoapSelection,
						text: 'ITCHING',
					},
					{
						type: SoapSelection,
						text: 'GLAUCOMA',
					},
					{
						type: SoapSelection,
						text: 'CATARACTS',
					},
				]
			},
			{
				subDivDesc: 'E.N.T.:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'EARACHE',
					},
					{
						type: SoapSelection,
						text: 'NASAL DISCHARGE',
					},
					{
						type: innerDivDesc,
						text: 'NOSE:',
						content: [
							{
								type: SoapSelection,
								text: 'ITCHY',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'RUNNY',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'BLOODY',
							},
						]
					},
					{
						type: SoapSelection,
						text: 'SORE THROAT',
					},
					{
						type: SoapSelection,
						text: 'POSTNASAL DRIP',
					},
					{
						type: SoapSelection,
						text: 'HOARSENESS',
					},
					{
						type: SoapSelection,
						text: 'SINUS PAIN',
					},
				]
			},
			{
				subDivDesc: 'RESPIRATORY:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'COUGH',
					},
					{
						type: SoapSelection,
						text: '(DRY PRODUCTIVE)',
					},
					{
						type: SoapSelection,
						text: 'SOB',
					},
					{
						type: SoapSelection,
						text: 'WHEEZING',
					},
					{
						type: innerDivDesc,
						text: 'SOB:',
						content: [
							{
								type: SoapSelection,
								text: 'WITH EFFORT',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'LYING',
							},
						]
					},
				]
			},
			{
				subDivDesc: 'CARDIOVASCULAR:',
				subDivContent: [
					{
						type: innerDivDesc,
						text: 'CHEST:',
						content: [
							{
								type: SoapSelection,
								text: 'PAIN',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'PRESSURE',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'TIGHTNESS',
							},
						]
					},
					{
						type: SoapSelection,
						text: 'PALPITATIONS',
					},
					{
						type: SoapSelection,
						text: 'EDEMA LOWER EXTREMITIES',
					},
					{
						type: SoapSelection,
						text: 'LEG CRAMPS',
					},
				]
			},
			{
				subDivDesc: 'GASTROINTESTINAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'NAUSEA',
					},
					{
						type: SoapSelection,
						text: 'VOMITING',
					},
					{
						type: SoapSelection,
						text: 'BLOATING',
					},
					{
						type: SoapSelection,
						text: 'HEARTBURN',
					},
					{
						type: SoapSelection,
						text: 'DIARRHEA',
					},
					{
						type: SoapSelection,
						text: 'BLACK/BLOODY STOOLS',
					},
					{
						type: SoapSelection,
						text: 'CONSTIPATION',
					},
					{
						type: SoapSelection,
						text: 'HEMORRHOIDS',
					},
				]
			},
			{
				subDivDesc: 'GEITOUINARY:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BURNING',
					},
					{
						type: SoapSelection,
						text: 'BLOODY',
					},
					{
						type: SoapSelection,
						text: 'DARK',
					},
					{
						type: SoapSelection,
						text: 'FOUL SMELL',
					},
					{
						type: SoapSelection,
						text: 'STONES',
					},
					{
						type: SoapSelection,
						text: 'LOSS OF LIBIDO',
					},
					{
						type: SoapSelection,
						text: 'ED',
					},
					{
						type: SoapSelection,
						text: 'DRIBBLING',
					},
					{
						type: SoapSelection,
						text: 'NOCTURIA',
					},
					{
						type: innerDivDesc,
						text: 'INCONTENENCE',
						content: [
							{
								type: SoapSelection,
								text: 'YES',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'NO',
							},
							{
								type: SoapDescription,
								text: '',
							},
							{
								type: SoapSelection,
								text: 'STRESS',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'FULL',
							},
						]
					},
				]
			},
			{
				subDivDesc: 'HEMATOL/LYMPH:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BRUISING',
					},
					{
						type: SoapSelection,
						text: 'BLEEDING',
					},
					{
						type: SoapSelection,
						text: 'SWOLLEN LYMPH NODES',
					},
					{
						type: SoapSelection,
						text: 'Hx OF ANEMIA',
					},
					{
						type: SoapSelection,
						text: 'STONES',
					},
					{
						type: SoapSelection,
						text: 'GASTRIC BYPASS STATUS',
					},
					{
						type: SoapSelection,
						text: 'NIGHT SWEATS',
					},
				]
			},
			{
				subDivDesc: 'ENDOCRINE:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'HOT FLASHES',
					},
					{
						type: innerDivDesc,
						text: 'INTOLERANCE',
						content: [
							{
								type: SoapSelection,
								text: 'HEAT',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'COLD',
							},
						]
					},
					{
						type: SoapSelection,
						text: 'POLYDYPSIA',
					},
					{
						type: SoapSelection,
						text: 'POLYURIA',
					},
					{
						type: SoapSelection,
						text: 'POLYPHAGIA',
					},
					{
						type: SoapSelection,
						text: 'DIABETES MELLITUS',
					},
					{
						type: SoapSelection,
						text: 'HYPOTHYROIDISM',
					},
				]
			},
			{
				subDivDesc: 'INTEGUMENTARY:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'RASH',
					},
					{
						type: SoapSelection,
						text: 'ITCHING',
					},
					{
						type: SoapSelection,
						text: 'CYANOSIS',
					},
					{
						type: SoapSelection,
						text: 'DRYNESS',
					},
					{
						type: SoapSelection,
						text: 'ACNE',
					},
					{
						type: SoapSelection,
						text: 'SCARS',
					},
				]
			},
			{
				subDivDesc: 'ALLERGIC/IMMUNE:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'FATIGUE',
					},
					{
						type: SoapSelection,
						text: 'SNEEZING',
					},
					{
						type: SoapSelection,
						text: 'SINUS',
					},
					{
						type: SoapSelection,
						text: 'CONGESTION',
					},
					{
						type: SoapSelection,
						text: 'FREQUENT URI’s',
					},
				]
			},
			{
				subDivDesc: 'MUSCULOSKELETAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BACKACHE',
					},
					{
						type: SoapSelection,
						text: 'MUSCLE ACHES',
					},
					{
						type: SoapSelection,
						text: 'CRAMPS',
					},
					{
						type: innerDivDesc,
						text: 'JOINT',
						content: [
							{
								type: SoapSelection,
								text: 'PAIN',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'SWELLING',
							},
						]
					},
					{
						type: SoapSelection,
						text: 'DIFFICULTY WALKING',
					},
					{
						type: SoapSelection,
						text: 'FALLS',
					},
				]
			},
			{
				subDivDesc: 'NEUROLOGICAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'LOC',
					},
					{
						type: SoapSelection,
						text: 'SEIZURES',
					},
					{
						type: SoapSelection,
						text: 'CVA',
					},
					{
						type: SoapSelection,
						text: 'TREMORS',
					},
					{
						type: SoapSelection,
						text: 'NUMBNESS',
					},
					{
						type: SoapSelection,
						text: 'LOCALIZED WEAKNESS',
					},
					{
						type: SoapSelection,
						text: 'UNSTEADY GAIT',
					},
				]
			},
			{
				subDivDesc: 'PSYCHIATRIC:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'DEPRESSION',
					},
					{
						type: SoapSelection,
						text: 'ANXIETY',
					},
					{
						type: SoapSelection,
						text: 'ANGRY',
					},
					{
						type: SoapSelection,
						text: 'CRYING',
					},
					{
						type: SoapSelection,
						text: 'LOSS OF INTEREST',
					},
					{
						type: innerDivDesc,
						text: 'LOSS OF MEMORY',
						content: [
							{
								type: SoapSelection,
								text: 'RECENT',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'REMOTE',
							},
						]
					},
					{
						type: innerDivDesc,
						text: 'SUICIDAL',
						content: [
							{
								type: SoapSelection,
								text: 'THOUGHTS',
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'PLANS',
							},
						]
					},
				]
			},
		]
	},

];

app.use(bodyParser.json());

app.use(cors());

app.get('/narrativeData', (req, res) => {
	res.send(narrativeData);
});

app.get('/ros', (req, res) => {
	res.send(ros);
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