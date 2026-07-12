/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Calculated from recipe",
  "id": "cofid-current-13-813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chinese 5 spice",
  "nutritionPerBasis": {
    "calcium_mg": 1040.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 8.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 25.6,
    "magnesium_mg": 210.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 1070.0,
    "protein_g": 9.5,
    "salt_g": 0.1575,
    "sat_fat_g": 0.0,
    "sodium_mg": 63.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-813",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
