/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from dried 16-180",
  "id": "cofid-old-16-181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Herrings, dried, salted, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 0.0,
    "energy_kcal": 84.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 1.0,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 75.0,
    "protein_g": 12.7,
    "salt_g": 6.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 2610.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-181",
  "state": "Dried",
  "subcategory": "JC",
  "tags": [
    "dried",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
