/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Includes two beefburgers, bun, sauce, cheese, lettuce, onions and pickles",
  "id": "cofid-current-19-493",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, Big Mac, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 20.9,
    "energy_kcal": 232.0,
    "fat_g": 11.2,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 142.0,
    "protein_g": 13.1,
    "salt_g": 0.975,
    "sat_fat_g": 4.7,
    "sodium_mg": 390.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-493",
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
