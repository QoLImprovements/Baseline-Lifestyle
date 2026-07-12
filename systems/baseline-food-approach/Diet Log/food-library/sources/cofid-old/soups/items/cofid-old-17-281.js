/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 packets, 4 brands; including cream of tomato",
  "id": "cofid-old-17-281",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soup, tomato, dried",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 65.1,
    "energy_kcal": 392.0,
    "fat_g": 14.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.2,
    "magnesium_mg": 40.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 280.0,
    "potassium_mg": 840.0,
    "protein_g": 4.8,
    "salt_g": 7.75,
    "sat_fat_g": 6.0,
    "sodium_mg": 3100.0,
    "sugar_g": 37.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-281",
  "state": "Dried",
  "subcategory": "WAE",
  "tags": [
    "dried",
    "soups",
    "wae"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
