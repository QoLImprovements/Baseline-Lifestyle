/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, dessert made from vermicelli and milk",
  "id": "cofid-current-11-915",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sevyian, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 20.2,
    "energy_kcal": 119.0,
    "fat_g": 3.1,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 177.0,
    "protein_g": 3.8,
    "salt_g": 0.1,
    "sat_fat_g": 1.86,
    "sodium_mg": 40.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-915",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
