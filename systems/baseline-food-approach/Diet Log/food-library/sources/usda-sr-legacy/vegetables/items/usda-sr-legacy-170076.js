/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Dock, raw",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 3.2,
    "energy_kcal": 92.0,
    "fat_g": 0.7,
    "fibre_g": 2.9,
    "folate_ug": 13.0,
    "iron_mg": 2.4,
    "magnesium_mg": 103.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 390.0,
    "protein_g": 2.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 200.0,
    "vitamin_c_mg": 48.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170076",
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
