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
  "id": "cofid-current-19-611",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta with ham and mushroom sauce, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 16.2,
    "energy_kcal": 132.0,
    "fat_g": 5.3,
    "fibre_g": 1.2,
    "folate_ug": 11.0,
    "iron_mg": 0.45,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 158.0,
    "protein_g": 5.7,
    "salt_g": 0.24,
    "sat_fat_g": 3.18,
    "sodium_mg": 96.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-611",
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
