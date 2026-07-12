/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "whole",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-323294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "whole",
      "kind": "unit",
      "label": "whole"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Nuts, almonds, dry roasted, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 273.0,
    "carbs_g": 16.2,
    "energy_kcal": 620.0,
    "fat_g": 57.8,
    "fibre_g": 11.0,
    "folate_ug": 35.0,
    "iron_mg": 3.17,
    "magnesium_mg": 258.0,
    "omega3_g": 0.052,
    "phosphorus_mg": 456.0,
    "potassium_mg": 684.0,
    "protein_g": 20.4,
    "salt_g": 0.64,
    "sat_fat_g": 4.56,
    "sodium_mg": 256.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 19.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "323294",
  "state": "Roasted",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
