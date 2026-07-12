/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-1-pieces",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup 1\" pieces"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Jackfruit, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 23.2,
    "energy_kcal": 397.0,
    "fat_g": 0.64,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 0.23,
    "magnesium_mg": 29.0,
    "omega3_g": 0.079,
    "phosphorus_mg": 21.0,
    "potassium_mg": 448.0,
    "protein_g": 1.72,
    "salt_g": 0.005,
    "sat_fat_g": 0.195,
    "sodium_mg": 2.0,
    "sugar_g": 19.1,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174687",
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
