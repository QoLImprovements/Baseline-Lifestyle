/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "10 samples, including apple, apple and blackberry and rhubarb. Frozen and chilled",
  "id": "cofid-current-11-1020",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, fruit, retail",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 36.0,
    "energy_kcal": 219.0,
    "fat_g": 8.3,
    "fibre_g": 2.3,
    "folate_ug": 10.0,
    "iron_mg": 0.25,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 82.0,
    "protein_g": 2.4,
    "salt_g": 0.205,
    "sat_fat_g": 3.97,
    "sodium_mg": 82.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1020",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
