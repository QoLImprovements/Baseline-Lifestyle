/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "head",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169335",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 908.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "0-5-cup-shredded",
      "kind": "unit",
      "label": "0.5 cup, shredded"
    }
  ],
  "name": "Cabbage, common (danish, domestic, and pointed types), freshly harvest, raw",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 5.37,
    "energy_kcal": 100.0,
    "fat_g": 0.18,
    "fibre_g": 2.3,
    "folate_ug": 57.0,
    "iron_mg": 0.56,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 246.0,
    "protein_g": 1.21,
    "salt_g": 0.045,
    "sat_fat_g": 0.023,
    "sodium_mg": 18.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 51.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169335",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
