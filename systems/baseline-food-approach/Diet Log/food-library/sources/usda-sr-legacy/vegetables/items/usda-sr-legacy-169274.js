/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "plant",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169274",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "plant",
      "kind": "unit",
      "label": "plant"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Purslane, raw",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 3.39,
    "energy_kcal": 20.0,
    "fat_g": 0.36,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.99,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 494.0,
    "protein_g": 2.03,
    "salt_g": 0.1125,
    "sat_fat_g": 0.0,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1320.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169274",
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
