/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of 22 samples of summer and winter cream",
  "id": "cofid-current-12-334",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cream, fresh, double, including Jersey cream",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 1.7,
    "energy_kcal": 496.0,
    "fat_g": 53.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.06,
    "magnesium_mg": 5.0,
    "omega3_g": 0.48,
    "phosphorus_mg": 52.0,
    "potassium_mg": 65.0,
    "protein_g": 1.6,
    "salt_g": 0.055,
    "sat_fat_g": 33.39,
    "sodium_mg": 22.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 860.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 6.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-334",
  "state": "Unspecified",
  "subcategory": "BJC",
  "tags": [
    "bjc",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
