/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-15-666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beanburger, butter bean, fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 20.2,
    "energy_kcal": 194.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 387.0,
    "iron_mg": 1.72,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 303.0,
    "protein_g": 5.7,
    "salt_g": 0.1775,
    "sat_fat_g": 0.85,
    "sodium_mg": 71.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 346.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 11.14
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-666",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
