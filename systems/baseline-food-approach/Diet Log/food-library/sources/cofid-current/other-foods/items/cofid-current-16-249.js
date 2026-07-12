/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 packets from Chinese supermarkets. Shrimps and prawns",
  "id": "cofid-current-16-249",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shrimps, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1200.0,
    "carbs_g": 0.0,
    "energy_kcal": 245.0,
    "fat_g": 2.4,
    "fibre_g": 0.0,
    "folate_ug": 70.0,
    "iron_mg": 21.3,
    "magnesium_mg": 290.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 710.0,
    "potassium_mg": 500.0,
    "protein_g": 55.8,
    "salt_g": 10.825,
    "sat_fat_g": 0.4,
    "sodium_mg": 4330.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-249",
  "state": "Dried",
  "subcategory": "JK",
  "tags": [
    "dried",
    "jk",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
