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
  "id": "cofid-current-19-548",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef bourguignonne, made with lean beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.5,
    "energy_kcal": 105.0,
    "fat_g": 4.2,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 1.65,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 345.0,
    "protein_g": 14.1,
    "salt_g": 0.5825,
    "sat_fat_g": 1.25,
    "sodium_mg": 233.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-548",
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
