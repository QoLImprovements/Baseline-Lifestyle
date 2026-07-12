/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-14-285",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Passion fruit juice",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 10.7,
    "energy_kcal": 47.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 200.0,
    "protein_g": 0.8,
    "salt_g": 0.0475,
    "sat_fat_g": 0.0,
    "sodium_mg": 19.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 135.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-285",
  "state": "Unspecified",
  "subcategory": "FC",
  "tags": [
    "beverages",
    "fc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
