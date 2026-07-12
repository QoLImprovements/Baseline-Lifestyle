/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "bunch",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-746769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 581.0,
      "key": "bunch",
      "kind": "unit",
      "label": "bunch"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Lettuce, cos or romaine, raw",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 3.24,
    "energy_kcal": 17.0,
    "fat_g": 0.26,
    "fibre_g": 1.8,
    "folate_ug": 50.0,
    "iron_mg": 0.95,
    "magnesium_mg": 13.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 253.0,
    "protein_g": 1.24,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 1.19,
    "vitamin_a_ug": 436.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 102.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746769",
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
