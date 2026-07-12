/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-558",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Carbonnade of Beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 5.2,
    "energy_kcal": 134.0,
    "fat_g": 6.5,
    "fibre_g": 0.8,
    "folate_ug": 6.0,
    "iron_mg": 1.21,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 244.0,
    "protein_g": 12.7,
    "salt_g": 0.575,
    "sat_fat_g": 2.12,
    "sodium_mg": 230.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.39
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-558",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
