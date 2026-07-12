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
  "id": "usda-sr-legacy-171711",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "50-berries",
      "kind": "unit",
      "label": "50 berries"
    }
  ],
  "name": "Blueberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 14.5,
    "energy_kcal": 240.0,
    "fat_g": 0.33,
    "fibre_g": 2.4,
    "folate_ug": 6.0,
    "iron_mg": 0.28,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 77.0,
    "protein_g": 0.74,
    "salt_g": 0.0025,
    "sat_fat_g": 0.028,
    "sodium_mg": 1.0,
    "sugar_g": 9.96,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171711",
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
