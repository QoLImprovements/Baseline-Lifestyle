/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Includes bun, beefburger, mayonnaise, lettuce, tomato, ketchup, onions and pickles",
  "id": "cofid-current-19-544",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, hamburger, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 31.2,
    "energy_kcal": 246.0,
    "fat_g": 8.3,
    "fibre_g": 1.8,
    "folate_ug": 24.0,
    "iron_mg": 1.2,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 210.0,
    "protein_g": 13.5,
    "salt_g": 1.2,
    "sat_fat_g": 3.5,
    "sodium_mg": 480.0,
    "sugar_g": 6.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-544",
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
