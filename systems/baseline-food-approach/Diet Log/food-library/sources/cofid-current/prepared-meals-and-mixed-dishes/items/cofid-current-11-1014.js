/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "g",
  "description": "30 samples, 7 brands, includes chilled and takeaway, thin base and deep pan",
  "id": "cofid-current-11-1014",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pizza, vegetarian, retail and takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 196.0,
    "carbs_g": 29.6,
    "energy_kcal": 216.0,
    "fat_g": 6.9,
    "fibre_g": 3.1,
    "folate_ug": 7.0,
    "iron_mg": 1.17,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 192.0,
    "protein_g": 10.8,
    "salt_g": 0.825,
    "sat_fat_g": 0.0,
    "sodium_mg": 330.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1014",
  "state": "Unspecified",
  "subcategory": "AE",
  "tags": [
    "ae",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
