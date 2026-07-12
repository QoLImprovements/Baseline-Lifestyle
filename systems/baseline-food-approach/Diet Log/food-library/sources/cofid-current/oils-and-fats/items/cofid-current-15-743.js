/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe. Split chick peas",
  "id": "cofid-current-15-743",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chick pea dahl and spinach, with vegetable oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 12.8,
    "energy_kcal": 201.0,
    "fat_g": 14.2,
    "fibre_g": 0.0,
    "folate_ug": 43.0,
    "iron_mg": 2.23,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 322.0,
    "protein_g": 6.3,
    "salt_g": 0.11,
    "sat_fat_g": 0.98,
    "sodium_mg": 44.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 163.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 3.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-743",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
