/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-394 using 0.98 edible conversion factor",
  "id": "cofid-current-16-479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mackerel, flesh only, grilled, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 278.0,
    "fat_g": 22.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.25,
    "magnesium_mg": 37.0,
    "omega3_g": 4.73,
    "phosphorus_mg": 231.0,
    "potassium_mg": 342.0,
    "protein_g": 19.9,
    "salt_g": 0.4,
    "sat_fat_g": 5.0,
    "sodium_mg": 160.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-479",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
