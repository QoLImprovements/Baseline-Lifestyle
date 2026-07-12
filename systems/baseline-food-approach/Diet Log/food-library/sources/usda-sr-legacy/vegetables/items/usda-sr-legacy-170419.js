/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170419",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 14.4,
    "energy_kcal": 339.0,
    "fat_g": 0.4,
    "fibre_g": 5.7,
    "folate_ug": 65.0,
    "iron_mg": 1.47,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 244.0,
    "protein_g": 5.42,
    "salt_g": 0.0125,
    "sat_fat_g": 0.071,
    "sodium_mg": 5.0,
    "sugar_g": 5.67,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 24.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170419",
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
