/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Large white chick peas, tomato and onion.",
  "id": "cofid-current-15-746",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea, whole and tomato, Gujerati, with butter ghee, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 20.1,
    "energy_kcal": 237.0,
    "fat_g": 14.4,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 2.25,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 465.0,
    "protein_g": 7.7,
    "salt_g": 0.0375,
    "sat_fat_g": 7.63,
    "sodium_mg": 15.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 183.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-746",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
