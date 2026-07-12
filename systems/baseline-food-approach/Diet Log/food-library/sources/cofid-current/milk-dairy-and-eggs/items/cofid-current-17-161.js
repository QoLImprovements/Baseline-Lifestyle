/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 2g instant coffee to 225ml water with 35g semi-skimmed milk",
  "id": "cofid-current-17-161",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffee, instant, made up with water and semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.7,
    "energy_kcal": 7.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 49.0,
    "protein_g": 0.6,
    "salt_g": 0.02,
    "sat_fat_g": 0.1,
    "sodium_mg": 8.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-161",
  "state": "Unspecified",
  "subcategory": "PAC",
  "tags": [
    "milk-dairy-and-eggs",
    "pac",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
