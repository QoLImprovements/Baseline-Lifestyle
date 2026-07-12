/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands including French and German style. 65-90% meat",
  "id": "cofid-old-19-103",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Garlic sausage, ready to eat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.8,
    "energy_kcal": 248.0,
    "fat_g": 20.2,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.8,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 240.0,
    "protein_g": 15.9,
    "salt_g": 2.325,
    "sat_fat_g": 7.3,
    "sodium_mg": 930.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-103",
  "state": "Ready-to-eat",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
