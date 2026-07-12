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
  "id": "usda-foundation-2346388",
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
  "name": "Lettuce, iceberg, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.2,
    "carbs_g": 3.37,
    "energy_kcal": 17.1,
    "fat_g": 0.074,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.033,
    "magnesium_mg": 6.31,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.2,
    "potassium_mg": 139.0,
    "protein_g": 0.742,
    "salt_g": 0.04025,
    "sat_fat_g": 0.0,
    "sodium_mg": 16.1,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 20.5
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346388",
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
