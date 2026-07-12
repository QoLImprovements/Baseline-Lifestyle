/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "South Asian sweet bread, 6 samples, ethnic food store",
  "id": "cofid-current-11-916",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake rusks",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 55.7,
    "energy_kcal": 452.0,
    "fat_g": 23.1,
    "fibre_g": 1.6,
    "folate_ug": 21.0,
    "iron_mg": 1.51,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 295.0,
    "potassium_mg": 172.0,
    "protein_g": 8.7,
    "salt_g": 0.8975,
    "sat_fat_g": 8.08,
    "sodium_mg": 359.0,
    "sugar_g": 24.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-916",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
