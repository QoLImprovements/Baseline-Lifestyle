/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Wine, mulled wine, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 20.2,
    "energy_kcal": 155.0,
    "fat_g": 0.2,
    "fibre_g": 0.4,
    "folate_ug": 5.0,
    "iron_mg": 0.38,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 94.0,
    "protein_g": 0.3,
    "salt_g": 0.01,
    "sat_fat_g": 0.06,
    "sodium_mg": 4.0,
    "sugar_g": 20.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-812",
  "state": "Unspecified",
  "subcategory": "QE",
  "tags": [
    "beverages",
    "qe",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
