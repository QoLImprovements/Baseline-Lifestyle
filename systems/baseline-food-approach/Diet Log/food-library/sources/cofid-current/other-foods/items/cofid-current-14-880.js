/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated as plain peanuts 68%, almonds 17%, cashews 8% and hazelnuts 7%",
  "id": "cofid-current-14-880",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nuts, mixed",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 11.6,
    "energy_kcal": 581.0,
    "fat_g": 49.1,
    "fibre_g": 0.0,
    "folate_ug": 93.0,
    "iron_mg": 2.93,
    "magnesium_mg": 222.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 452.0,
    "potassium_mg": 696.0,
    "protein_g": 23.8,
    "salt_g": 0.0125,
    "sat_fat_g": 7.72,
    "sodium_mg": 5.0,
    "sugar_g": 5.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 12.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-880",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
