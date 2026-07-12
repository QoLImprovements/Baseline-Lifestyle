/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "racc",
  "description": "Cereal Grains and Pasta",
  "id": "usda-foundation-2710821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Wild rice, dry, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.97,
    "carbs_g": 75.7,
    "energy_kcal": 369.0,
    "fat_g": 1.7,
    "fibre_g": 4.26,
    "folate_ug": 0.0,
    "iron_mg": 1.53,
    "magnesium_mg": 108.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 355.0,
    "potassium_mg": 299.0,
    "protein_g": 12.8,
    "salt_g": 0.002525,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.01,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2710821",
  "state": "Raw",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
