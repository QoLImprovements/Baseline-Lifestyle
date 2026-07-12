/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe, Calculated from 25g powder to 200ml milk",
  "id": "cofid-current-17-803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Horlicks powder, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 319.0,
    "carbs_g": 13.3,
    "energy_kcal": 98.0,
    "fat_g": 3.5,
    "fibre_g": 0.4,
    "folate_ug": 23.0,
    "iron_mg": 1.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 216.0,
    "protein_g": 4.1,
    "salt_g": 0.2325,
    "sat_fat_g": 2.18,
    "sodium_mg": 93.0,
    "sugar_g": 8.4,
    "vitamin_a_ug": 142.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 1.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-803",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "milk-dairy-and-eggs",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
