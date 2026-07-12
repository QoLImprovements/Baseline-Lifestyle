/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Mixed sample from different brewers",
  "id": "cofid-old-17-221",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ale, strong ale/barley wine",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 6.1,
    "energy_kcal": 66.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.0,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 110.0,
    "protein_g": 0.7,
    "salt_g": 0.0375,
    "sat_fat_g": 0.0,
    "sodium_mg": 15.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-221",
  "state": "Unspecified",
  "subcategory": "QA",
  "tags": [
    "beverages",
    "qa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
