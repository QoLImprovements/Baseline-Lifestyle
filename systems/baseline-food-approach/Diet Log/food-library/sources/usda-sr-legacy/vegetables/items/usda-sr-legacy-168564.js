/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-shredded",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168564",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    }
  ],
  "name": "Radicchio, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.48,
    "energy_kcal": 96.0,
    "fat_g": 0.25,
    "fibre_g": 0.9,
    "folate_ug": 60.0,
    "iron_mg": 0.57,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 302.0,
    "protein_g": 1.43,
    "salt_g": 0.055,
    "sat_fat_g": 0.06,
    "sodium_mg": 22.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 2.26,
    "vitamin_k_ug": 255.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168564",
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
