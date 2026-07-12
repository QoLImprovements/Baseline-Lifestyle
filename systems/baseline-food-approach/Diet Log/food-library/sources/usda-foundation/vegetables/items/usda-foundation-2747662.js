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
  "id": "usda-foundation-2747662",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, poblano, seeded, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.37,
    "carbs_g": 5.14,
    "energy_kcal": 28.0,
    "fat_g": 0.191,
    "fibre_g": 2.07,
    "folate_ug": 26.0,
    "iron_mg": 0.117,
    "magnesium_mg": 10.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.4,
    "potassium_mg": 192.0,
    "protein_g": 1.43,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 2.68,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 128.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2747662",
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
