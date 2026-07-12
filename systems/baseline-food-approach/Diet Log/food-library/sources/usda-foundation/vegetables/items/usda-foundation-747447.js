/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-747447",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "chopped",
      "kind": "unit",
      "label": "chopped"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Broccoli, raw",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 6.27,
    "energy_kcal": 132.0,
    "fat_g": 0.34,
    "fibre_g": 2.4,
    "folate_ug": 65.0,
    "iron_mg": 0.69,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 303.0,
    "protein_g": 2.57,
    "salt_g": 0.09,
    "sat_fat_g": 0.039,
    "sodium_mg": 36.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 91.3,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 102.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "747447",
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
