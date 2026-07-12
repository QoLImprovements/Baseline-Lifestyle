/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-refuse",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167760",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 558.0,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit without refuse"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup 1\" pieces"
    }
  ],
  "name": "Sapote, mamey, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 32.1,
    "energy_kcal": 124.0,
    "fat_g": 0.46,
    "fibre_g": 5.4,
    "folate_ug": 7.0,
    "iron_mg": 0.78,
    "magnesium_mg": 11.0,
    "omega3_g": 0.082,
    "phosphorus_mg": 26.0,
    "potassium_mg": 454.0,
    "protein_g": 1.45,
    "salt_g": 0.0175,
    "sat_fat_g": 0.169,
    "sodium_mg": 7.0,
    "sugar_g": 20.1,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 2.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167760",
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
