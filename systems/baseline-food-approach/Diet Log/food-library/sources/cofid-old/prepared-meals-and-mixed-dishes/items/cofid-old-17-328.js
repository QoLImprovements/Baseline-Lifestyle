/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Analysis and manufacturers' information",
  "id": "cofid-old-17-328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich spread",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 23.5,
    "energy_kcal": 186.0,
    "fat_g": 9.8,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.34,
    "phosphorus_mg": 36.0,
    "potassium_mg": 130.0,
    "protein_g": 1.2,
    "salt_g": 2.2,
    "sat_fat_g": 1.12,
    "sodium_mg": 880.0,
    "sugar_g": 20.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 6.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-328",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "prepared-meals-and-mixed-dishes",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
