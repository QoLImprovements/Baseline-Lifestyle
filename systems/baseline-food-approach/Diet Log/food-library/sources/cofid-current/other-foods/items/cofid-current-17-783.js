/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Icing, butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 63.4,
    "energy_kcal": 507.0,
    "fat_g": 29.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.32,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 19.0,
    "protein_g": 0.2,
    "salt_g": 0.6725,
    "sat_fat_g": 18.61,
    "sodium_mg": 269.0,
    "sugar_g": 62.8,
    "vitamin_a_ug": 378.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-783",
  "state": "Unspecified",
  "subcategory": "S",
  "tags": [
    "other-foods",
    "s",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
