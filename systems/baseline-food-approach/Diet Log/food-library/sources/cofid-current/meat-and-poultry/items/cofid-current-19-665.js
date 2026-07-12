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
  "id": "cofid-current-19-665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork chops in mustard and cream, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 1.0,
    "energy_kcal": 263.0,
    "fat_g": 19.4,
    "fibre_g": 0.2,
    "folate_ug": 3.0,
    "iron_mg": 0.57,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 296.0,
    "protein_g": 15.5,
    "salt_g": 0.5,
    "sat_fat_g": 7.61,
    "sodium_mg": 200.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-665",
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
