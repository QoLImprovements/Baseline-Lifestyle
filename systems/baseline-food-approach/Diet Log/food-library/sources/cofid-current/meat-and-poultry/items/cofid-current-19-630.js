/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Steak and kidney pudding, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 18.6,
    "energy_kcal": 210.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 1.41,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 180.0,
    "protein_g": 10.7,
    "salt_g": 0.2175,
    "sat_fat_g": 5.76,
    "sodium_mg": 87.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-630",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
