/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "racc",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-2515382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Flour, coconut",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 58.9,
    "energy_kcal": 438.0,
    "fat_g": 15.3,
    "fibre_g": 34.2,
    "folate_ug": 0.0,
    "iron_mg": 8.02,
    "magnesium_mg": 248.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 507.0,
    "potassium_mg": 2090.0,
    "protein_g": 16.1,
    "salt_g": 0.11725,
    "sat_fat_g": 14.0,
    "sodium_mg": 46.9,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2515382",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "grains-bread-and-pasta",
    "nut-and-seed-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
