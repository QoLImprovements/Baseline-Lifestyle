/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, chilled and frozen",
  "id": "cofid-current-11-921",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, apple, pastry, double crust, retail",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 30.3,
    "energy_kcal": 245.0,
    "fat_g": 12.9,
    "fibre_g": 2.6,
    "folate_ug": 3.0,
    "iron_mg": 0.34,
    "magnesium_mg": 10.0,
    "omega3_g": 0.49,
    "phosphorus_mg": 71.0,
    "potassium_mg": 97.0,
    "protein_g": 3.8,
    "salt_g": 0.395,
    "sat_fat_g": 4.04,
    "sodium_mg": 158.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-921",
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
