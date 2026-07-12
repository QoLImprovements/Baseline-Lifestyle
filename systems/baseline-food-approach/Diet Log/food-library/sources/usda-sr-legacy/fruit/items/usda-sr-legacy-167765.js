/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "nlea-serving",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "10-watermelon-balls",
      "kind": "unit",
      "label": "10 watermelon balls"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "cup-balls",
      "kind": "unit",
      "label": "cup, balls"
    },
    {
      "gramsPerUnit": 286.0,
      "key": "wedge-approx-1-16-of-melon",
      "kind": "unit",
      "label": "wedge (approx 1/16 of melon)"
    },
    {
      "gramsPerUnit": 4518.0,
      "key": "melon-15-long-x-7-1-2-dia",
      "kind": "unit",
      "label": "melon (15\" long x 7-1/2\" dia)"
    }
  ],
  "name": "Watermelon, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 7.55,
    "energy_kcal": 30.0,
    "fat_g": 0.15,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.24,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 112.0,
    "protein_g": 0.61,
    "salt_g": 0.0025,
    "sat_fat_g": 0.016,
    "sodium_mg": 1.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167765",
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
