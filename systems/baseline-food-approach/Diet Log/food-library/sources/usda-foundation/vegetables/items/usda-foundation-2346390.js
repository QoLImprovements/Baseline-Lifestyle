/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2346390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Lettuce, leaf, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 42.6,
    "carbs_g": 3.26,
    "energy_kcal": 17.5,
    "fat_g": 0.106,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.402,
    "magnesium_mg": 12.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.4,
    "potassium_mg": 321.0,
    "protein_g": 0.883,
    "salt_g": 0.06225,
    "sat_fat_g": 0.0,
    "sodium_mg": 24.9,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.34,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 73.2
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346390",
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
