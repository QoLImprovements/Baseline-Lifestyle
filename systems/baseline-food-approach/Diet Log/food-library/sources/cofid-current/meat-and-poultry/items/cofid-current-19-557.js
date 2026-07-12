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
  "id": "cofid-current-19-557",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, steak and kidney, single crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 15.3,
    "energy_kcal": 243.0,
    "fat_g": 13.1,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 2.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 273.0,
    "protein_g": 17.0,
    "salt_g": 0.5225,
    "sat_fat_g": 6.06,
    "sodium_mg": 209.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-557",
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
