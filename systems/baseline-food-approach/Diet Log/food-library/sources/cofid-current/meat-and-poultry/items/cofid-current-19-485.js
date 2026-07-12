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
  "id": "cofid-current-19-485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet and sour pork, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 11.6,
    "energy_kcal": 176.0,
    "fat_g": 8.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.84,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 311.0,
    "protein_g": 12.7,
    "salt_g": 0.705,
    "sat_fat_g": 1.99,
    "sodium_mg": 282.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 14.0,
    "vitamin_e_mg": 2.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-485",
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
