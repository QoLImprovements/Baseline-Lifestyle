/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples of wing quarters, leg quarters and chicken halves from fish and chip shops",
  "id": "cofid-current-18-327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, portions, not coated, deep-fried, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 259.0,
    "fat_g": 16.8,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 1.0,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 310.0,
    "protein_g": 26.9,
    "salt_g": 0.375,
    "sat_fat_g": 4.6,
    "sodium_mg": 150.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-327",
  "state": "Fried",
  "subcategory": "MCA",
  "tags": [
    "fried",
    "mca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
