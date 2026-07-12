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
  "id": "usda-sr-legacy-169108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit without refuse"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Passion-fruit, (granadilla), purple, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 23.4,
    "energy_kcal": 406.0,
    "fat_g": 0.7,
    "fibre_g": 10.4,
    "folate_ug": 14.0,
    "iron_mg": 1.6,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 348.0,
    "protein_g": 2.2,
    "salt_g": 0.07,
    "sat_fat_g": 0.059,
    "sodium_mg": 28.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169108",
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
