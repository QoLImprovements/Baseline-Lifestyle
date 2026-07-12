/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-559",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, chicken and mushroom, single crust, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 14.3,
    "energy_kcal": 202.0,
    "fat_g": 10.4,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 0.45,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 274.0,
    "protein_g": 13.6,
    "salt_g": 0.2525,
    "sat_fat_g": 4.35,
    "sodium_mg": 101.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 0.28
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-559",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "fungi",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
