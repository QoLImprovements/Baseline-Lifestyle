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
  "id": "usda-foundation-1999632",
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
  "name": "Spinach, baby",
  "nutritionPerBasis": {
    "calcium_mg": 68.4,
    "carbs_g": 2.41,
    "energy_kcal": 26.6,
    "fat_g": 0.619,
    "fibre_g": 1.56,
    "folate_ug": 116.0,
    "iron_mg": 1.26,
    "magnesium_mg": 92.9,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 582.0,
    "protein_g": 2.85,
    "salt_g": 0.2775,
    "sat_fat_g": 0.0,
    "sodium_mg": 111.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 283.0,
    "vitamin_c_mg": 26.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999632",
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
