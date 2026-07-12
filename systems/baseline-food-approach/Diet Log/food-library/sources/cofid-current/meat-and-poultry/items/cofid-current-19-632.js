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
  "id": "cofid-current-19-632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, stuffed with beef, rice and vegetables, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 9.2,
    "energy_kcal": 99.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.9,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 194.0,
    "protein_g": 6.2,
    "salt_g": 0.13,
    "sat_fat_g": 1.78,
    "sodium_mg": 52.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 26.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-632",
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
