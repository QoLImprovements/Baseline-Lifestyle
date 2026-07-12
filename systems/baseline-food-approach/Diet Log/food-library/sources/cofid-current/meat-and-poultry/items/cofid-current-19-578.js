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
  "id": "cofid-current-19-578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Duck a l'orange, excluding fat and skin, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 4.0,
    "energy_kcal": 122.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.25,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 138.0,
    "protein_g": 11.2,
    "salt_g": 0.6425,
    "sat_fat_g": 2.62,
    "sodium_mg": 257.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-578",
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
