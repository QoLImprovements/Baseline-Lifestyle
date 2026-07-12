/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 cans, 3 brands",
  "id": "cofid-current-16-247",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shrimps, canned in brine, drained",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 0.0,
    "energy_kcal": 94.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 5.1,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 100.0,
    "protein_g": 20.8,
    "salt_g": 2.45,
    "sat_fat_g": 0.2,
    "sodium_mg": 980.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-247",
  "state": "Canned",
  "subcategory": "JK",
  "tags": [
    "canned",
    "jk",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
