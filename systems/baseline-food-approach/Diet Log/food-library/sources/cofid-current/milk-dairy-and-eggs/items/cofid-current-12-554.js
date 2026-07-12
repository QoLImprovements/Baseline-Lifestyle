/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "22 samples, summer (June/Sep) and winter (Jan/Mar), unfortified and manufacturers' data",
  "id": "cofid-current-12-554",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, skimmed, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 4.9,
    "energy_kcal": 33.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 148.0,
    "protein_g": 3.4,
    "salt_g": 0.1,
    "sat_fat_g": 0.0,
    "sodium_mg": 40.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-554",
  "state": "Unspecified",
  "subcategory": "BAE",
  "tags": [
    "bae",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
