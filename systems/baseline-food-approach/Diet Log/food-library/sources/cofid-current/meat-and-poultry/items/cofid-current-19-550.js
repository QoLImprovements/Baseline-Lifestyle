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
  "id": "cofid-current-19-550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stew, beef, made with lean beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 4.8,
    "energy_kcal": 93.0,
    "fat_g": 3.1,
    "fibre_g": 1.1,
    "folate_ug": 3.0,
    "iron_mg": 1.22,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 243.0,
    "protein_g": 12.2,
    "salt_g": 0.65,
    "sat_fat_g": 0.86,
    "sodium_mg": 260.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 297.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.19
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-550",
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
