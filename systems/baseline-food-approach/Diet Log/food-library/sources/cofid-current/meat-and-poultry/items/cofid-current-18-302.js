/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples",
  "id": "cofid-current-18-302",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, corn-fed, raw, skin only",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 514.0,
    "fat_g": 52.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.6,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 130.0,
    "protein_g": 10.1,
    "salt_g": 0.125,
    "sat_fat_g": 15.2,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-302",
  "state": "Raw",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
