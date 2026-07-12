/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "racc",
  "description": "Nut and Seed Products",
  "id": "usda-foundation-2515375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Nuts, hazelnuts or filberts, raw",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 26.5,
    "energy_kcal": 641.0,
    "fat_g": 53.5,
    "fibre_g": 8.41,
    "folate_ug": 0.0,
    "iron_mg": 3.46,
    "magnesium_mg": 156.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 321.0,
    "potassium_mg": 636.0,
    "protein_g": 13.5,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2515375",
  "state": "Raw",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
