/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-chopped",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171726",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 7.1,
      "key": "date-pitted",
      "kind": "unit",
      "label": "date, pitted"
    }
  ],
  "name": "Dates, deglet noor",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 75.0,
    "energy_kcal": 282.0,
    "fat_g": 0.39,
    "fibre_g": 8.0,
    "folate_ug": 19.0,
    "iron_mg": 1.02,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 656.0,
    "protein_g": 2.45,
    "salt_g": 0.005,
    "sat_fat_g": 0.032,
    "sodium_mg": 2.0,
    "sugar_g": 63.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171726",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
