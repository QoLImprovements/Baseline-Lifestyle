/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "3-10 samples",
  "id": "cofid-current-12-181",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Stilton, white",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 0.1,
    "energy_kcal": 362.0,
    "fat_g": 31.3,
    "fibre_g": 0.0,
    "folate_ug": 52.0,
    "iron_mg": 0.3,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 93.0,
    "protein_g": 19.9,
    "salt_g": 1.925,
    "sat_fat_g": 19.6,
    "sodium_mg": 770.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 343.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-181",
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
