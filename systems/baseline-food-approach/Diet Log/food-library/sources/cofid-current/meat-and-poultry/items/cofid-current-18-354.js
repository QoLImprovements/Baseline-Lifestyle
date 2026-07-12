/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "5 samples",
  "id": "cofid-current-18-354",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, mince, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 176.0,
    "fat_g": 6.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.4,
    "magnesium_mg": 21.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 180.0,
    "potassium_mg": 210.0,
    "protein_g": 28.6,
    "salt_g": 0.1125,
    "sat_fat_g": 2.0,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-354",
  "state": "Unspecified",
  "subcategory": "MCO",
  "tags": [
    "mco",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
