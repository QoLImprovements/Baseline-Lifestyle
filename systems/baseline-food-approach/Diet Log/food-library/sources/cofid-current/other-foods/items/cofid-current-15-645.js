/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Tomato, mushroom and onion stuffing. Recipe adapted from a recipe from Leeds Polytechnic",
  "id": "cofid-current-15-645",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, stuffed with vegetables, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 15.8,
    "energy_kcal": 113.0,
    "fat_g": 4.2,
    "fibre_g": 1.2,
    "folate_ug": 12.0,
    "iron_mg": 0.8,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 235.0,
    "protein_g": 4.1,
    "salt_g": 0.0725,
    "sat_fat_g": 0.95,
    "sodium_mg": 29.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-645",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
