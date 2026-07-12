/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Portion includes bun, beefburger, mayonnaise, lettuce, tomato, ketchup, onions and pickles",
  "id": "cofid-current-19-514",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, Whopper, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 19.2,
    "energy_kcal": 223.0,
    "fat_g": 12.1,
    "fibre_g": 1.2,
    "folate_ug": 25.0,
    "iron_mg": 1.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 230.0,
    "protein_g": 10.4,
    "salt_g": 0.8925,
    "sat_fat_g": 3.3,
    "sodium_mg": 357.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-514",
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
