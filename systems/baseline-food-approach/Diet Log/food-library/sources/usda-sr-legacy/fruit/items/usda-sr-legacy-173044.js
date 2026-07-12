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
  "id": "usda-sr-legacy-173044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit, without refuse"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Guavas, common, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 14.3,
    "energy_kcal": 285.0,
    "fat_g": 0.95,
    "fibre_g": 5.4,
    "folate_ug": 49.0,
    "iron_mg": 0.26,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 417.0,
    "protein_g": 2.55,
    "salt_g": 0.005,
    "sat_fat_g": 0.272,
    "sodium_mg": 2.0,
    "sugar_g": 8.92,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 228.0,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173044",
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
