/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "beet-2-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "beet-2-dia",
      "kind": "unit",
      "label": "beet (2\" dia)"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beets, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 9.56,
    "energy_kcal": 180.0,
    "fat_g": 0.17,
    "fibre_g": 2.8,
    "folate_ug": 109.0,
    "iron_mg": 0.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 325.0,
    "protein_g": 1.61,
    "salt_g": 0.195,
    "sat_fat_g": 0.027,
    "sodium_mg": 78.0,
    "sugar_g": 6.76,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169145",
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
