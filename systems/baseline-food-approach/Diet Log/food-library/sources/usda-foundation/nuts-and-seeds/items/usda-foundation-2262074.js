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
  "id": "usda-foundation-2262074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Almond butter, creamy",
  "nutritionPerBasis": {
    "calcium_mg": 264.0,
    "carbs_g": 21.2,
    "energy_kcal": 645.0,
    "fat_g": 53.0,
    "fibre_g": 9.72,
    "folate_ug": 42.5,
    "iron_mg": 4.11,
    "magnesium_mg": 268.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 507.0,
    "potassium_mg": 745.0,
    "protein_g": 20.8,
    "salt_g": 0.00249,
    "sat_fat_g": 4.25,
    "sodium_mg": 0.996,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 16.7,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2262074",
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
