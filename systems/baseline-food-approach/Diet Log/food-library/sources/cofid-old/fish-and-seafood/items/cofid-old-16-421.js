/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "4 samples, 3 products",
  "id": "cofid-old-16-421",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mackerel, canned in brine",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 204.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.89,
    "magnesium_mg": 22.0,
    "omega3_g": 3.53,
    "phosphorus_mg": 162.0,
    "potassium_mg": 227.0,
    "protein_g": 19.2,
    "salt_g": 0.69,
    "sat_fat_g": 3.17,
    "sodium_mg": 276.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "16-421",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
