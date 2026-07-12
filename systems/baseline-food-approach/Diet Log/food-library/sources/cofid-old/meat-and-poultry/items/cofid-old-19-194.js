/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-old-19-194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken in white sauce, canned",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.5,
    "energy_kcal": 141.0,
    "fat_g": 8.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.6,
    "magnesium_mg": 11.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 70.0,
    "potassium_mg": 80.0,
    "protein_g": 14.3,
    "salt_g": 0.925,
    "sat_fat_g": 2.3,
    "sodium_mg": 370.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-194",
  "state": "Canned",
  "subcategory": "MR",
  "tags": [
    "canned",
    "meat-and-poultry",
    "mr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
