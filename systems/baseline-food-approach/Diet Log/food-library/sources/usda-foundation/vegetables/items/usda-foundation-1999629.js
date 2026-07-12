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
  "id": "usda-foundation-1999629",
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
  "name": "Mushrooms, white button",
  "nutritionPerBasis": {
    "calcium_mg": 5.46,
    "carbs_g": 4.08,
    "energy_kcal": 31.2,
    "fat_g": 0.371,
    "fibre_g": 1.72,
    "folate_ug": 34.8,
    "iron_mg": 0.227,
    "magnesium_mg": 10.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 373.0,
    "protein_g": 2.89,
    "salt_g": 0.0161,
    "sat_fat_g": 0.0,
    "sodium_mg": 6.44,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999629",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
