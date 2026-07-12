/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples from one herd and literature sources",
  "id": "cofid-current-12-328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, goats, pasteurised",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 4.4,
    "energy_kcal": 62.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.12,
    "magnesium_mg": 13.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 90.0,
    "potassium_mg": 170.0,
    "protein_g": 3.1,
    "salt_g": 0.105,
    "sat_fat_g": 2.37,
    "sodium_mg": 42.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.53
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-328",
  "state": "Unspecified",
  "subcategory": "BC",
  "tags": [
    "bc",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
