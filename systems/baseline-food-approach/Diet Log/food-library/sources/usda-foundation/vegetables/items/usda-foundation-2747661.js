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
  "id": "usda-foundation-2747661",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, jalapeno, seeded, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.1,
    "carbs_g": 5.08,
    "energy_kcal": 24.1,
    "fat_g": 0.149,
    "fibre_g": 1.72,
    "folate_ug": 27.4,
    "iron_mg": 0.038,
    "magnesium_mg": 8.95,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.1,
    "potassium_mg": 167.0,
    "protein_g": 0.621,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 89.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747661",
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
