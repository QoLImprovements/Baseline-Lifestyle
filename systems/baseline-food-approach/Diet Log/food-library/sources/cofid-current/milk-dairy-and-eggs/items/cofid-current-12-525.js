/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "18 samples, made from sheeps and goats milk",
  "id": "cofid-current-12-525",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Feta",
  "nutritionPerBasis": {
    "calcium_mg": 360.0,
    "carbs_g": 1.5,
    "energy_kcal": 250.0,
    "fat_g": 20.2,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 0.2,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 280.0,
    "potassium_mg": 95.0,
    "protein_g": 15.6,
    "salt_g": 2.5,
    "sat_fat_g": 13.7,
    "sodium_mg": 1000.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 226.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-525",
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
