/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-sliced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168434",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup sliced"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup whole"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "piece-whole",
      "kind": "unit",
      "label": "piece whole"
    }
  ],
  "name": "Mushrooms, brown, italian, or crimini, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 4.3,
    "energy_kcal": 94.0,
    "fat_g": 0.1,
    "fibre_g": 0.6,
    "folate_ug": 25.0,
    "iron_mg": 0.4,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 448.0,
    "protein_g": 2.5,
    "salt_g": 0.015,
    "sat_fat_g": 0.014,
    "sodium_mg": 6.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168434",
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
