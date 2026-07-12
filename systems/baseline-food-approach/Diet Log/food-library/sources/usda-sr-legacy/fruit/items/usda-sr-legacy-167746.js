/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-sections",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "cup-sections",
      "kind": "unit",
      "label": "cup, sections"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "fruit-2-3-8-dia",
      "kind": "unit",
      "label": "fruit (2-3/8\" dia)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "fruit-2-1-8-dia",
      "kind": "unit",
      "label": "fruit (2-1/8\" dia)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "wedge-or-slice-1-8-of-one-2-1-8-dia-lemon",
      "kind": "unit",
      "label": "wedge or slice (1/8 of one 2-1/8\" dia lemon)"
    }
  ],
  "name": "Lemons, raw, without peel",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 9.32,
    "energy_kcal": 121.0,
    "fat_g": 0.3,
    "fibre_g": 2.8,
    "folate_ug": 11.0,
    "iron_mg": 0.6,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 138.0,
    "protein_g": 1.1,
    "salt_g": 0.005,
    "sat_fat_g": 0.039,
    "sodium_mg": 2.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 53.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167746",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
