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
  "id": "usda-foundation-2346391",
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
  "name": "Lettuce, leaf, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 39.8,
    "carbs_g": 4.07,
    "energy_kcal": 22.0,
    "fat_g": 0.156,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.32,
    "magnesium_mg": 12.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.6,
    "potassium_mg": 277.0,
    "protein_g": 1.09,
    "salt_g": 0.07225,
    "sat_fat_g": 0.0,
    "sodium_mg": 28.9,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 15.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 118.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2346391",
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
