/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources",
  "id": "cofid-current-14-842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pumpkin seeds",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 15.2,
    "energy_kcal": 565.0,
    "fat_g": 45.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 10.0,
    "magnesium_mg": 270.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 850.0,
    "potassium_mg": 820.0,
    "protein_g": 24.4,
    "salt_g": 0.045,
    "sat_fat_g": 7.0,
    "sodium_mg": 18.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-842",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
