/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "Recipe, split pigeon peas",
  "id": "cofid-current-15-779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, pigeon pea dahl, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 13.5,
    "energy_kcal": 108.0,
    "fat_g": 4.7,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.98,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 304.0,
    "protein_g": 4.6,
    "salt_g": 0.145,
    "sat_fat_g": 2.66,
    "sodium_mg": 58.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-779",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
