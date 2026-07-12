/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169086",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 9.6,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit without refuse"
    }
  ],
  "name": "Litchis, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 16.5,
    "energy_kcal": 276.0,
    "fat_g": 0.44,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 171.0,
    "protein_g": 0.83,
    "salt_g": 0.0025,
    "sat_fat_g": 0.099,
    "sodium_mg": 1.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 71.5,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169086",
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
