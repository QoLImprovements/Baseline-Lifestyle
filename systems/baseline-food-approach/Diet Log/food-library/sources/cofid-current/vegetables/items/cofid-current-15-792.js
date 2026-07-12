/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe. Assorted vegetables, includes coconut",
  "id": "cofid-current-15-792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, vegetable, Pakistani, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 9.2,
    "energy_kcal": 64.0,
    "fat_g": 2.6,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.47,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 338.0,
    "protein_g": 2.3,
    "salt_g": 0.0575,
    "sat_fat_g": 0.9,
    "sodium_mg": 23.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 413.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-792",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
