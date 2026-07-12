/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "5 samples, 4 products, including Cadbury Brunch, Tracker cereal and Alpen cereal bars",
  "id": "cofid-current-11-818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cereal bars, with fruit and/or nuts, with chocolate, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 66.0,
    "energy_kcal": 436.0,
    "fat_g": 18.3,
    "fibre_g": 5.1,
    "folate_ug": 10.0,
    "iron_mg": 1.92,
    "magnesium_mg": 58.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 182.0,
    "potassium_mg": 309.0,
    "protein_g": 6.0,
    "salt_g": 0.5525,
    "sat_fat_g": 8.43,
    "sodium_mg": 221.0,
    "sugar_g": 40.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-818",
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
