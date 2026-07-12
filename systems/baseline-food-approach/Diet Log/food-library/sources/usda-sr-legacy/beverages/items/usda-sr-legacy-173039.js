/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fruit-yields",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "fruit-yields",
      "kind": "unit",
      "label": "fruit yields"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Grapefruit juice, white, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 9.2,
    "energy_kcal": 163.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.2,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 162.0,
    "protein_g": 0.5,
    "salt_g": 0.0025,
    "sat_fat_g": 0.014,
    "sodium_mg": 1.0,
    "sugar_g": 9.1,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173039",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
