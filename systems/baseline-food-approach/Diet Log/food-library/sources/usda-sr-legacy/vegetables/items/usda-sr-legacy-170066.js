/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "4-waterchestnuts",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "4-waterchestnuts",
      "kind": "unit",
      "label": "4 waterchestnuts"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Waterchestnuts, chinese, (matai), raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 23.9,
    "energy_kcal": 97.0,
    "fat_g": 0.1,
    "fibre_g": 3.0,
    "folate_ug": 16.0,
    "iron_mg": 0.06,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 584.0,
    "protein_g": 1.4,
    "salt_g": 0.035,
    "sat_fat_g": 0.026,
    "sodium_mg": 14.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170066",
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
