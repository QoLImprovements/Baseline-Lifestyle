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
  "id": "cofid-current-15-833",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pancakes, stuffed with vegetables, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 14.2,
    "energy_kcal": 115.0,
    "fat_g": 5.0,
    "fibre_g": 2.1,
    "folate_ug": 14.0,
    "iron_mg": 0.87,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 261.0,
    "protein_g": 4.4,
    "salt_g": 0.0725,
    "sat_fat_g": 1.39,
    "sodium_mg": 29.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-833",
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
