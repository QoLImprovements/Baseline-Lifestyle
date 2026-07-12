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
  "id": "cofid-current-12-954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, mushroom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 198.0,
    "carbs_g": 15.5,
    "energy_kcal": 278.0,
    "fat_g": 20.0,
    "fibre_g": 1.4,
    "folate_ug": 13.0,
    "iron_mg": 0.78,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 176.0,
    "protein_g": 9.9,
    "salt_g": 0.6325,
    "sat_fat_g": 8.97,
    "sodium_mg": 253.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-954",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "fungi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
