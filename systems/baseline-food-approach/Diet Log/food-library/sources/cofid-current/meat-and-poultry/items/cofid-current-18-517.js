/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 81% lean and 19% fat. No fat removed, not including crackling.",
  "id": "cofid-current-18-517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, leg joint, roasted, lean and fat",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 0.0,
    "energy_kcal": 261.0,
    "fat_g": 15.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.84,
    "magnesium_mg": 25.0,
    "omega3_g": 0.16,
    "phosphorus_mg": 206.0,
    "potassium_mg": 341.0,
    "protein_g": 29.6,
    "salt_g": 0.1325,
    "sat_fat_g": 5.64,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-517",
  "state": "Roasted",
  "subcategory": "MAG",
  "tags": [
    "mag",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
