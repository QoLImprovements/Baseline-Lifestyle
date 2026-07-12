/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples from dressed carcase",
  "id": "cofid-current-18-383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pheasant, meat only, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 220.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 2.2,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 360.0,
    "protein_g": 27.9,
    "salt_g": 0.165,
    "sat_fat_g": 4.1,
    "sodium_mg": 66.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-383",
  "state": "Roasted",
  "subcategory": "MCK",
  "tags": [
    "mck",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
