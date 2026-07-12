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
  "id": "usda-sr-legacy-170060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Turnips, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 4.35,
    "energy_kcal": 96.0,
    "fat_g": 0.24,
    "fibre_g": 2.0,
    "folate_ug": 8.0,
    "iron_mg": 0.98,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 182.0,
    "protein_g": 1.53,
    "salt_g": 0.09,
    "sat_fat_g": 0.025,
    "sodium_mg": 36.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170060",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
