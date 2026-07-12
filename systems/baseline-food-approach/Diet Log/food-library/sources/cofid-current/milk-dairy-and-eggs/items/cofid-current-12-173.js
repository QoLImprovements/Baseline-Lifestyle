/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 assorted varieties",
  "id": "cofid-current-12-173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, processed, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 680.0,
    "carbs_g": 0.2,
    "energy_kcal": 303.0,
    "fat_g": 24.5,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.3,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1030.0,
    "potassium_mg": 87.0,
    "protein_g": 20.5,
    "salt_g": 3.175,
    "sat_fat_g": 15.1,
    "sodium_mg": 1270.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 259.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-173",
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
