/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples, 7 brands",
  "id": "cofid-current-12-527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, processed, plain",
  "nutritionPerBasis": {
    "calcium_mg": 610.0,
    "carbs_g": 5.0,
    "energy_kcal": 297.0,
    "fat_g": 23.0,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 768.0,
    "potassium_mg": 178.0,
    "protein_g": 17.8,
    "salt_g": 2.5,
    "sat_fat_g": 14.32,
    "sodium_mg": 1000.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 286.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 1.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-527",
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
