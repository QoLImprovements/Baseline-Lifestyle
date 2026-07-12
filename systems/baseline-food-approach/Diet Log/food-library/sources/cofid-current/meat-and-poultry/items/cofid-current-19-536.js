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
  "id": "cofid-current-19-536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Casserole, pork, made with cook-in sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.0,
    "energy_kcal": 154.0,
    "fat_g": 7.9,
    "fibre_g": 0.7,
    "folate_ug": 3.0,
    "iron_mg": 0.83,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 177.0,
    "potassium_mg": 374.0,
    "protein_g": 17.0,
    "salt_g": 0.4575,
    "sat_fat_g": 2.68,
    "sodium_mg": 183.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-536",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
