/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "spear",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-324653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.4,
      "key": "spear",
      "kind": "unit",
      "label": "spear"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Pickles, cucumber, dill or kosher dill",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 1.99,
    "energy_kcal": 50.0,
    "fat_g": 0.43,
    "fibre_g": 1.0,
    "folate_ug": 8.0,
    "iron_mg": 0.23,
    "magnesium_mg": 7.1,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 112.0,
    "protein_g": 0.48,
    "salt_g": 2.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 808.0,
    "sugar_g": 1.28,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 16.8
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "324653",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "herbs-spices-and-seasonings",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
