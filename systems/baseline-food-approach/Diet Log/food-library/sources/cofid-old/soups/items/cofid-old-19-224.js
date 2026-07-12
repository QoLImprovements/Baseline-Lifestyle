/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "g",
  "description": "10 samples, 2 brands",
  "id": "cofid-old-19-224",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Irish stew, canned",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.8,
    "energy_kcal": 91.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.2,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 130.0,
    "protein_g": 4.7,
    "salt_g": 0.7,
    "sat_fat_g": 2.5,
    "sodium_mg": 280.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-224",
  "state": "Canned",
  "subcategory": "MR",
  "tags": [
    "canned",
    "mr",
    "soups"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
