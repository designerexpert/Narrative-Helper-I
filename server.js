const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const divisionDescription = 'divisionDescription';
const SoapDescription = 'SoapDescription';
const SoapSelection = 'SoapSelection';
const innerDivDesc = 'innerDivDesc';

const ros = [
	{
		divDesc: 'REVIEW OF SYSTEMS',
		divContent: [
			{
				subDivDesc: 'CONSITUTIONAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'FEVER',
						narrative: 0,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CHILLS',
						narrative: 1,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'WEIGHT:',
						content: [
							{
								type: SoapSelection,
								text: 'LOSS',
								narrative: 2,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'GAIN',
								narrative: 3,
								positive: false,
							},
						]
					},
					{
						type: SoapSelection,
						text: 'WEAKNESS GENERAL',
						narrative: 4,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'EYES:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BLURRED VISION',
						narrative: 5,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SECRETIONS',
						narrative: 6,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'REDNESS',
						narrative: 7,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'REDNESS',
						narrative: 8,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'ITCHING',
						narrative: 9,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'GLAUCOMA',
						narrative: 10,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CATARACTS',
						narrative: 11,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'E.N.T.:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'EARACHE',
						narrative: 12,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'NASAL DISCHARGE',
						narrative: 13,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'NOSE:',
						content: [
							{
								type: SoapSelection,
								text: 'ITCHY',
								narrative: 14,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'RUNNY',
								narrative: 15,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'BLOODY',
								narrative: 16,
								positive: false,
							},
						]
					},
					{
						type: SoapSelection,
						text: 'SORE THROAT',
						narrative: 17,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'POSTNASAL DRIP',
						narrative: 18,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'HOARSENESS',
						narrative: 19,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SINUS PAIN',
						narrative: 20,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'RESPIRATORY:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'COUGH',
						narrative: 21,
						positive: false,
					},
					{
						type: SoapSelection,
						text: '(DRY PRODUCTIVE)',
						narrative: 22,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SOB',
						narrative: 23,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'WHEEZING',
						narrative: 24,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'SOB:',
						content: [
							{
								type: SoapSelection,
								text: 'WITH EFFORT',
								narrative: 25,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'LYING',
								narrative: 26,
								positive: false,
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
								narrative: 27,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'PRESSURE',
								narrative: 28,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'TIGHTNESS',
								narrative: 29,
								positive: false,
							},
						]
					},
					{
						type: SoapSelection,
						text: 'PALPITATIONS',
						narrative: 30,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'EDEMA LOWER EXTREMITIES',
						narrative: 31,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'LEG CRAMPS',
						narrative: 32,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'GASTROINTESTINAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'NAUSEA',
						narrative: 33,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'VOMITING',
						narrative: 34,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'BLOATING',
						narrative: 35,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'HEARTBURN',
						narrative: 36,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'DIARRHEA',
						narrative: 37,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'BLACK/BLOODY STOOLS',
						narrative: 38,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CONSTIPATION',
						narrative: 39,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'HEMORRHOIDS',
						narrative: 40,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'GEITOUINARY:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BURNING',
						narrative: 41,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'BLOODY',
						narrative: 42,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'DARK',
						narrative: 43,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'FOUL SMELL',
						narrative: 44,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'STONES',
						narrative: 45,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'LOSS OF LIBIDO',
						narrative: 46,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'ED',
						narrative: 47,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'DRIBBLING',
						narrative: 48,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'NOCTURIA',
						narrative: 49,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'INCONTENENCE',
						content: [
							{
								type: SoapSelection,
								text: 'YES',
								narrative: 50,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'NO',
								narrative: 51,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '',
							},
							{
								type: SoapSelection,
								text: 'STRESS',
								narrative: 52,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'FULL',
								narrative: 53,
								positive: false,
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
						narrative: 54,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'BLEEDING',
						narrative: 55,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SWOLLEN LYMPH NODES',
						narrative: 56,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'Hx OF ANEMIA',
						narrative: 57,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'STONES',
						narrative: 58,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'GASTRIC BYPASS STATUS',
						narrative: 59,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'NIGHT SWEATS',
						narrative: 60,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'ENDOCRINE:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'HOT FLASHES',
						narrative: 61,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'INTOLERANCE',
						content: [
							{
								type: SoapSelection,
								text: 'HEAT',
								narrative: 62,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'COLD',
								narrative: 63,
								positive: false,
							},
						]
					},
					{
						type: SoapSelection,
						text: 'POLYDYPSIA',
						narrative: 64,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'POLYURIA',
						narrative: 65,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'POLYPHAGIA',
						narrative: 66,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'DIABETES MELLITUS',
						narrative: 67,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'HYPOTHYROIDISM',
						narrative: 68,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'INTEGUMENTARY:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'RASH',
						narrative: 69,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'ITCHING',
						narrative: 70,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CYANOSIS',
						narrative: 71,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'DRYNESS',
						narrative: 72,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'ACNE',
						narrative: 73,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SCARS',
						narrative: 74,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'ALLERGIC/IMMUNE:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'FATIGUE',
						narrative: 75,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SNEEZING',
						narrative: 76,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SINUS',
						narrative: 77,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CONGESTION',
						narrative: 78,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'FREQUENT URI’s',
						narrative: 79,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'MUSCULOSKELETAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'BACKACHE',
						narrative: 80,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'MUSCLE ACHES',
						narrative: 81,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CRAMPS',
						narrative: 82,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'JOINT',
						content: [
							{
								type: SoapSelection,
								text: 'PAIN',
								narrative: 83,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'SWELLING',
								narrative: 84,
								positive: false,
							},
						]
					},
					{
						type: SoapSelection,
						text: 'DIFFICULTY WALKING',
						narrative: 85,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'FALLS',
						narrative: 86,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'NEUROLOGICAL:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'LOC',
						narrative: 87,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'SEIZURES',
						narrative: 88,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CVA',
						narrative: 89,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'TREMORS',
						narrative: 90,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'NUMBNESS',
						narrative: 91,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'LOCALIZED WEAKNESS',
						narrative: 92,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'UNSTEADY GAIT',
						narrative: 93,
						positive: false,
					},
				]
			},
			{
				subDivDesc: 'PSYCHIATRIC:',
				subDivContent: [
					{
						type: SoapSelection,
						text: 'DEPRESSION',
						narrative: 94,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'ANXIETY',
						narrative: 95,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'ANGRY',
						narrative: 96,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'CRYING',
						narrative: 97,
						positive: false,
					},
					{
						type: SoapSelection,
						text: 'LOSS OF INTEREST',
						narrative: 98,
						positive: false,
					},
					{
						type: innerDivDesc,
						text: 'LOSS OF MEMORY',
						content: [
							{
								type: SoapSelection,
								text: 'RECENT',
								narrative: 99,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'REMOTE',
								narrative: 100,
								positive: false,
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
								narrative: 101,
								positive: false,
							},
							{
								type: SoapDescription,
								text: '/',
							},
							{
								type: SoapSelection,
								text: 'PLANS',
								narrative: 102,
								positive: false,
							},
						]
					},
				]
			},
		]
	},
];

const narrativeData = [
	{
		id: 0,
		positive: 'Patient currently has fever, ',
		negative: 'Patient denies fever, ',
	},
	{
		id: 1,
		positive: 'has chills. ',
		negative: 'denies chills. ',
	},
	{
		id: 2,
		positive: 'Has lost weight. ',
		negative: 'Weight has not changed. ',
	},
	{
		id: 3,
		positive: 'Has gained weight. ',
		negative: '',
	},
	{
		id: 4,
		positive: 'Patient complains of general weakness. ',
		negative: 'Patient denies any feelings of weakness in general. ',
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