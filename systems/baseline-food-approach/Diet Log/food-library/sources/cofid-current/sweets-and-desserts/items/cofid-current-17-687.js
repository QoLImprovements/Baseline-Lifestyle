/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "8 samples, 5 brands",
  "id": "cofid-current-17-687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate nut spread",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 60.5,
    "energy_kcal": 549.0,
    "fat_g": 33.0,
    "fibre_g": 3.0,
    "folate_ug": 0.0,
    "iron_mg": 2.2,
    "magnesium_mg": 65.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 180.0,
    "potassium_mg": 390.0,
    "protein_g": 6.2,
    "salt_g": 0.125,
    "sat_fat_g": 9.34,
    "sodium_mg": 50.0,
    "sugar_g": 59.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-687",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "sc",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
