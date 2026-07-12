/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 21% light meat, 62% dark meat and 17% skin from fresh and frozen chicken",
  "id": "cofid-current-18-314",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, leg quarter, casseroled, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 217.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.9,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 210.0,
    "protein_g": 22.9,
    "salt_g": 0.175,
    "sat_fat_g": 3.8,
    "sodium_mg": 70.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-314",
  "state": "Unspecified",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
