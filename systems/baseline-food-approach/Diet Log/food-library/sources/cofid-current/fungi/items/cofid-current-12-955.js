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
  "id": "cofid-current-12-955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, mushroom, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 16.6,
    "energy_kcal": 267.0,
    "fat_g": 18.1,
    "fibre_g": 2.4,
    "folate_ug": 18.0,
    "iron_mg": 0.97,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 223.0,
    "protein_g": 10.5,
    "salt_g": 0.63,
    "sat_fat_g": 10.55,
    "sodium_mg": 252.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 217.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 1.74
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-955",
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
