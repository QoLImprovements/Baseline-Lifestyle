/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    }
  ],
  "name": "Beet greens, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 5.46,
    "energy_kcal": 27.0,
    "fat_g": 0.2,
    "fibre_g": 2.9,
    "folate_ug": 14.0,
    "iron_mg": 1.9,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 909.0,
    "protein_g": 2.57,
    "salt_g": 1.1925,
    "sat_fat_g": 0.031,
    "sodium_mg": 477.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 383.0,
    "vitamin_c_mg": 24.9,
    "vitamin_e_mg": 1.81,
    "vitamin_k_ug": 484.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168508",
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
