/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Includes beefburger, bun, cheese, mustard, ketchup, onions and pickles",
  "id": "cofid-current-19-545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, cheeseburger, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 28.3,
    "energy_kcal": 254.0,
    "fat_g": 10.4,
    "fibre_g": 1.4,
    "folate_ug": 23.0,
    "iron_mg": 1.1,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 210.0,
    "protein_g": 13.6,
    "salt_g": 1.4,
    "sat_fat_g": 4.9,
    "sodium_mg": 560.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-545",
  "state": "Unspecified",
  "subcategory": "MBG",
  "tags": [
    "mbg",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
