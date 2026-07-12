/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, breaded and battered",
  "id": "cofid-current-18-502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, chicken/turkey, coated, retail, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 18.7,
    "energy_kcal": 266.0,
    "fat_g": 15.5,
    "fibre_g": 0.8,
    "folate_ug": 21.0,
    "iron_mg": 0.98,
    "magnesium_mg": 23.0,
    "omega3_g": 0.76,
    "phosphorus_mg": 160.0,
    "potassium_mg": 337.0,
    "protein_g": 14.2,
    "salt_g": 0.9575,
    "sat_fat_g": 2.63,
    "sodium_mg": 383.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-502",
  "state": "Grilled",
  "subcategory": "MCA",
  "tags": [
    "grilled",
    "mca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
