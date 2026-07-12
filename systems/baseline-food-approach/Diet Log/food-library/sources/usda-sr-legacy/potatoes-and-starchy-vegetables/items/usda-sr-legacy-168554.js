/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, prepared from granules, without milk, whole milk and margarine",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 14.4,
    "energy_kcal": 452.0,
    "fat_g": 4.93,
    "fibre_g": 2.2,
    "folate_ug": 7.0,
    "iron_mg": 0.19,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 145.0,
    "protein_g": 2.05,
    "salt_g": 0.6575,
    "sat_fat_g": 1.28,
    "sodium_mg": 263.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168554",
  "state": "Mashed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "mashed",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
