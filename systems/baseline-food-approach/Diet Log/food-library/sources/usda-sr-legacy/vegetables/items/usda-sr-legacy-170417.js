/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Parsnips, raw",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 18.0,
    "energy_kcal": 75.0,
    "fat_g": 0.3,
    "fibre_g": 4.9,
    "folate_ug": 67.0,
    "iron_mg": 0.59,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 375.0,
    "protein_g": 1.2,
    "salt_g": 0.025,
    "sat_fat_g": 0.05,
    "sodium_mg": 10.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 1.49,
    "vitamin_k_ug": 22.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170417",
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
