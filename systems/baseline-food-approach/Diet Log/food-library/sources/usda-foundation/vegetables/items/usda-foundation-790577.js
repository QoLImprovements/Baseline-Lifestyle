/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "edible",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-790577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 197.0,
      "key": "edible",
      "kind": "unit",
      "label": "Edible"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Onions, red, raw",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 9.93,
    "energy_kcal": 44.0,
    "fat_g": 0.1,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 0.24,
    "magnesium_mg": 11.4,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 197.0,
    "protein_g": 0.94,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 5.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "790577",
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
