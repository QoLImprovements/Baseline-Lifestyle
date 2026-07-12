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
  "id": "cofid-current-19-572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corned beef hash, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 12.3,
    "energy_kcal": 141.0,
    "fat_g": 5.9,
    "fibre_g": 1.3,
    "folate_ug": 13.0,
    "iron_mg": 1.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 303.0,
    "protein_g": 10.5,
    "salt_g": 0.8025,
    "sat_fat_g": 3.26,
    "sodium_mg": 321.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-572",
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
