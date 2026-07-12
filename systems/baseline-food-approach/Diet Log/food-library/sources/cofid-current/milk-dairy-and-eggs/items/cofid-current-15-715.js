/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cauliflower in white sauce, made with semi-skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 6.0,
    "energy_kcal": 63.0,
    "fat_g": 3.2,
    "fibre_g": 1.4,
    "folate_ug": 36.0,
    "iron_mg": 0.35,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 204.0,
    "protein_g": 2.7,
    "salt_g": 0.095,
    "sat_fat_g": 1.8,
    "sodium_mg": 38.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-715",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
