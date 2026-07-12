/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Literature sources. Liquid from grated coconut kernel",
  "id": "cofid-old-14-819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coconut cream",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 5.9,
    "energy_kcal": 350.0,
    "fat_g": 34.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.3,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 330.0,
    "protein_g": 4.0,
    "salt_g": 0.01,
    "sat_fat_g": 29.9,
    "sodium_mg": 4.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-819",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
