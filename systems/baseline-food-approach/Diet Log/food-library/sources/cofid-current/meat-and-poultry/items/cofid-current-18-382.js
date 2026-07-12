/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from roast, meat only 18-381",
  "id": "cofid-current-18-382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Partridge, meat only, roasted, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 127.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.6,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 240.0,
    "protein_g": 22.0,
    "salt_g": 0.15,
    "sat_fat_g": 1.1,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-382",
  "state": "Roasted",
  "subcategory": "MCI",
  "tags": [
    "mci",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
