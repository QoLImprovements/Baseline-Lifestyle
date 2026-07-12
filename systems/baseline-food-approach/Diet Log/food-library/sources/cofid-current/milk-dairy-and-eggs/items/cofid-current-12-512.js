/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Average of skimmed (12-307) and semi-skimmed (12-313) milk",
  "id": "cofid-current-12-512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, 1% fat, pasteurised",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 4.8,
    "energy_kcal": 41.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.03,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 95.0,
    "potassium_mg": 159.0,
    "protein_g": 3.5,
    "salt_g": 0.11,
    "sat_fat_g": 0.6,
    "sodium_mg": 44.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-512",
  "state": "Unspecified",
  "subcategory": "BA",
  "tags": [
    "ba",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
