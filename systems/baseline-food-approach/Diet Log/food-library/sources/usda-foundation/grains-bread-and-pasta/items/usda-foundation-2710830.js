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
  "id": "usda-foundation-2710830",
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
  "name": "Khorasan, grain, dry, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.1,
    "carbs_g": 71.8,
    "energy_kcal": 371.0,
    "fat_g": 2.8,
    "fibre_g": 10.5,
    "folate_ug": 0.0,
    "iron_mg": 3.87,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 371.0,
    "potassium_mg": 450.0,
    "protein_g": 14.8,
    "salt_g": 0.00985,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.94,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2710830",
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
