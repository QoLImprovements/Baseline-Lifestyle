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
  "id": "cofid-current-18-329",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, dark meat, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 196.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.33,
    "phosphorus_mg": 200.0,
    "potassium_mg": 300.0,
    "protein_g": 24.4,
    "salt_g": 0.25,
    "sat_fat_g": 2.89,
    "sodium_mg": 100.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-329",
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
