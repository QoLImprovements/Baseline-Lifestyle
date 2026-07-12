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
  "id": "cofid-current-19-639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, turkey, single crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 14.9,
    "energy_kcal": 205.0,
    "fat_g": 10.4,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.68,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 148.0,
    "potassium_mg": 253.0,
    "protein_g": 13.8,
    "salt_g": 0.27,
    "sat_fat_g": 4.33,
    "sodium_mg": 108.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-639",
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
