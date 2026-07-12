/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "19 samples, fresh and frozen",
  "id": "cofid-current-18-330",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, light meat, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 153.0,
    "fat_g": 3.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 30.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 250.0,
    "potassium_mg": 360.0,
    "protein_g": 30.2,
    "salt_g": 0.15,
    "sat_fat_g": 1.02,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.04
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-330",
  "state": "Roasted",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
