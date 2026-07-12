/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, frozen",
  "id": "cofid-current-12-475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pavlova, toffee/chocolate, no fruit",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 47.4,
    "energy_kcal": 370.0,
    "fat_g": 19.7,
    "fibre_g": 1.1,
    "folate_ug": 8.0,
    "iron_mg": 0.53,
    "magnesium_mg": 15.0,
    "omega3_g": 0.15,
    "phosphorus_mg": 48.0,
    "potassium_mg": 133.0,
    "protein_g": 3.8,
    "salt_g": 0.1675,
    "sat_fat_g": 10.83,
    "sodium_mg": 67.0,
    "sugar_g": 45.3,
    "vitamin_a_ug": 163.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-475",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
