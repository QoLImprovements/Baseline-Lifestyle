/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, battered and breaded, including chicken nuggets, chicken dippers and turkey dinosaurs",
  "id": "cofid-current-18-503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken/turkey pieces, coated, baked",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 19.6,
    "energy_kcal": 256.0,
    "fat_g": 13.9,
    "fibre_g": 2.3,
    "folate_ug": 27.0,
    "iron_mg": 1.07,
    "magnesium_mg": 24.0,
    "omega3_g": 0.76,
    "phosphorus_mg": 169.0,
    "potassium_mg": 278.0,
    "protein_g": 14.4,
    "salt_g": 0.9,
    "sat_fat_g": 2.11,
    "sodium_mg": 360.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-503",
  "state": "Baked",
  "subcategory": "MCA",
  "tags": [
    "baked",
    "mca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
