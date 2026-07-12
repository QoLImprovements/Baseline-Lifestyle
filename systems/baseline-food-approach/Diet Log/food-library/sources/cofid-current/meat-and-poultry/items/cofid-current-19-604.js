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
  "id": "cofid-current-19-604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver and onions, stewed, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 5.4,
    "energy_kcal": 142.0,
    "fat_g": 6.9,
    "fibre_g": 1.5,
    "folate_ug": 146.0,
    "iron_mg": 5.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 286.0,
    "potassium_mg": 297.0,
    "protein_g": 14.7,
    "salt_g": 0.1325,
    "sat_fat_g": 1.34,
    "sodium_mg": 53.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 11970.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-604",
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
