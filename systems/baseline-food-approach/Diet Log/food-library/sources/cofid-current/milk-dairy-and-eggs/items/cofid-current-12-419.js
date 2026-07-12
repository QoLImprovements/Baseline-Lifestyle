/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Samples taken in January and March",
  "id": "cofid-current-12-419",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, semi-skimmed, pasteurised, winter and spring",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 4.9,
    "energy_kcal": 47.0,
    "fat_g": 1.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.02,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 161.0,
    "protein_g": 3.4,
    "salt_g": 0.1075,
    "sat_fat_g": 0.98,
    "sodium_mg": 43.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-419",
  "state": "Unspecified",
  "subcategory": "BAH",
  "tags": [
    "bah",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
