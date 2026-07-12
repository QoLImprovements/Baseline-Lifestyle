/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including Breakaway, Rocky and chocolate fingers",
  "id": "cofid-current-11-809",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, fully coated with chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 62.8,
    "energy_kcal": 506.0,
    "fat_g": 27.2,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 2.01,
    "magnesium_mg": 46.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 204.0,
    "potassium_mg": 344.0,
    "protein_g": 6.4,
    "salt_g": 0.5725,
    "sat_fat_g": 15.06,
    "sodium_mg": 229.0,
    "sugar_g": 39.3,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 3.46
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-809",
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
