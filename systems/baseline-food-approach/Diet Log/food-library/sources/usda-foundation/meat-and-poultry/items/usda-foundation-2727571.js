/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-foundation-2727571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Bison, ground, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.83,
    "carbs_g": -0.15,
    "energy_kcal": 159.0,
    "fat_g": 8.88,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.17,
    "magnesium_mg": 18.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 301.0,
    "protein_g": 19.9,
    "salt_g": 0.13925,
    "sat_fat_g": 0.0,
    "sodium_mg": 55.7,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2727571",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
