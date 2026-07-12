/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including apple, apple and blackcurrant and cherry",
  "id": "cofid-current-11-847",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fruit, individual, retail",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 60.0,
    "energy_kcal": 361.0,
    "fat_g": 13.7,
    "fibre_g": 4.3,
    "folate_ug": 6.0,
    "iron_mg": 0.62,
    "magnesium_mg": 11.0,
    "omega3_g": 0.46,
    "phosphorus_mg": 53.0,
    "potassium_mg": 117.0,
    "protein_g": 3.1,
    "salt_g": 0.2875,
    "sat_fat_g": 4.87,
    "sodium_mg": 115.0,
    "sugar_g": 31.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-847",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
