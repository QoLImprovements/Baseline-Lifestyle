/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "g",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-2262073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sesame butter, creamy",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 14.2,
    "energy_kcal": 697.0,
    "fat_g": 62.4,
    "fibre_g": 8.37,
    "folate_ug": 108.0,
    "iron_mg": 7.0,
    "magnesium_mg": 357.0,
    "omega3_g": 0.25,
    "phosphorus_mg": 719.0,
    "potassium_mg": 408.0,
    "protein_g": 19.7,
    "salt_g": 0.159,
    "sat_fat_g": 8.97,
    "sodium_mg": 63.6,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.71
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2262073",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
