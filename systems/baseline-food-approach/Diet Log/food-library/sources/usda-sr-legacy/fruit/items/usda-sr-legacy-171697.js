/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "apricot",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "apricot",
      "kind": "unit",
      "label": "apricot"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Apricots, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 11.1,
    "energy_kcal": 48.0,
    "fat_g": 0.39,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 0.39,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 259.0,
    "protein_g": 1.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.027,
    "sodium_mg": 1.0,
    "sugar_g": 9.24,
    "vitamin_a_ug": 96.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171697",
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
