/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 3 brands; assorted types e.g. Waffles, Bitza Pizza, Wickettes",
  "id": "cofid-old-17-141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato and tapioca snacks",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 64.6,
    "energy_kcal": 481.0,
    "fat_g": 24.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.8,
    "magnesium_mg": 29.0,
    "omega3_g": 0.43,
    "phosphorus_mg": 94.0,
    "potassium_mg": 530.0,
    "protein_g": 3.9,
    "salt_g": 3.375,
    "sat_fat_g": 5.5,
    "sodium_mg": 1350.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-141",
  "state": "Unspecified",
  "subcategory": "SNB",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snb",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
