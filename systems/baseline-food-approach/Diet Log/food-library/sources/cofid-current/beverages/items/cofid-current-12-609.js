/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "3 samples",
  "id": "cofid-current-12-609",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, soya, non-dairy alternative to yogurt, fruit, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 11.0,
    "energy_kcal": 72.0,
    "fat_g": 2.0,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.45,
    "magnesium_mg": 15.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 72.0,
    "potassium_mg": 94.0,
    "protein_g": 3.3,
    "salt_g": 0.06,
    "sat_fat_g": 0.32,
    "sodium_mg": 24.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-609",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "beverages",
    "bn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
