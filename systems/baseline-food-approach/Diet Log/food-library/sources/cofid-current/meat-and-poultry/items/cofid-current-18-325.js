/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 92% light meat and 8% skin from fresh and frozen chicken",
  "id": "cofid-current-18-325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, breast, grilled, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 173.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.6,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 400.0,
    "protein_g": 28.9,
    "salt_g": 0.1525,
    "sat_fat_g": 0.9,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-325",
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
