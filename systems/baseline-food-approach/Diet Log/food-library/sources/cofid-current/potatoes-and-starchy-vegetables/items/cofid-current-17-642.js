/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "5 samples, 5 products, including Pringles and own brands",
  "id": "cofid-current-17-642",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato snacks, pringle-type, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 57.4,
    "energy_kcal": 519.0,
    "fat_g": 31.8,
    "fibre_g": 2.9,
    "folate_ug": 62.0,
    "iron_mg": 1.1,
    "magnesium_mg": 40.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 103.0,
    "potassium_mg": 706.0,
    "protein_g": 4.3,
    "salt_g": 1.4975,
    "sat_fat_g": 8.41,
    "sodium_mg": 599.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 10.8,
    "vitamin_k_ug": 9.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-642",
  "state": "Fried",
  "subcategory": "SNA",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "sna"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
