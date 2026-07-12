/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe, including meat, sauce and spaghetti",
  "id": "cofid-current-19-628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spaghetti bolognese, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 17.2,
    "energy_kcal": 151.0,
    "fat_g": 6.1,
    "fibre_g": 1.2,
    "folate_ug": 8.0,
    "iron_mg": 0.88,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 165.0,
    "protein_g": 8.1,
    "salt_g": 0.23,
    "sat_fat_g": 2.15,
    "sodium_mg": 92.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-628",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
