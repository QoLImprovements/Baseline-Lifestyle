/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples from different brewers",
  "id": "cofid-old-17-209",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beer, bitter, low alcohol",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.1,
    "energy_kcal": 13.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.0,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 34.0,
    "protein_g": 0.2,
    "salt_g": 0.0175,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-209",
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
