/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, spinach, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 11.3,
    "energy_kcal": 206.0,
    "fat_g": 13.4,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 1.29,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 268.0,
    "protein_g": 9.0,
    "salt_g": 0.4575,
    "sat_fat_g": 6.35,
    "sodium_mg": 183.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 555.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-803",
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
