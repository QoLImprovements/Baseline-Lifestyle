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
  "id": "cofid-current-19-552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef Wellington, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 16.2,
    "energy_kcal": 356.0,
    "fat_g": 25.5,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 2.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 201.0,
    "potassium_mg": 265.0,
    "protein_g": 16.3,
    "salt_g": 0.7425,
    "sat_fat_g": 10.19,
    "sodium_mg": 297.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 1073.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 2.26
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-552",
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
