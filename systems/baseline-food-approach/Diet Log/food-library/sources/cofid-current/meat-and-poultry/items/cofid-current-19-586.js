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
  "id": "cofid-current-19-586",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Enchiladas, beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 11.1,
    "energy_kcal": 153.0,
    "fat_g": 8.2,
    "fibre_g": 0.5,
    "folate_ug": 10.0,
    "iron_mg": 1.15,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 238.0,
    "protein_g": 9.6,
    "salt_g": 0.485,
    "sat_fat_g": 3.49,
    "sodium_mg": 194.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-586",
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
