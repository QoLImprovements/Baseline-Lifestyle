/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2747665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Radishes, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.5,
    "carbs_g": 4.06,
    "energy_kcal": 19.6,
    "fat_g": 0.083,
    "fibre_g": 1.31,
    "folate_ug": 63.2,
    "iron_mg": 0.0,
    "magnesium_mg": 8.94,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.9,
    "potassium_mg": 198.0,
    "protein_g": 0.656,
    "salt_g": 0.128,
    "sat_fat_g": 0.0,
    "sodium_mg": 51.2,
    "sugar_g": 2.64,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747665",
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
