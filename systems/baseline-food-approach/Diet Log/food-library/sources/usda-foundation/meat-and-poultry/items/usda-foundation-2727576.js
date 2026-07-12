/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Pork Products",
  "id": "usda-foundation-2727576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Pork, belly, with skin, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.2,
    "carbs_g": -0.705,
    "energy_kcal": 380.0,
    "fat_g": 35.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.382,
    "magnesium_mg": 12.2,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 208.0,
    "protein_g": 15.2,
    "salt_g": 0.12425,
    "sat_fat_g": 0.0,
    "sodium_mg": 49.7,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2727576",
  "state": "Raw",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
