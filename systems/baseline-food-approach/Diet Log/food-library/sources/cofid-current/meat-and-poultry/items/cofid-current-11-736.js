/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products",
  "id": "cofid-current-11-736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pasta, ravioli, meat filling, canned in tomato sauce",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 14.8,
    "energy_kcal": 77.0,
    "fat_g": 1.4,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 0.8,
    "magnesium_mg": 11.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 39.0,
    "potassium_mg": 137.0,
    "protein_g": 2.3,
    "salt_g": 0.65,
    "sat_fat_g": 0.46,
    "sodium_mg": 260.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-736",
  "state": "Canned",
  "subcategory": "AD",
  "tags": [
    "ad",
    "canned",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
