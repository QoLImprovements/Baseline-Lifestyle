/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-12-536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, human, mature",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 7.2,
    "energy_kcal": 69.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.07,
    "magnesium_mg": 3.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 15.0,
    "potassium_mg": 58.0,
    "protein_g": 1.3,
    "salt_g": 0.0375,
    "sat_fat_g": 1.92,
    "sodium_mg": 15.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-536",
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
