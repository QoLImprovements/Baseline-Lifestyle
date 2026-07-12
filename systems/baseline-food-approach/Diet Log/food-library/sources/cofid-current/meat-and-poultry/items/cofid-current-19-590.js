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
  "id": "cofid-current-19-590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stew, beef, with dumplings, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 16.2,
    "energy_kcal": 190.0,
    "fat_g": 10.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.11,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 199.0,
    "protein_g": 10.1,
    "salt_g": 0.6,
    "sat_fat_g": 4.83,
    "sodium_mg": 240.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 223.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 1.54
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-590",
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
