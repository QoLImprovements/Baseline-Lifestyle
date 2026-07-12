/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Commercial ingredient. Calculation and manufacturer's data",
  "id": "cofid-old-12-197",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt powder",
  "nutritionPerBasis": {
    "calcium_mg": 1300.0,
    "carbs_g": 54.4,
    "energy_kcal": 353.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.5,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1030.0,
    "potassium_mg": 1620.0,
    "protein_g": 35.0,
    "salt_g": 1.475,
    "sat_fat_g": 0.6,
    "sodium_mg": 590.0,
    "sugar_g": 54.4,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-197",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
